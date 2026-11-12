# Balaji Financial & Insurance Services — Next.js migration

This App Router implementation is isolated in next-app/ so the current GitHub Pages website remains live during review.

## Local development
1. cd next-app
2. npm install
3. npm run dev
4. Open http://localhost:3000

## Routes
- / — Home
- /solutions — Insurance solutions
- /about — About
- /guidance — Guidance
- /contact — Contact and WhatsApp enquiry

## Current status
- React + Next.js App Router frontend
- Separate routes and responsive navigation
- English, Telugu and Hindi UI language preference
- WhatsApp enquiry handoff to existing business number
- Existing static site is not replaced

## Required before production
1. Configure Vercel Root Directory as next-app.
2. Configure Supabase and server-only environment variables.
3. Implement authenticated admin access and server-side enquiry storage with Row Level Security.
4. Add spam protection, validation, retention policy and privacy notice.
5. Replace third-party-hosted insurer marks with approved local assets subject to applicable brand rules.
6. Review full content parity in all three languages before switching the public domain.

The current form opens a prefilled WhatsApp message. It does not store enquiries in a database.