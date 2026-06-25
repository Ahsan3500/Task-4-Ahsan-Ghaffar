# Getaway Travels

A business website for a local trip organizer, built as Project 1 for the DecodeLabs Full Stack Development internship.

## About

Getaway Travels is a practice project — a website for a fictional local tour company. The goal was to go through a full design + build process: research, wireframing, styling, and finally coding it in React.

## Tech Stack

- React (Vite)
- Inline CSS / JS styling
- JavaScript (ES6+)

## Features

- Fully responsive (mobile, tablet, desktop)
- Hamburger menu on mobile
- Smooth scroll navigation between sections
- Contact form with basic validation
- Package listing cards
- Image gallery
- Hover effects on buttons/cards

## Process

I followed the workflow taught in the course:

1. Discovery — figured out who the user is and what they need, using an Empathy Map
2. Wireframing — planned the layout in grayscale before adding any styling
3. Semantic HTML — used proper tags (header, nav, main, section, footer) instead of just divs
4. Styling — picked a color palette and fonts, then applied them with CSS Grid/Flexbox
5. Logic — added form validation, smooth scroll, mobile menu state
6. Audit — ran Lighthouse to check performance and accessibility

## Color Palette

- Mocha Mousse — #A5856F
- Ethereal Blue — #A0D4E0
- Moonlit Grey — #F2F0EA

## Running Locally

\`\`\`bash
git clone <repo-url>
cd Project-Decode
npm install
npm run dev
\`\`\`

Runs on http://localhost:5173

## Lighthouse Scores

- Performance: 61
- Accessibility: 86
- Best Practices: 100
- SEO: 83

(Performance is lower than ideal mainly because of unoptimized images and running on localhost — would improve after deployment.)

## Project Structure

\`\`\`
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Packages.jsx
│   ├── About.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
└── index.css
\`\`\`
