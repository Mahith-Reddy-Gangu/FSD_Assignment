# Assignment 3 Video Recording Guide

Record one focused 2-3 minute demonstration with the browser and both terminals visible. The recording must prove the four required behaviors below.

## Before Recording

Open two terminals:

- Terminal 1: `portfolio/server`, run `npm start`. Show `Portfolio API listening on http://localhost:5000`.
- Terminal 2: `portfolio`, run `npm run dev`. Show the Vite URL, normally `http://localhost:5173`.

Open `http://localhost:5173` in one browser window. Do not show passwords, tokens, real personal email addresses, or unrelated private files.

## Record Exactly This Sequence

1. **Projects from the live backend**

   Open `http://localhost:5173/projects` and refresh. Show the loading state if it appears, then show the project cards. Briefly open `http://localhost:5000/api/projects` to show the JSON array, then return to the portfolio.

2. **Project detail deep link**

   Open `http://localhost:5173/projects/geospatial-ai`. Refresh that exact URL and show the project title, description, and technologies after it loads.

3. **Successful contact submission**

   Open `http://localhost:5173/contact` and enter:

   - Name: `Demo Student`
   - Email: `demo@example.com`
   - Message: `This is my Assignment 3 backend test.`

   Click **Send Message**. Show the success message and cleared fields. Then open `http://localhost:5000/api/contact` and show the saved submission.

4. **Frontend error and recovery**

   Return to `http://localhost:5173/projects`. Stop only Terminal 1 with `Ctrl+C`, refresh the Projects page, and show the visible backend error message. Restart Terminal 1 with `npm start`, refresh the page, and show that the project cards load again.

## What To Say

- “The Projects page loads project data from the live Express backend.”
- “This project detail page works as a direct deep link after refresh.”
- “The Contact form sends data to the backend, which validates and persists it.”
- “When the backend is stopped, the frontend shows a visible error and recovers after restart.”

Do not spend time explaining code. The visible browser behavior, API response, and running terminals are the evidence.

## Submission Checklist

- [ ] The recording is 2-3 minutes long.
- [ ] Browser, backend terminal, and frontend terminal are visible.
- [ ] Projects load from the live backend.
- [ ] A project detail deep link is refreshed successfully.
- [ ] Contact submission shows success and cleared fields.
- [ ] `GET /api/contact` shows the saved submission.
- [ ] Stopping the backend shows a visible frontend error.
- [ ] Restarting the backend restores the project cards.
- [ ] The repository contains `portfolio/server`, `server/.env.example`, the updated README, and the Postman collection.
- [ ] The recording file or an accessible video link is included with the submission.
