/**
 * Pre-deploy verification for the image-zoom feature.
 *
 * Runs against the PRODUCTION build (`vitepress preview`), not the dev server —
 * dev has no SSR pass, which is exactly where hydration bugs hide. Checks every
 * page of the built site for:
 *
 *   1. broken images   — every <img> actually decodes (naturalWidth > 0)
 *   2. zoom wiring     — every <img> is wrapped by the ZoomableImage component
 *   3. hydration       — no Vue hydration-mismatch warnings in the console
 *   4. leaked markup   — no raw <ZoomableImage> tags in the DOM
 *   5. SPA navigation  — images stay correct across client-side route changes,
 *                        with no zoom overlay stuck on the next page
 *   6. zoom behaviour  — click opens the zoom, overlay click closes it and
 *                        clears the transform
 *
 * Zero npm dependencies: drives headless Chrome over the DevTools Protocol
 * using the global WebSocket built into Node >= 22.
 *
 *   npm run docs:build && npm run docs:verify
 *
 * Exits 0 when everything is clean, 1 otherwise (usable in CI).
 */

import { spawn } from 'node:child_process'
import { readdirSync, statSync, existsSync, mkdtempSync, rmSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, '.vitepress', 'dist')
const PORT = Number(process.env.PREVIEW_PORT || 4173)
const CDP_PORT = Number(process.env.CDP_PORT || 9222)
const BASE = `http://localhost:${PORT}`
const CDP = `http://127.0.0.1:${CDP_PORT}`

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

if (!existsSync(DIST)) {
  console.error(`No build found at ${DIST}. Run "npm run docs:build" first.`)
  process.exit(1)
}

const chromeBin = CHROME_CANDIDATES.find((p) => existsSync(p))
if (!chromeBin) {
  console.error('Could not find Chrome. Set CHROME_PATH to the browser binary.')
  process.exit(1)
}

// ---------------------------------------------------------------- CDP client

let nextId = 0
const pending = new Map()
const listeners = new Set()

function connect(url) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url)
    ws.onopen = () => resolve(ws)
    ws.onerror = () => reject(new Error('failed to open CDP websocket'))
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data)
      if (msg.id !== undefined && pending.has(msg.id)) {
        const { resolve, reject } = pending.get(msg.id)
        pending.delete(msg.id)
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result)
      } else {
        for (const fn of listeners) fn(msg)
      }
    }
  })
}

function send(ws, method, params = {}, sessionId) {
  const id = ++nextId
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject })
    ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }))
    setTimeout(() => {
      if (pending.has(id)) {
        pending.delete(id)
        reject(new Error(`CDP timeout: ${method}`))
      }
    }, 30000)
  })
}

async function waitFor(url, label, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url)
      if (r.ok) return await r.json().catch(() => ({}))
    } catch {
      /* not up yet */
    }
    await sleep(500)
  }
  throw new Error(`${label} never became reachable at ${url}`)
}

// ------------------------------------------------------------- page discovery

function pageUrls(dir) {
  const out = []
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      const p = join(d, name)
      if (statSync(p).isDirectory()) {
        if (name === 'assets') continue
        walk(p)
      } else if (name.endsWith('.html')) {
        let rel = relative(dir, p).replace(/\\/g, '/').replace(/\.html$/, '')
        if (rel === 'index') rel = ''
        else if (rel.endsWith('/index')) rel = rel.slice(0, -'/index'.length)
        out.push('/' + rel)
      }
    }
  }
  walk(dir)
  return out.sort()
}

// ------------------------------------------------------- in-page check script

const CHECK = `(async () => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const imgs = [...document.querySelectorAll('.vp-doc img')];

  // ZoomableImage sets loading="lazy", so off-screen images would never load in
  // a headless viewport and would look broken. Force them, and scroll so the
  // intersection observer fires as it would for a real reader.
  imgs.forEach(i => { i.loading = 'eager'; });
  const h = document.body.scrollHeight;
  for (let y = 0; y < h; y += 400) { window.scrollTo(0, y); await wait(12); }
  window.scrollTo(0, 0);
  await wait(60);

  await Promise.all(imgs.map(i => (i.complete && i.naturalWidth)
    ? null
    : new Promise(r => { i.onload = i.onerror = r; setTimeout(r, 15000); })));

  return {
    total: imgs.length,
    broken: imgs.filter(i => !i.naturalWidth).map(i => i.getAttribute('src')),
    unwrapped: imgs.filter(i => !i.closest('.image-wrapper')).map(i => i.getAttribute('src')),
    stuckOverlay: document.querySelectorAll('.overlay').length,
    rawTag: document.body.innerHTML.includes('<ZoomableImage'),
  };
})()`

