<img src="https://raw.githubusercontent.com/business-thiem/NextJS13-scott-tut/main/assets/NextJS13-todo-ss1.png" width="1200" height="500">

# Overview

Place for my code when learning NextJS. And future referencing of barebones NextJS sample code

## App Info

- A very bare bones note taking app

## Tech used

- NextJS : server-sided logic for server-sided rendering (SSR), great for SEO, makes loading pages faster for client. Must opt into 'use client' react scripts
- Tailwind : CSS library
- Prisma : ORM, create tables in a human-readable way
- SQLite : a file, not a real DB
- NodeJS : JS package manager

Link to course notes and future references: https://scottmoss.notion.site/scottmoss/Intro-to-Next-js-V3-6cefbdba58d94e3897dcb8d7e7fc0337

Prisma Studio Notes:

- `npx prisma studio` to load the DB with GUI
- `npx prisma generate && npm run build` in vercel build deployments (override)
- - does not actually work on live server with SQLite, you need to get a real database, but it works locally

### .env (always ignored on commits)

- Use `DATABASE_URL="file:./dev.db"`
