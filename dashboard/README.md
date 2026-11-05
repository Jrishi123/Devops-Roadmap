# Bootcamp Dashboard (Standalone Web App)

A responsive, browser-based tracker for the 30-Day DevOps + AI Bootcamp.

## Run locally
No Node.js, build step, database or API key is required.

1. Open this folder.
2. Double-click `index.html`, or serve it locally:
   ```bash
   python3 -m http.server 8080
   ```
3. Visit `http://localhost:8080/dashboard/` if started from the repository root, or `http://localhost:8080/` if started inside this folder.

## Features
- 30-day roadmap with week/status filters and search.
- Daily status, actual study hours, quiz score, notes and lab/assignment checklists.
- Overview cards, weekly progress, next lesson and activity history.
- Capstone project checklist and notes.
- Export/import progress as JSON and reset with confirmation.
- Browser `localStorage` persistence.

## Data and privacy
Progress is saved only in the current browser profile using localStorage. It is not synced between devices and can be lost if browser site data is cleared. Use **Export progress** regularly and keep the JSON backup outside the repository. Do not commit private notes or exported progress unless you intend to share them.

## Customize the curriculum
Edit `days.js`. The dashboard reads the `window.BOOTCAMP_DAYS` array. Daily learning notes and expanded labs are in the repository's `days/` folder.

## Deploy on GitHub Pages
1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`.
4. Save. The dashboard is available at `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/dashboard/`.
