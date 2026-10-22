// Headless-Chrome harness for Fluent Support doc screenshots.
// Drives the REAL Google Chrome on this Mac via playwright-core (no browser download,
// no macOS permissions, same /etc/hosts as the shell, so *.local Local-by-Flywheel
// sites resolve). See .claude/skills/fluent-support-doc-screenshots/SKILL.md.

const path = require('path');
const fs = require('fs');
const { createRequire } = require('module');

function loadPlaywright() {
  try { return require('playwright-core'); } catch (e) { /* fall through */ }
  // Fallback: the sibling FluentCart docs repo ships playwright-core too.
  const sibling = '/Users/authlab-24/Desktop/WPManageNinja-Docs/fluent-cart-docs/package.json';
  if (fs.existsSync(sibling)) {
    try { return createRequire(sibling)('playwright-core'); } catch (e) { /* fall through */ }
  }
  throw new Error('playwright-core not found. Run `npm i -D playwright-core` in the docs repo (no browser download needed).');
}

const { chromium } = loadPlaywright();

const DEFAULTS = {
  // Local by Flywheel site "fcrmV3". Its WordPress siteurl is localhost:10053; using fcrmv3.local:10053
  // breaks the login cookie. Override with FS_DOCS_SITE.
  site: process.env.FS_DOCS_SITE || 'http://localhost:10053',
  // Credentials come from the environment so they never land in a plan or in git.
  user: process.env.FS_DOCS_USER || 'admin',
  pass: process.env.FS_DOCS_PASS || 'admin',
  chrome: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  viewport: { width: 1600, height: 1100 },
  scale: 2,
  // Root element of the Fluent Support admin SPA (app/Views/admin/menu.php).
  appRoot: '#alpha_app',
  rawDir: path.join(__dirname, '..', 'raw'),
};

class Harness {
  constructor(opts = {}) {
    const clean = Object.fromEntries(Object.entries(opts).filter(([, v]) => v !== undefined && v !== null));
    this.o = { ...DEFAULTS, ...clean, viewport: { ...DEFAULTS.viewport, ...(opts.viewport || {}) } };
    fs.mkdirSync(this.o.rawDir, { recursive: true });
    this.loggedIn = false;
  }

  async launch() {
    this.browser = await chromium.launch({ executablePath: this.o.chrome, headless: true });
    this.context = await this.browser.newContext({ viewport: this.o.viewport, deviceScaleFactor: this.o.scale });
    this.page = await this.context.newPage();
    return this.page;
  }

  async close() { if (this.browser) await this.browser.close(); }

  async setViewport(v) {
    this.o.viewport = { ...this.o.viewport, ...v };
    await this.page.setViewportSize(this.o.viewport);
    await this.page.waitForTimeout(400);
  }

  // WP login. The redirect after submit is occasionally slow/missed, so retry.
  async login() {
    const p = this.page;
    for (let attempt = 1; attempt <= 4; attempt++) {
      await p.goto(`${this.o.site}/wp-login.php`, { waitUntil: 'load', timeout: 90000 });
      await p.waitForTimeout(800);
      await p.fill('#user_login', this.o.user);
      await p.fill('#user_pass', this.o.pass);
      await p.waitForTimeout(300);
      await p.press('#user_pass', 'Enter');
      try {
        await p.waitForURL('**/wp-admin/**', { timeout: 20000, waitUntil: 'commit' });
        this.loggedIn = true;
        return;
      } catch (e) {
        const err = await p.locator('#login_error').textContent().catch(() => '');
        console.log(`  login attempt ${attempt} did not redirect${err ? ': ' + err.trim() : ''}`);
      }
    }
    throw new Error('login failed after 4 attempts');
  }

  // Admin SPA route, e.g. "/tickets" or "/settings/business-settings".
  async gotoAdmin(hash) {
    if (!this.loggedIn) await this.login();
    const p = this.page;
    await p.goto(`${this.o.site}/wp-admin/admin.php?page=fluent-support#${hash}`, { waitUntil: 'networkidle', timeout: 90000 });
    await p.waitForSelector(this.o.appRoot, { timeout: 30000 });
    await p.waitForTimeout(1200);
    await this.cleanAdminChrome();
  }

