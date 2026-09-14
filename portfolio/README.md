# Portfolio Website: Assignment 3

This repository contains the Assignment 2 React portfolio extended with a Node.js/Express backend. Project data is served by the API, and the contact form submits to and persists data through the API.

## Prerequisites

- Node.js 18 or newer

## Install and Run

Install the frontend and backend dependencies:

```powershell
cd portfolio
npm install
cd server
npm install
Copy-Item .env.example .env
```

Start the backend from `portfolio/server`:

```powershell
npm start
```

In a second terminal, start the frontend from `portfolio`:

```powershell
npm run dev
```

Open `http://localhost:5173`. The API runs at `http://localhost:5000` by default.

## Environment Variables

Copy `server/.env.example` to `server/.env`:

```env
PORT=5000
ALLOWED_ORIGIN=http://localhost:5173
CONTACTS_FILE=./data/contacts.json
```

The real `.env` file and contact storage file are ignored by Git. No secrets are required.

## API Endpoints

All endpoints return JSON. Replace `http://localhost:5000` with the configured server URL when necessary.

### Health and Projects

`GET /` returns HTTP 200:

```json
{"status":"ok","service":"portfolio-api"}
```

`GET /api/projects` returns at least three server-side project objects. Each object contains `id`, `title`, `description`, `techStack`, `image`, and `link`.

`GET /api/projects/geospatial-ai` returns one project. A missing project returns HTTP 404:

```json
{"error":"Project not found"}
```

### Contacts

`POST /api/contact` accepts:

```json
{"name":"Demo Student","email":"demo@example.com","message":"Testing the API"}
```

A valid request returns HTTP 201 and stores the submission in `CONTACTS_FILE`. Missing fields or an invalid email return HTTP 400 with a field-specific `error` message.

`GET /api/contact` returns all stored submissions. This endpoint is intentionally open without authentication so the assignment evaluator can verify persistence; it is not suitable for production personal-data storage.

### Errors and CORS

- An undefined route returns HTTP 404 JSON: `{"error":"Route not found"}`.
- Malformed JSON returns HTTP 400 JSON: `{"error":"Request body contains invalid JSON."}`.
- Unexpected errors are handled by centralized middleware and return HTTP 500 JSON.
- CORS allows the origin configured by `ALLOWED_ORIGIN`.

## Frontend Integration

`Projects.jsx` and `ProjectDetail.jsx` use `useEffect` and plain `fetch` to load the project list and deep-linked project. They display loading and error states. `Contact.jsx` posts to the backend, displays server responses, and resets after a successful submission. Assignment 2 routing, theme persistence, responsive layout, and the not-found page remain available.

Project data is stored in `server/data/projects.js`. Contact submissions use a JSON file through Node filesystem APIs; if the file does not exist in a fresh clone, the server starts with an empty list and creates it on the first valid submission.

## API Testing Artifact

Import [postman/Portfolio-Assignment3.postman_collection.json](postman/Portfolio-Assignment3.postman_collection.json) into Postman. It covers:

- `GET /` health check
- `GET /api/projects`
- valid and missing `GET /api/projects/:id`
- valid and invalid `POST /api/contact`
- `GET /api/contact`
- unknown-route 404
- malformed-JSON 400
- CORS preflight

## Validation

From `portfolio`, run:

```powershell
npm run build
npm run lint
```

With the backend running, use the [recording guide](../Assignment3_Video_Recording_Guide.md) to demonstrate project loading, a refreshed project deep link, successful contact submission and persistence, and the frontend error state after stopping the backend.

## Academic Integrity Disclosure

This implementation was completed with coding-assistant support. The student should review, understand, and be prepared to explain every file and behavior before submission, in accordance with the assignment brief.
