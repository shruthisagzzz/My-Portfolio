# Shruthi Sagar — Portfolio

A dark, glassmorphic personal portfolio built with React 19, TypeScript, Vite, and Tailwind CSS v4 — featuring a hand-built canvas particle network that reveals my skills node-by-node, a live GitHub contribution calendar, and a fully routed multi-page layout.

**[Live demo →](https://my-portfolio-git-main-shruthisagarbaby-gmailcoms-projects.vercel.app/)

![tech](https://img.shields.io/badge/React-19-149eca?logo=react&logoColor=white)
![tech](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript&logoColor=white)
![tech](https://img.shields.io/badge/Vite-6-646cff?logo=vite&logoColor=white)
![tech](https://img.shields.io/badge/Tailwind_CSS-v4-06b6d4?logo=tailwindcss&logoColor=white)
![license](https://img.shields.io/badge/license-MIT-black)

---

## Preview
|---|---|---|
|<img width="1917" height="953" alt="image" src="https://github.com/user-attachments/assets/9f4482cc-5f99-4f9e-a338-1843dfa7e2da" />
|<img width="1917" height="952" alt="image" src="https://github.com/user-attachments/assets/87380dd1-ba2e-42ae-a18d-8bb868d29794" />

 | <img width="1917" height="1012" alt="image" src="https://github.com/user-attachments/assets/7bead457-e373-45c2-9003-5089781c58e4" />
|

---

## Features

- 🌐 **Multi-page routing** — Home, About, Projects, and Contact via `react-router-dom`
- 🕸️ **Skills particle network** — a canvas simulation where each skill node reveals itself and draws a connecting edge in sequence, then settles into an ambient drifting graph. Labels stay attached to every node, not just on hover.
- 🎇 **Ambient background network** — the same particle-network idea running as a subtle full-page backdrop, mounted once so it never restarts on route changes
- 📅 **Live GitHub contribution calendar** — pulled at runtime from a public, token-free API, no backend required
- 🖱️ **Custom cursor & magnetic buttons** — buttons and links pull gently toward the cursor
- 🎬 **Scroll-reveal animations** — sections fade and rise into view via `IntersectionObserver`
- 📊 **Scroll progress bar**, animated typewriter hero, timeline-style experience/education, testimonials, and an ATS-friendly resume summary
- 📱 **Fully responsive** — desktop, tablet, and mobile
- 🗂️ **Content in one place** — every word of copy lives in `src/data/portfolio.ts`, typed and separate from the UI

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router v6 |
| Animation | Native Canvas API + CSS transitions (no animation library dependency) |
| Data | `github-contributions-api.jogruber.de` (public, no auth) |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL Vite prints in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Layout (route shell)
│   └── ui/             # CustomCursor, MagneticButton, RevealOnScroll,
│                        # SkillsNetwork, ParticleBackground, ScrollProgress
├── pages/               # Home, About, Projects, Contact — one per route
├── data/
│   └── portfolio.ts     # All content: profile, skills, experience,
│                         # projects, achievements, testimonials
├── hooks/                # useTypewriter, useInView, useScrollProgress,
│                          # useGitHubContributions
├── types/                # Shared TypeScript interfaces
├── App.tsx               # Route definitions
├── main.tsx               # Entry point
├── index.css               # Design tokens (colors, fonts) + Tailwind import
└── App.css                  # Cursor, eyebrow label, keyframes
```

---

## Customization

Almost everything you'd want to change lives in **`src/data/portfolio.ts`**:

```ts
export const profile = {
  name: "Shruthi Sagar",
  email: "you@example.com",
  linkedin: "https://linkedin.com/in/yourhandle",
  github: "https://github.com/yourhandle",
  githubUsername: "yourhandle",   // powers the live contribution calendar
  resumeUrl: "/resume.pdf",        // point at your hosted resume
};
```

Also update:
- `skillCategories`, `experience`, `projects`, `achievements`, `testimonials`, `education` in the same file
- `projects[].githubUrl` / `demoUrl` with real repo/demo links
- The photo placeholder in `pages/Home.tsx` (hero card) — swap the initials block for `<img src="/your-photo.jpg" alt={profile.name} className="w-full h-full object-cover" />`

---

## Deployment

This is a static Vite build, so it deploys anywhere that serves static files:

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm run build
# drag-and-drop the generated dist/ folder into Netlify,
# or connect the repo with build command `npm run build` and publish dir `dist`
```

**GitHub Pages**
```bash
npm run build
# push the contents of dist/ to a gh-pages branch,
# or use the `gh-pages` npm package to automate it
```

---

## License

MIT — feel free to fork this for your own portfolio.

---

## Contact

**Shruthi Sagar**
📍 Bengaluru, Karnataka, India
✉️ shruthisagarbaby@gmail.com
🔗 [LinkedIn](https://linkedin.com/in/shruthi-sagar) · [GitHub](https://github.com/shruthi-sagar)
