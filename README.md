# Next Level Recruiting — Marketing Website

**"Your Game. Your Future. Next Level."**

Production-ready marketing website for Next Level Recruiting (NLR), Southern California's premier athlete recruiting agency. Built with React, Vite, TypeScript, Tailwind CSS, and React Router.

---

## Live Site

**Vercel:** https://next-level-recruiting-theta.vercel.app
**GitHub:** https://github.com/vahagnmard2-art/next-level-recruiting

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, how it works, services preview, testimonials, CTA |
| Services | `/services` | Full pricing menu with package cards |
| Sports | `/sports` | All 10 sports with position-specific blurbs |
| About | `/about` | Founder story, mission, NLR by the numbers |
| Contact / Book | `/contact` | Intake form, direct contact, map placeholder |

---

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** (build tool)
- **React Router 6** (client-side routing)
- **Tailwind CSS 3** (styling)
- **Lucide React** (icons)
- **Google Fonts** — Bebas Neue, Barlow Condensed, Inter

---

## Run Locally

```bash
# Clone
git clone https://github.com/vahagnmard2-art/next-level-recruiting.git
cd next-level-recruiting

# Install
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile hamburger
│   ├── Footer.tsx          # Full footer with links
│   ├── AnimatedSection.tsx # Scroll-triggered fade/slide wrapper
│   └── ScrollToTop.tsx     # Route-change scroll reset
├── hooks/
│   └── useScrollAnimation.ts
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Sports.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── App.tsx                 # Router setup
├── main.tsx
└── index.css               # Tailwind + custom utility classes
```

---

## Deploy to Vercel

The project is already connected to Vercel via GitHub. Any push to `main` auto-deploys.

**Manual deploy:**
```bash
npm install -g vercel
vercel --prod
```

**Deploy to Netlify:**
```bash
npm run build
# Drag and drop the `dist/` folder to netlify.com/drop
# Or: netlify deploy --prod --dir=dist
```

---

## Customization Checklist

- [ ] Replace placeholder phone `(310) 555-0100` with real number
- [ ] Replace `info@nextlevelrecruiting.com` with real email
- [ ] Add founder photo to About page (replace placeholder in `About.tsx`)
- [ ] Add hero background video (replace gradient placeholder in `Home.tsx`)
- [ ] Connect contact form to Formspree or email service
- [ ] Add real testimonials with athlete names
- [ ] Set up custom domain in Vercel dashboard

---

## Brand Colors

| Token | Hex | Use |
|-------|-----|-----|
| `nlr-dark` | `#0D1F2D` | Primary background |
| `nlr-darker` | `#070F16` | Deeper sections |
| `nlr-green` | `#1A7A3C` | Brand green, CTAs |
| `nlr-gold` | `#C9A84C` | Accents, buttons, highlights |

---

Built by Next Level Recruiting × Claude Code
