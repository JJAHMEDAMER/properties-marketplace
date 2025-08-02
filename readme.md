## How to run the project:

Clone the repository && docker compose up --build
Wait for the web-app to run after postgres and server ar up

links:
WebApp: http://localhost:3000
Server: http://localhost:5000
postgres: http://localhost:5432

## Here is a summary of the features

### Backend (Express + PostgreSQL + Prisma)

Apartments list endpoint with **filtering**, **searching**, and **pagination**

Apartment details endpoint

Apartment creation endpoint with **image upload**

Apartment update endpoint

Apartment deletion endpoint

Full Swagger API documentation http://localhost:5000/docs

Prisma ORM with migrations

### Database

PostgreSQL database with a single table managed via Prisma

### Frontend (Next.js + React + Tailwind)

Landing page with SEO metadata and OG tags

Apartments list page with **filters**, **URL State Persistence** and **Search with debouncing**

Apartment details page with **Google Maps iframe**, **Swiper** and **Dynamic Metadata**

Add apartment page using react-hook-form, image upload field, validation,

Edit apartment page reusing the same form with prefilled data

### Dockerized Setup

Uses Docker Compose with 3 services:

postgres (database)

server (Node.js + Express backend)

web-app (Next.js frontend)
