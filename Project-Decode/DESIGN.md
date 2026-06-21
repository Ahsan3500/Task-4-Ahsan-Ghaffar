# Design Process — Getaway Travels

This document covers the planning that went into the site before any code was written, following Pillar 1 (Strategy & Blueprint) from the course material.

## 1. Discovery

**Business:** Getaway Travels — a local tour organizer (real person, practice project)
**Type:** Local tours

**How Might We statement:**
How might we help locals discover and book exciting nearby trips through a website that feels trustworthy, easy to navigate, and inspiring?

## 2. Empathy Map

Target user: someone browsing the site to book a local tour.

| Quadrant | Notes |
|---|---|
| Says | "I want a fun local trip without the hassle of planning" |
| Thinks | "Is this business trustworthy? Are the prices fair?" |
| Does | Browses packages, checks photos, looks for contact info |
| Feels | Excited but cautious — wants reassurance before booking |

This shaped a few decisions:
- Added an About section with stats (years of experience, travellers served) to build trust
- Kept pricing visible on package cards instead of hiding it behind a "contact us"
- Added a gallery so visitors can see what the destinations actually look like before booking

## 3. Pages Planned

- Home (hero + intro)
- Packages
- About
- Gallery
- Contact

## 4. Wireframe Notes

Wireframing was done conceptually (layout + hierarchy) rather than as a separate drawn file:

- Navbar fixed at top, links to each section
- Hero: heading, short subtext, one CTA button
- Packages: card grid, 3 columns desktop / 1 column mobile
- About: text on one side, stat boxes on the other (stacks on mobile)
- Gallery: image grid, 3 columns desktop / 1 column mobile
- Contact: single form, fields stacked vertically
- Footer: 3 columns (brand, links, contact info)

Followed the course's "golden rule" — layout was planned in plain structure first, color and styling came after.

## 5. Style Decisions

**Colors:**
- Mocha Mousse `#A5856F` — used for buttons, accents, headings (stability)
- Ethereal Blue `#A0D4E0` — used for hero/about/contact backgrounds (trust)
- Moonlit Grey `#F2F0EA` — used for packages/gallery backgrounds (refinement)

**Typography:**
- Headings: system sans-serif (Segoe UI) — bold, geometric feel
- Body: same family, regular weight, for readability

## 6. What I'd Improve Next

- Replace placeholder gallery images with real destination photos
- Improve Lighthouse performance score (currently 61) by optimizing images and lazy loading more aggressively
- Add real backend integration so the contact form actually saves submissions (built separately in Project 2)