const ZOOM_CHECK = `(async () => {
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const c = document.querySelector('.vp-doc .image-container');
  if (!c) return { ok: false, why: 'no .image-container on page' };
  const img = c.querySelector('img');
  c.click(); await wait(450);
  const opened = c.classList.contains('clicked');
  const overlay = !!document.querySelector('.overlay');
  const transformed = !!img.style.transform;
  document.querySelector('.overlay')?.click(); await wait(450);
  const closed = !c.classList.contains('clicked');
  const overlayGone = !document.querySelector('.overlay');
  const transformCleared = img.style.transform === '';
  return {
    ok: opened && overlay && transformed && closed && overlayGone && transformCleared,
    opened, overlay, transformed, closed, overlayGone, transformCleared,
  };
})()`

const HYDRATION = /hydrat|mismatch|Failed to resolve component|did not match/i

// ----------------------------------------------------------------- processes

const profileDir = mkdtempSync(join(tmpdir(), 'vp-verify-chrome-'))
const children = []

function cleanup() {
  for (const c of children) {
    try {
      c.kill('SIGTERM')
    } catch {
      /* already gone */
    }
  }
  try {
    rmSync(profileDir, { recursive: true, force: true })
  } catch {
    /* best effort */
  }
}
process.on('exit', cleanup)
process.on('SIGINT', () => {
  cleanup()
  process.exit(130)
})

// ----------------------------------------------------------------------- run

let failed = 0

