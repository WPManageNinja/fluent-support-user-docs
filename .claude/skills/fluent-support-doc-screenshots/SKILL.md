---
name: fluent-support-doc-screenshots
description: Take, annotate, and place pixel-consistent screenshots of the Fluent Support admin and Customer Portal for the Fluent Support user docs. Use whenever the user asks to "take screenshots", "update the screenshot", "capture the UI", or when a doc page needs an image of a Fluent Support screen. Covers the headless-Chrome runner (scripts/screenshots/shoot.cjs), JSON shot plans, highlight/arrow/crop rules, naming, placing images in markdown, and verification. Do NOT use the Claude-in-Chrome extension or macOS screencapture for this.
---

# Fluent Support Doc Screenshots

Every screenshot is taken by a script, never by hand, so the output is reproducible and every image shares the same framing, scale and annotation style. Read this whole file before shooting.

Repo: `/Users/authlab-24/Desktop/WPManageNinja-Docs/fluent-support-user-docs`

---

## 1. Facts you must not rediscover

| Thing | Value |
|---|---|
| Dev site | Local by Flywheel site **fcrmV3**, `http://localhost:10053`. Login `admin` / `admin`. **Use `localhost`, not `fcrmv3.local:10053`**: the WordPress siteurl is `localhost:10053` and the other host breaks the login cookie ("Cookies are blocked"). Override with env `FS_DOCS_SITE`, `FS_DOCS_USER`, `FS_DOCS_PASS`. |
| Plugin code the site runs | `~/Local Sites/fcrmv3/app/public/wp-content/plugins/fluent-support` (+ `fluent-support-pro`), a normal install, **no git**. It shows whatever version is installed there (2.4.5 at time of writing). Unreleased UI (2.4.6+) is only visible after the user installs a newer build on the site. |
| Admin URL pattern | `http://localhost:10053/wp-admin/admin.php?page=fluent-support#<route>`, for example `#/tickets`, `#/customers`. Read route paths from the plugin's Vue router; do not guess. |
| App root | `#alpha_app` (`app/Views/admin/menu.php`). The `"app"` clip is this element's box: Fluent Support top navbar + left sidebar + content, with the WordPress bar and menu hidden. |
| Runner | `npm run shots -- scripts/screenshots/plans/<plan>.json`. Library in `scripts/screenshots/lib/`. |
| Browser | Headless **real Google Chrome** (`/Applications/Google Chrome.app`) through `playwright-core` (a devDependency, no browser download). |
| Output | `docs/public/images/<section>/<sub>/<name>.webp`, referenced in markdown as `/images/<section>/<sub>/<name>.webp`. Raw PNGs land in `scripts/screenshots/raw/` (gitignored). |
| Scale | Viewport **1600 CSS px wide**, device scale factor **2**, so images are ~2880 px wide. Never resize output. |
| Annotation colour | `#15BE7C` (Fluent Support green), defined in `scripts/screenshots/lib/annotate.cjs`. The existing library marks items with a **green rounded box**, so prefer `highlights` over arrows. |
| webp quality | 82. |

### What does NOT work (do not retry)
- **Claude-in-Chrome extension** (`mcp__claude-in-chrome__*`): it is not allowed for this task. Never use it, and never log in on another computer. Only this Mac.
- **AppleScript + `screencapture`**: captures overlapping windows and needs OS permissions the CLI lacks.

---

## 2. Workflow (follow in order)

### Step 1: Decide the shot list from the doc, not from the UI
For the page you are writing or updating, list every screenshot as a row:

```
name (file slug) | what it must show | clip type | highlight/arrow target | where it goes in the .md
```

- One image per procedural step that involves a click, placed right after the sentence that says to click. Pure reading steps get one image per section.
- Mark a control only where the sentence says "click", "select" or "open". A field-reference image gets no annotation.
- Reuse the existing file name when replacing a stale screenshot, so the markdown stays untouched. Check `docs/public/images/<section>/` first.

Naming: `kebab-case`, `<screen>-<what>.webp`, for example `ticket-views-sidebar.webp`. Existing older files use `name-1.webp`; keep those names when replacing them.

### Step 2: Confirm the UI is on the site
- Check the installed version: `grep -m1 "Version" ~/"Local Sites"/fcrmv3/app/public/wp-content/plugins/fluent-support/fluent-support.php`.
- The 2.4.6 changes (ticket views sidebar, redesigned customers screens, purchases widgets, portal list) will not render until a newer build is installed there. If the feature is missing from the site, **stop and ask the user** which build to install. Do not shoot something similar.
- The site shows real-looking customer names and emails. Before shooting a screen that lists customers or tickets, check that the visible names are safe for public docs; if not, tell the user.

### Step 3: Write the plan JSON
Create `scripts/screenshots/plans/<page-slug>.json`. Copy `plans/example-ticket-filters.json` and edit it. The full step vocabulary is at the top of `scripts/screenshots/shoot.cjs`. The essentials:

