# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: technical recruiters and hiring managers at product companies and startups who are filling a full-stack role with an AI focus. They arrive from a job application, LinkedIn or a CV link, usually scanning several candidates in a row, often on a phone first. Their job is to decide within a minute whether Alexis is worth an interview: what he does, where he has worked, what he has shipped, and how to reach him.

Secondary (not the target, but served): engineers on the hiring team who open project links and repositories to check the work itself.

## Product Purpose

Personal portfolio of Alexis Jares (Alexis Isaias Jares), AI engineer and full-stack developer in Buenos Aires. It exists to turn a recruiter's first look into an interview request. Success: the visitor understands his role and experience on the first screen, finds proof (jobs, shipped projects, live links) without hunting, and contacts him by email or LinkedIn.

## Positioning

Four things together, which a similar-stack candidate could not truthfully copy:

- **Real products in production:** a donations platform with Stripe and DLocal payments (HEL-ALI), an offline-first React Native stock app with QR/barcode scanning (Bullstock · Oxitesa), a hospital staff and appointment system (Hospital Posadas), billing features for health-insurer workflows.
- **End to end:** web (React, Next.js, Angular, Astro), mobile (React Native, Expo) and backend (Node, Express, Nest, PostgreSQL, MySQL, Supabase).
- **Applied AI:** built an embedded AI chatbot at UTN's e-learning centre; works with Claude Code; focus on automation and intelligent interfaces.
- **Architecture and teamwork:** reusable components and clean architecture (development 50% faster at UTN), legacy code across four simultaneous projects under Scrum at Anfibia, coached the team on Git workflows.

## Operating Context

- Visitors compare candidates quickly; the page competes with CVs and LinkedIn profiles, so facts must be scannable and verifiable through links.
- Bilingual: English and Spanish (toggle in the nav), with the visitor's choice remembered.
- Light and dark themes.
- The CV (`~/Documents/CV-ACTUALIZADO-17-MAY/Alexis-Jares-CV-es.pdf`, Spanish) is the source of truth for experience, dates, roles and skills; site content must stay in sync with it.

## Capabilities and Constraints

- Single-page Next.js 14 App Router site in plain JavaScript and Tailwind CSS; content lives as data in `app/data/` (`experience.js`, `projects.js`, `stack.js`, `profile.js`) and copy in `app/i18n/translations.js`.
- Project and job links are buttons with `active: true/false`; a disabled link states why (private repo, in progress, no-code).
- No backend and no database: contact opens the visitor's email app with the message filled in.
- Client names from the Anfibia work (Hospital Posadas, Oxitesa, Sedit & Proyectar) may be shown publicly.
- Open: a downloadable CV. It may only ship as a version **without** the references section; waiting on that PDF from Alexis.
- Not shown publicly: phone number, and the names and phone numbers of references.

## Brand Commitments

- Name: Alexis Jares.
- The AJ logo (black strokes; a hidden "i" in the A, reading "AI J"; three brand bars: blue `#257DCF`, green `#02853F`, red `#86171B`) is a binding identity asset. The logo is drawn as SVG in `app/components/ui/logo.js`; the original PNG is `public/images/logo-aj.png`.
- Role title as Alexis uses it: "AI engineer & full-stack developer" (EN) / "IA engineer & desarrollador full-stack" (ES).
- Personal motto he keeps on the site: "To sacrifice everything to do what you love, that is the purpose of life."

## Evidence on Hand

- Work history (from the CV): HEL-ALI (freelance, May 2025 – present), Anfibia (Dec 2025 – May 2026), UTN centro de e-learning / Tuten Globals (Apr 2024 – Apr 2025).
- Live references: https://hel-ali.com/, https://utnba.centrodeelearning.com/, https://next-level-food-eight.vercel.app/, https://sites.google.com/view/4pilaresvoley/home.
- Repositories: https://github.com/AlexisJares/nextLevelFood, https://github.com/rosana-colman/rosana-couching-page; profile https://github.com/KZ211 (two GitHub accounts in use).
- Education: Computer Engineering at UNTREF (March 2023 – present); certifications in logical thinking, software engineering, databases, software architecture, Next.js and React, frontend development, Git and GitHub, development with Claude Code; intermediate English; graphic design.
- Images in `public/images/`: whiteboard photo (1156×521, low resolution), portrait (588×576), project screenshots (HEL-ALI, Rosana Colman, NextLevel Food, 4 Pilares Voley).
- Absent, must not be fabricated: testimonials, client quotes, metrics beyond the CV's "50% faster development", company logos, screenshots or demos of the private Anfibia apps and the UTN chatbot, video of the work.

## Product Principles

1. **Proof over claims.** Every skill shown should trace back to a job or project that used it, with a link wherever one exists.
2. **The first minute decides.** Role, experience and a way to contact must be clear without scrolling far, on a phone as much as on a desktop.
3. **The CV is the source of truth.** Dates, roles and achievements match the CV; nothing is inflated or invented.
4. **Respect other people's data.** References' contact details and private client material stay off the site.
5. **Easy to keep current.** Adding a job or project means editing one data file, not markup.