  // Any front-end URL (path or absolute), e.g. the Customer Portal page. Logged in by default
  // so the page shows a real customer or agent session.
  async gotoFront(url, { hideThemeHeader = true, login = true, waitUntil = 'networkidle' } = {}) {
    if (login && !this.loggedIn) await this.login();
    const p = this.page;
    const full = /^https?:/.test(url) ? url : this.o.site + url;
    await p.goto(full, { waitUntil, timeout: 90000 });
    await p.waitForTimeout(1200);
    await p.addStyleTag({ content: `
      #wpadminbar { display: none !important; } html { margin-top: 0 !important; }
      ${hideThemeHeader ? 'header.wp-block-template-part, .wp-site-blocks > header, .wp-block-template-part:first-child { display: none !important; }' : ''}
    ` });
    await p.waitForTimeout(300);
  }

  // Hide WP admin chrome without changing layout, plus update/notice banners.
  async cleanAdminChrome() {
    const p = this.page;
    await p.addStyleTag({ content: `
      #wpadminbar, #adminmenumain, #adminmenuback, #adminmenuwrap { visibility: hidden !important; }
      #wpfooter { display: none !important; }
      .notice, .update-nag, .updated, .error:not(.el-form-item--error) { display: none !important; }
    ` });
    await p.waitForTimeout(300);
  }

  async hideCss(selector) {
    await this.page.addStyleTag({ content: `${selector} { display: none !important; }` });
    await this.page.waitForTimeout(200);
  }

  async scrollTop() {
    await this.page.evaluate(() => {
      window.scrollTo(0, 0);
      document.querySelectorAll('*').forEach(e => { if (e.scrollTop) e.scrollTop = 0; });
    });
    await this.page.waitForTimeout(300);
  }

  // Locator helpers -------------------------------------------------------

  loc(sel) {
    // Strings are plain Playwright selectors. {text} matches exact visible text, {role,name}
    // the accessible role + name regex, {selector,hasText} a CSS selector narrowed by text.
    if (typeof sel === 'string') return this.page.locator(sel).first();
    if (sel.text) return this.page.getByText(sel.text, { exact: true }).first();
    if (sel.role) return this.page.getByRole(sel.role, { name: new RegExp(sel.name, 'i') }).first();
    if (sel.selector) return this.page.locator(sel.selector, sel.hasText ? { hasText: sel.hasText } : {}).first();
    throw new Error('Unsupported selector: ' + JSON.stringify(sel));
  }

  // Bounding box of a form row (an Element Plus .el-form-item, matched by its label text)
  // and of the control inside it (radio group / switch / select / input).
  async settingsRow(labelText) {
    return this.page.evaluate((txt) => {
      const lab = Array.from(document.querySelectorAll('.el-form-item__label, label')).find(e => e.textContent.trim().replace(/\s*:$/, '') === txt);
      if (!lab) return null;
      const row = lab.closest('.el-form-item') || lab.parentElement;
      const r = row.getBoundingClientRect();
      const ctrl = row.querySelector('.el-radio-group, [role="radiogroup"], .el-switch, .el-select, .el-input, .el-textarea, input, textarea');
      const c = ctrl ? ctrl.getBoundingClientRect() : null;
      return {
        row: { x: r.x, y: r.y, width: r.width, height: r.height },
        control: c ? { x: c.x, y: c.y, width: c.width, height: c.height } : null,
      };
    }, labelText);
  }

  // Input actions ---------------------------------------------------------

  async click(sel) { await this.loc(sel).click(); await this.page.waitForTimeout(500); }

  async fill(sel, value) { await this.loc(sel).fill(String(value)); await this.page.waitForTimeout(200); }

