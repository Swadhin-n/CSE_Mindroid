# CSE Mindroid Website

Official website for the Department of Computer Science and Engineering, SVPCET. Built as a React + Vite single-page app, styled with Tailwind CSS and DaisyUI, and paired with a static Mindroid magazine archive hosted as HTML flipbooks.

## Table of Contents
- Overview
- Features
- Tech Stack
- Project Structure
- Routes
- Setup and Scripts
- Configuration Notes
- Updating the Magazine Archive
- Deployment
- Credits

## Overview
The website highlights department activities, events, and magazine issues. It combines a modern SPA experience with static magazine pages hosted in the public folder for fast, reliable access.

## Features
- Responsive navigation, layout, and event gallery.
- Mindroid archive with direct links to HTML magazine pages.
- Theme toggle with persistent dark mode.
- Contact form backed by Web3Forms API.

## Tech Stack
- React 19 + React Router
- Vite
- Tailwind CSS + DaisyUI
- EmailJS (dependency present)

## Project Structure
```
.
├── public/
│   ├── mindroid_23-24.html
│   ├── mindroid_december_2025.html
│   ├── mindroid_january_2026.html
│   ├── mindroid_july-august_2025.html
│   ├── mindroid_november_2025.html
│   ├── mindroid_october_2025.html
│   ├── mindroid_september_2025.html
│   ├── images/
│   │   ├── event_gallery/
│   │   ├── MINDROID_2023-24/
│   │   ├── MINDROID_December_2025/
│   │   ├── MINDROID_January_2026_00001/
│   │   ├── MINDROID_July-August_2024-25/
│   │   ├── MINDROID_November_2025_20251208_125717_0000 2/
│   │   ├── MINDROID_October_2025/
│   │   └── MINDROID_September_2025/
│   ├── jquery.js
│   ├── script.js
│   ├── style.css
│   └── turn.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── Carousel.jsx
│   │   ├── Contactus.jsx
│   │   ├── Events.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Magazines.jsx
│   │   ├── Navbar.jsx
│   │   └── YearMonthForm.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── vercel.json
```

## Routes
- `/` Home (carousel + magazine quick cards + year/month selector)
- `/archives` Magazine archive grid
- `/events` Event gallery
- `/contact` Contact form + map + support details

Static magazine pages live in `public/` and are opened via direct links:
- `/mindroid_23-24.html`
- `/mindroid_july-august_2025.html`
- `/mindroid_september_2025.html`
- `/mindroid_october_2025.html`
- `/mindroid_november_2025.html`
- `/mindroid_december_2025.html`
- `/mindroid_january_2026.html`

## Setup and Scripts
### Prerequisites
- Node.js 18+ (recommended)
- npm (or yarn/pnpm)

### Clone the Repository
```bash
git clone https://github.com/Swadhin-n/CSE_Mindroid.git
cd CSE_Mindroid
```

### Install
```bash
npm install
```

### Run (Development)
```bash
npm run dev
```
Vite will print a local URL (typically `http://localhost:5173`).

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Next Steps
1. Update content and assets for the latest events or magazine releases.
2. Edit routes or components if new pages are needed.
3. Run `npm run build` and deploy the `dist/` folder.

## Configuration Notes
- **Tailwind/DaisyUI**: Theme is defined in [tailwind.config.js](tailwind.config.js).
- **Dark Mode**: Toggle in the navbar saves `theme` to localStorage and applies a `dark` class to `html`.
- **Routing**: Vercel rewrite in [vercel.json](vercel.json) routes all SPA paths to `/`.
- **Contact Form**: Uses Web3Forms endpoint in the Contact component. Ensure the `access_key` is valid.

## Updating the Magazine Archive
1. Add new magazine HTML and assets to `public/`.
2. Add images to `public/images/` and reference them with absolute `/images/...` paths.
3. Update the archive list in `src/components/Magazines.jsx` and quick cards in `src/components/Card.jsx`.
4. Optionally update the year/month list in `src/components/YearMonthForm.jsx`.

## Deployment
- Vercel is supported via [vercel.json](vercel.json).
- Any static host that supports SPA rewrites and serves the `dist/` folder will work.

### Fast Deploy to College Server (SSH + rsync)
Use this if your main deployment is on your college server and you want faster repeat deploys.

1. Build locally once:
```bash
npm run build:prod
```

2. Create a local `.env.deploy` file (recommended):
```bash
cp .env.deploy.example .env.deploy
```

Then edit `.env.deploy` with your server details:
```bash
COLLEGE_SSH_HOST="your.server.edu"
COLLEGE_SSH_USER="your_username"
COLLEGE_WEB_ROOT="/var/www/cse-mindroid"
COLLEGE_SSH_PORT="22"
```

Alternative: you can still export these in shell/profile.

3. One-time passwordless SSH setup:
```bash
npm run setup:college:ssh
```

4. One-time local alias setup (`deploy-college` command):
```bash
npm run setup:college:alias
source ~/.zprofile
```

5. Deploy with incremental sync:
```bash
npm run deploy:college:quick
```

Or build + deploy in one command:
```bash
npm run deploy:college
```

Why this is faster:
- `rsync` uploads only changed files.
- `--delete` removes old files from the server automatically.
- No server-side Node.js install/build step is required.

### Asset Optimization Note
- The carousel image previously used `src/assets/CSE_RedFm.png` (~9.5 MB).
- It is now optimized as `src/assets/CSE_RedFm_optimized.jpg` (~1.7 MB), reducing build output and upload time.

## Credits
- Created by Swadhin Upadhyay and Nikita Bhushanwar.
- Department of Computer Science and Engineering, SVPCET, Nagpur.
