# Overview

Place for my code when learning NextJS.

## App Info

- A very bare bones note taking app

## Tech used

- NextJS
- Tailwind
- Prisma
- SQLite : a file, not a real DB
- NodeJS

Link to course notes and future references: https://scottmoss.notion.site/scottmoss/Intro-to-Next-js-V3-6cefbdba58d94e3897dcb8d7e7fc0337

Prisma Studio Notes:

- `npx prisma studio` to load the DB with GUI
- `npx prisma generate && npm run build` in vercel build deployments (override)
- - does not actually work on live server with SQLite, you need to get a real database, but it works locally

### .env (always ignored on commits)

- Use `DATABASE_URL="file:./dev.db"`
