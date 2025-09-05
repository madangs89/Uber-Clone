# Uber Clone

## A full-stack Uber Clone application with a React (Vite) frontend and a Node.js/Express backend using MongoDB.

## API Endpoints

### User Routes (`/api/users`)

- `POST /register` — Register a new user
- `POST /login` — Login user
- `POST /logout` — Logout user (blacklists token)
- `GET /profile` — Get user profile (requires authentication)
---
### Captain Routes (`/api/captains`)
- `POST /register` — Register a new captain  
  **Body:** `{ fullName, email, password, vehicle }`
- `POST /login` — Login captain  
  **Body:** `{ email, password }`
- `POST /logout` — Logout captain (blacklists token)
- `GET /profile` — Get captain profile (requires authentication)