try {
  console.log(`Starting preview on :${PORT} …`)
  children.push(
    spawn('npx', ['vitepress', 'preview', '--port', String(PORT)], {
      cwd: ROOT,
      stdio: 'ignore',
    })
  )
  await waitFor(BASE + '/', 'preview server')

  console.log(`Starting headless Chrome on :${CDP_PORT} …`)
  children.push(
    spawn(
      chromeBin,
      [
        '--headless=new',
        `--remote-debugging-port=${CDP_PORT}`,
        `--user-data-dir=${profileDir}`,
        '--no-first-run',
        '--no-default-browser-check',
        '--disable-gpu',
        'about:blank',
      ],
      { stdio: 'ignore' }
    )
  )
  const version = await waitFor(`${CDP}/json/version`, 'Chrome DevTools endpoint')

  const browser = await connect(version.webSocketDebuggerUrl)
  const { targetId } = await send(browser, 'Target.createTarget', { url: 'about:blank' })
  const { sessionId } = await send(browser, 'Target.attachToTarget', {
    targetId,
    flatten: true,
  })

  let consoleMsgs = []
  listeners.add((msg) => {
    if (msg.sessionId !== sessionId) return
    if (msg.method === 'Runtime.consoleAPICalled') {
      consoleMsgs.push({
        level: msg.params.type,
        text: (msg.params.args || []).map((a) => a.value ?? a.description ?? '').join(' '),
      })
    }
    if (msg.method === 'Log.entryAdded') {
      consoleMsgs.push({ level: msg.params.entry.level, text: msg.params.entry.text })
    }
  })

  await send(
    browser,
    'Emulation.setDeviceMetricsOverride',
    { width: 1440, height: 1200, deviceScaleFactor: 1, mobile: false },
    sessionId
  )
  await send(browser, 'Page.enable', {}, sessionId)
  await send(browser, 'Runtime.enable', {}, sessionId)
  await send(browser, 'Log.enable', {}, sessionId)

  const urls = pageUrls(DIST)
  console.log(`\nVerifying ${urls.length} pages against ${BASE}\n`)

  const results = []
  let totalImgs = 0

  for (const [i, url] of urls.entries()) {
    consoleMsgs = []
    await send(browser, 'Page.navigate', { url: BASE + url }, sessionId)
    await sleep(450) // let hydration settle

    let r
    try {
      const res = await send(
        browser,
        'Runtime.evaluate',
        { expression: CHECK, awaitPromise: true, returnByValue: true },
        sessionId
      )
      r = res.result.value
    } catch (e) {
      r = { error: String(e.message) }
    }

    const warnings = consoleMsgs.filter((m) => HYDRATION.test(m.text))
    totalImgs += r.total || 0
    results.push({ url, ...r, warnings })

    const bad =
      r.error || r.broken?.length || r.unwrapped?.length || r.rawTag ||
      r.stuckOverlay || warnings.length
    console.log(
      `${String(i + 1).padStart(3)}/${urls.length} ${bad ? 'FAIL' : ' ok '}  ${url} (${r.total ?? '?'} imgs)`
    )
  }

  // --- SPA navigation ------------------------------------------------------
  console.log('\n--- SPA navigation ---')
  const imgPages = results.filter((r) => r.total > 0).slice(0, 3)
  const spaFail = []
  if (imgPages.length >= 2) {
    await send(browser, 'Page.navigate', { url: BASE + imgPages[0].url }, sessionId)
    await sleep(600)
    for (const target of imgPages.slice(1)) {
      consoleMsgs = []
      await send(
        browser,
        'Runtime.evaluate',
        {
          expression: `(() => {
            const a = document.createElement('a');
            a.href = ${JSON.stringify(target.url)};
            document.body.appendChild(a);
            a.click();
          })()`,
        },
        sessionId
      )
      await sleep(900)
      const res = await send(
        browser,
        'Runtime.evaluate',
        { expression: CHECK, awaitPromise: true, returnByValue: true },
        sessionId
      )
      const r = res.result.value
      const warnings = consoleMsgs.filter((m) => HYDRATION.test(m.text))
      const ok =
        !r.broken.length && !r.unwrapped.length && !r.stuckOverlay && !warnings.length
      console.log(`  ${ok ? ' ok ' : 'FAIL'}  ${imgPages[0].url} -> ${target.url} (${r.total} imgs)`)
      if (!ok) spaFail.push({ url: target.url, ...r, warnings })
    }
  }

  // --- zoom interaction ----------------------------------------------------
  console.log('\n--- zoom interaction ---')
  const zoomPage = results.find((r) => r.total > 0)
  let zoom = { ok: true, skipped: true }
  if (zoomPage) {
    await send(browser, 'Page.navigate', { url: BASE + zoomPage.url }, sessionId)
    await sleep(700)
    const res = await send(
      browser,
      'Runtime.evaluate',
      { expression: ZOOM_CHECK, awaitPromise: true, returnByValue: true },
      sessionId
    )
    zoom = res.result.value
    console.log(`  ${zoom.ok ? ' ok ' : 'FAIL'}  open/close zoom on ${zoomPage.url}`)
    if (!zoom.ok) console.log('   ', JSON.stringify(zoom))
  }

  // --- summary -------------------------------------------------------------
  const brokenPages = results.filter((r) => r.broken?.length)
  const unwrappedPages = results.filter((r) => r.unwrapped?.length)
  const warnPages = results.filter((r) => r.warnings?.length)
  const rawTagPages = results.filter((r) => r.rawTag)
  const stuckPages = results.filter((r) => r.stuckOverlay)
  const errPages = results.filter((r) => r.error)

  console.log('\n================ SUMMARY ================')
  console.log(`pages checked        : ${results.length}`)
  console.log(`images checked       : ${totalImgs}`)
  console.log(`pages w/ broken img  : ${brokenPages.length}`)
  console.log(`imgs not zoom-wrapped: ${unwrappedPages.reduce((n, p) => n + p.unwrapped.length, 0)}`)
  console.log(`hydration warnings   : ${warnPages.length}`)
  console.log(`raw component tags   : ${rawTagPages.length}`)
  console.log(`stuck overlays       : ${stuckPages.length}`)
  console.log(`eval errors          : ${errPages.length}`)
  console.log(`SPA nav failures     : ${spaFail.length}`)
  console.log(`zoom interaction     : ${zoom.ok ? 'ok' : 'FAIL'}`)

  for (const p of brokenPages) console.log(`\nBROKEN ${p.url}\n  ` + p.broken.join('\n  '))
  for (const p of unwrappedPages) console.log(`\nUNWRAPPED ${p.url}\n  ` + p.unwrapped.join('\n  '))
  for (const p of warnPages) console.log(`\nWARN ${p.url}\n  ` + p.warnings.map((w) => w.text).join('\n  '))
  for (const p of errPages) console.log(`\nERROR ${p.url}\n  ${p.error}`)

  failed =
    brokenPages.length + unwrappedPages.length + warnPages.length +
    rawTagPages.length + stuckPages.length + errPages.length + spaFail.length +
    (zoom.ok ? 0 : 1)

  console.log(`\n${failed === 0 ? 'PASS — all checks clean' : `FAIL — ${failed} problem group(s)`}`)

  await send(browser, 'Target.closeTarget', { targetId })
  browser.close()
} catch (e) {
  console.error('\nverification aborted:', e.message)
  failed = 1
}

cleanup()
process.exit(failed === 0 ? 0 : 1)
