# Portfolio Website - Assignment 3 Backend Extension

This repository contains the React portfolio from Assignment 2 plus a Node.js/Express API for Assignment 3. Project data is served by the API, and the contact form submits to and persists data through the API.

## Install and Run

Prerequisite: Node.js 18 or newer.

From `portfolio`, install and start the backend:

```bash
npm install
cd server
npm install
copy .env.example .env
npm start
```

In a second terminal, from `portfolio`, start the frontend with `npm run dev`, then open `http://localhost:5173`. The backend runs at `http://localhost:5000`.

## Environment Configuration

Copy `server/.env.example` to `server/.env`:

```env
PORT=5000
ALLOWED_ORIGIN=http://localhost:5173
CONTACTS_FILE=./data/contacts.json
```

`.env` is ignored by Git. The committed `.env.example` contains every required variable and no secrets.

## API Endpoints

All API responses are JSON. CORS allows the React development-server origin configured by `ALLOWED_ORIGIN`.

- `GET /` returns HTTP 200 with `{ "status": "ok", "service": "portfolio-api" }`.
- `GET /api/projects` returns four server-side projects. Every object includes `id`, `title`, `description`, `techStack`, `image`, and `link`.
- `GET /api/projects/:id` returns one project. A missing id returns HTTP 404 with `{ "error": "Project not found" }`.
- `POST /api/contact` accepts `{ "name", "email", "message" }`, validates all fields and email format, returns HTTP 201, and persists valid submissions.
- `GET /api/contact` returns all persisted submissions. This endpoint is intentionally open without authentication for assignment verification and is not production-ready personal-data storage.
- Undefined routes return HTTP 404 JSON. Malformed JSON returns HTTP 400 JSON. Unexpected errors return HTTP 500 JSON through centralized middleware.

## Storage and Frontend Integration

Projects are stored in `server/data/projects.js`. Contacts are persisted in `server/data/contacts.json` with Node filesystem APIs; the contact file is Git-ignored.

`Projects.jsx` and `ProjectDetail.jsx` use `useEffect` and plain `fetch` with loading, error, and deep-link states. `Contact.jsx` posts to the API, displays server errors, and resets after success. Assignment 2 routing, theme persistence, responsive layout, and the not-found page remain available.

## API Testing Artifact

Import [portfolio/postman/Portfolio-Assignment3.postman_collection.json](portfolio/postman/Portfolio-Assignment3.postman_collection.json) into Postman. It covers health, projects, project 404, contact success and validation failure, contact listing, unknown route, malformed JSON, and CORS preflight.

## Validation

From `portfolio`, run `npm run build` and `npm run lint`. Use the Postman collection while the backend is running.

## Assignment 3 Recording

The required 2-3 minute demonstration is available here:

[Assignment 3 Backend Recording](Assignment3_Backend_Recording.mp4)

The video is stored with Git LFS because the recording is larger than GitHub's regular file-size limit. Follow [Assignment3_Video_Recording_Guide.md](Assignment3_Video_Recording_Guide.md) for the demonstrated requirements.

## Academic Integrity Disclosure

This implementation was completed with coding-assistant support. The student should review, understand, and be prepared to explain every file and behavior before submission, in accordance with the assignment brief.
