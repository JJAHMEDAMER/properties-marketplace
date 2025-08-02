## How to run the project:

Clone the repository && docker compose up --build

## Here is a summary of the features

### Backend (Express + PostgreSQL + Prisma)

Apartments list endpoint with filtering, searching, and pagination

Apartment details endpoint

Apartment creation endpoint with image upload

Apartment update endpoint

Apartment deletion endpoint

Full Swagger API documentation

### Database

PostgreSQL database with a single table managed via Prisma

### Frontend (Next.js + React + Tailwind)

Landing page with SEO metadata and OG tags

Apartments list page with filters and dynamic metadata

Apartment details page with Google Maps iframe and Swiper image carousel

Add apartment page using react-hook-form, image upload field, validation, and localStorage persistence

Edit apartment page reusing the same form with prefilled data

### Dockerized Setup

Uses Docker Compose with 3 services:

postgres (database)

server (Node.js + Express backend)

web-app (Next.js frontend)