  // Type into the input that belongs to a visible form label. Sets the value through the
  // native setter so Vue picks it up. NOT saved.
  async fillByLabel(label, value) {
    await this.page.evaluate(({ label, value }) => {
      const lab = Array.from(document.querySelectorAll('.el-form-item__label, label')).find(e => e.textContent.trim().replace(/\s*:$/, '') === label);
      if (!lab) return false;
      const row = lab.closest('.el-form-item') || lab.parentElement;
      const input = row.querySelector('input, textarea');
      if (!input) return false;
      const proto = input.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(proto, 'value').set.call(input, value);
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
      return true;
    }, { label, value });
    await this.page.waitForTimeout(200);
  }

  // Screenshots -----------------------------------------------------------

  // Resolve a clip spec to CSS-pixel page coordinates.
  //   "app"                       -> the Fluent Support admin app (#alpha_app: top navbar, sidebar, content)
  //   "viewport"                  -> whole viewport
  //   {element: sel, pad}         -> that element's box (+pad)
  //   {rows: [label,...], pad}    -> union of form rows (+pad)
  //   {x, y, width, height}       -> explicit CSS px
  async resolveClip(spec = 'app') {
    const vp = this.page.viewportSize();
    if (spec === 'viewport') return { x: 0, y: 0, width: vp.width, height: vp.height };
    if (spec === 'app') {
      const b = await this.page.locator(this.o.appRoot).first().boundingBox();
      if (!b) throw new Error('app root not found: ' + this.o.appRoot);
      return { x: b.x, y: b.y, width: b.width, height: b.height };
    }
    if (spec.element) {
      const b = await this.loc(spec.element).boundingBox();
      if (!b) throw new Error('clip element not found: ' + JSON.stringify(spec.element));
      const pad = spec.pad || 0;
      const x = Math.max(0, b.x - pad), y = Math.max(0, b.y - pad);
      // extendRight: keep the element's left edge but run to the viewport's right edge (mirrored margin).
      const width = spec.extendRight ? vp.width - x - x : b.width + pad * 2;
      return { x, y, width, height: b.height + pad * 2 };
    }
    if (spec.rows) {
      const boxes = [];
      for (const label of spec.rows) {
        const r = await this.settingsRow(label);
        if (!r) throw new Error('form row not found: ' + label);
        boxes.push(r.row);
      }
      const pad = spec.pad == null ? 24 : spec.pad;
      const x1 = Math.min(...boxes.map(b => b.x)) - pad, y1 = Math.min(...boxes.map(b => b.y)) - pad;
      const x2 = Math.max(...boxes.map(b => b.x + b.width)) + pad, y2 = Math.max(...boxes.map(b => b.y + b.height)) + pad;
      return { x: Math.max(0, x1), y: Math.max(0, y1), width: x2 - Math.max(0, x1), height: y2 - Math.max(0, y1) };
    }
    if (spec.width && spec.height) return { x: spec.x || 0, y: spec.y || 0, width: spec.width, height: spec.height };
    throw new Error('Unsupported clip: ' + JSON.stringify(spec));
  }

  // Resolve an arrow/highlight target to IMAGE pixels relative to a clip.
  //   {selector|text|role}        -> element box
  //   {row: label, part: 'control'|'row'} -> form row part
  async resolveTarget(spec, clip) {
    let b;
    if (spec.row) {
      const r = await this.settingsRow(spec.row);
      if (!r) throw new Error('form row not found: ' + spec.row);
      b = (spec.part === 'row' || !r.control) ? r.row : r.control;
    } else {
      b = await this.loc(spec).boundingBox();
      if (!b) throw new Error('target not found: ' + JSON.stringify(spec));
    }
    const s = this.o.scale;
    return { x: (b.x - clip.x) * s, y: (b.y - clip.y) * s, width: b.width * s, height: b.height * s };
  }

  // Take a raw PNG for the clip; returns { file, clip }.
  async shotRaw(name, clipSpec = 'app') {
    const clip = await this.resolveClip(clipSpec);
    const vp = this.page.viewportSize();
    clip.width = Math.min(clip.width, vp.width - clip.x);
    clip.height = Math.min(clip.height, vp.height - clip.y);
    const file = path.join(this.o.rawDir, `${name}.png`);
    await this.page.screenshot({ path: file, clip });
    return { file, clip };
  }
}

module.exports = { Harness, DEFAULTS };
