# Bibin C S — Portfolio

A personal portfolio website built with React, Tailwind CSS, and Framer Motion — featuring animated section reveals, a scroll-driven timeline, and a glassmorphism-styled contact card.

**Live site:** [add your deployed URL here]

## Features

- Smooth scroll navigation with a scroll-aware, blurred navbar
- Animated hero section with a staggered name reveal and floating profile image
- Technology grid with staggered entrance animation and floating icons
- Experience section with a scroll-linked timeline that draws itself as you scroll
- Project cards with hover glow and staggered reveal
- Contact card with a copy-to-clipboard email button
- "Back to top" button with a live scroll-progress ring
- Fully responsive, mobile menu included
- Dark theme with a purple/violet accent throughout

## Tech stack

- **React** — component structure
- **Tailwind CSS** — styling
- **Framer Motion** — animations and scroll-linked effects
- **react-icons** — icon set (Font Awesome, Simple Icons, Remix Icons, Material Design)

## Project structure

```
src/
├── assets/            # images, resume PDF
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Technologies.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── BackToTop.jsx
├── constants/          # HERO_CONTENT, ABOUT_TEXT, EXPERIENCES, PROJECTS, CONTACT
└── App.jsx
```

## Getting started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/bibinsivanandh25/<repo-name>.git
cd <repo-name>
npm install
```

### Run locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or whichever port your dev server prints).

### Build for production

```bash
npm run build
```

## Sections

| Section      | Description                              |
| ------------ | ---------------------------------------- |
| Hero         | Name, role, short intro, profile photo   |
| About        | Bio and downloadable resume              |
| Technologies | Grid of tools and languages used         |
| Experience   | Work history on a scroll-linked timeline |
| Projects     | Featured projects with source/live links |
| Contact      | Email and LinkedIn, with quick copy      |

## Customization

Update the following files to personalize the content:

- `src/constants/index.js` — text content (hero copy, about text, experience list, project list, contact info)
- `src/assets/` — replace profile photo, about photo, and resume PDF
- Tailwind's `purple`/`violet` classes throughout components — swap for another accent color if desired

## Deployment

This project can be deployed on any static hosting platform, such as:

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- GitHub Pages

## Connect

- [LinkedIn](https://www.linkedin.com/in/bibincs/)
- [GitHub](https://github.com/bibinsivanandh25)
- [Codewars](https://www.codewars.com/users/bibinsivanandh25)
- [HackerRank](https://www.hackerrank.com/profile/bibincs)
- [LeetCode](https://leetcode.com/u/bibincs97/)

## License

This project is open source. Feel free to fork it and use it as a base for your own portfolio — just swap in your own content and assets.
