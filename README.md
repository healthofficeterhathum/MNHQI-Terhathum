# MNHQI Dashboard — Health Office, Terhathum

Birthing-centre readiness (MNH QI) dashboard showing **Terhathum district only**.

This is a copy of the shared Koshi MNHQI dashboard (source: github.com/sankhuwasabha-dho/MNHQI).
It reads the same live Google Sheet that KoboToolbox submissions flow into, and keeps only rows whose
district is Terhathum. Data entry does not change: keep submitting in the same Kobo form.

## What each file does

| File | What it does |
|---|---|
| `index.html` | The page skeleton: header (office name), tabs, empty boxes for tables/charts |
| `config.js` | **The only file you normally edit.** Where the data comes from, and which district to show |
| `app.js` | Loads the sheet, calculates domain scores (D1–D13, out of 92) and BEONC (out of 22), draws everything. Keep it identical to the shared project's `app.js` |
| `styles.css` | Colours, fonts, layout |
| `nepal-emblem.png` | Header emblem |

The two lines that make this "Terhathum only" are in `config.js`:

```js
const DISTRICT_SCOPE = { include: ["terhathum", "terathum", "tehrathum"] };
```

Three spellings are listed because older submissions typed the district name by hand.

## Publish it on GitHub Pages (free)

1. Sign in to github.com → **New repository** → name it e.g. `mnhqi-terhathum` → Public → Create.
2. On the new repo page click **uploading an existing file**, drag in all files from this folder, then **Commit changes**.
3. **Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save**.
4. After about a minute the site is live at `https://<your-username>.github.io/mnhqi-terhathum/`.
   Put that link on the office website.

## Test it on your own computer first (optional)

A page that downloads data must be opened through a small local web server, not by double-clicking:

```bash
cd mnhqi-terhathum
python -m http.server 8000
```

Then open http://localhost:8000 in the browser. Click **Refresh** to pull the latest submissions.

## If it shows "No assessments"

- The Google Sheet must stay shared as "Anyone with the link → Viewer" (this is controlled by the
  owner of the shared sheet — Health Office Sankhuwasabha).
- Check how Terhathum is spelled in the sheet's `district` column; if it is a new spelling, add it
  (lowercase) to the `include` list in `config.js`.

## Keeping up to date

If the shared project later fixes or improves `app.js` or `styles.css`, copy the new versions of those
two files into your repository. Do not copy their `index.html` or `config.js` (those carry Sankhuwasabha's
name and scope).