```json
{
  "outDir": "docs/public/images/ticket-management/daily-operations/view-manage-ticket-entries",
  "viewport": { "width": 1600, "height": 1100 },
  "steps": [
    { "admin": "/tickets" },
    { "shot": { "name": "ticket-management-2", "clip": "app", "crop": { "height": 700 },
        "highlights": [ ".fs_sidebar_items ul" ] } },
    { "shot": { "name": "ticket-management-add-ticket", "clip": "app", "crop": { "height": 700 },
        "arrows": [ { "target": { "role": "button", "name": "Add Ticket" }, "from": "bottom", "len": 150 } ] } }
  ]
}
```

Selector forms accepted wherever `<sel>` appears:
- CSS string: `".fs_sidebar_items ul"`
- `{ "text": "Add Ticket" }`: exact visible text
- `{ "role": "button", "name": "^save$" }`: accessible role + name regex
- `{ "selector": "css", "hasText": "Closed" }`: CSS narrowed by text
- `{ "row": "Business Name", "part": "control" | "row" }`: an Element Plus `.el-form-item` found by its label. Use it on settings forms.

Clip rules:
- `"app"`: the whole Fluent Support admin app. Use for "Accessing…" shots and any shot where the sidebar location matters.
- `{ "rows": [...], "pad": 24 }`: one or more form rows.
- `{ "element": "<sel>", "pad": 24 }`: a dialog, card, drawer or table. Element Plus dialogs live under `<body>`.
- `"crop": { "height": N }` (image px): trims dead space at the bottom of a tall `"app"` shot. Use it when the viewport is taller than the content, as in the example above.
- Raise `viewport.height` when a form is taller than 1100 px, then crop.

Annotation rules:
- Default to `highlights` (a green box around the control or group), the style of the existing images. Use `arrows` only for a single small control. `from` is the side the arrow comes from; choose the side with empty space. One annotation per image. Never label it; the sentence above the image is the caption.
- Make the target selector as tight as the thing you mean. `.fs_sidebar_items` is the whole sidebar column; `.fs_sidebar_items ul` is just the list of items.

Data rules:
- Use `fillByLabel` to type realistic sample values **without clicking Save**. Never real customer data.
- For a setting that must be saved to show its effect, save, shoot, then put the setting back.

### Step 4: Run it
```
npm run shots -- scripts/screenshots/plans/<page-slug>.json
npm run shots -- scripts/screenshots/plans/<page-slug>.json --only=name1,name2
```
Each shot logs the written path and pixel size. Expect ~1-3 s per shot plus ~10 s login. If a selector is not found, read the Vue file in the plugin (`resources/admin/...` in the source repo, or the built assets) for the real class names; do not guess.

### Step 5: Verify every image (mandatory)
Open each produced `.webp` with the Read tool and check:
1. No WordPress admin bar, no WP left menu, no browser chrome, no notice banner.
2. The intended control is fully in frame with breathing room; nothing is cut mid-word.
3. The box or arrow sits on the right control and does not cover text.
4. State is right: the correct tab or filter is selected, the dialog is open.
5. Size is sane: ~2880 px wide for `"app"` shots; no large empty area at the bottom (fix with `crop.height`).
If anything fails, fix the plan and re-run with `--only=`. Do not hand-edit images.

### Step 6: Place in markdown
- Reference: `![Screenshot of <what the reader sees>](/images/<section>/<sub>/<name>.webp)`, matching the alt-text style of the page you are editing.
- Position: immediately after the sentence or step the image illustrates, on its own line with a blank line above and below.
- Then run `npm run docs:build` (must be clean) and `npm run docs:verify` (checks image references).
- Do not commit unless asked.

### Step 7: Leave the site as you found it
Undo any setting you saved. Keep the plan JSON in `scripts/screenshots/plans/` as the regression fixture for the next release.

---

## 3. Recipes

- **Settings tab, full page** → `"clip": "app"` plus `crop.height`, then one `rows` shot per section that has its own image.
- **A dialog or modal** → click the trigger, `{ "wait": 800 }`, then `"clip": { "element": ".el-dialog", "pad": 24 }`.
- **Customer Portal** → `{ "front": "/<portal-page>/", "hideThemeHeader": true }` then `"clip": "viewport"` or an element clip. You are logged in as the admin user, so use a page where that is acceptable, or tell the user.
- **Dark mode** → toggle the theme in the UI with `click` steps (or set it before the shot), shoot, then switch it back.

---

## 4. Hard rules
- Never take screenshots by hand or through the Chrome extension. If the runner cannot do something, extend `lib/harness.cjs` and keep the plan declarative.
- Never crop out part of a control to fit an annotation; move the annotation.
- Never publish an image that shows sensitive customer data or the WordPress chrome.
- Never invent UI. If a selector or label from the doc cannot be found on the site, stop and tell the user which step is missing.
