# Design Notes — Getaway Travels (Project 4)
Frontend & Backend Integration

## Goal
Bridge the gap between the isolated React frontend (Project 1) and the Express + MongoDB backend (Projects 2 & 3) into a single functioning full-stack application.

## The IPO Architecture

### Stage 1 — Input
User triggers an action:
- Page load → Packages component mounts → useEffect fires
- Form submit → user clicks Send Message → handleSubmit() fires

### Stage 2 — Process
fetch() sends an HTTP request to the backend.
await pauses the function without freezing the browser.
Backend routes the request, queries MongoDB, returns JSON.
response.ok is checked before calling response.json().
response.json() deserializes the raw response into a JavaScript object.

### Stage 3 — Output
React state updates via setPackages() or setSubmitted().
Component re-renders — UI reflects the live data from the database.

## Asynchronous Strategy

Used async/await throughout — not .then() chains.

Why:
- Cleaner linear code flow
- Easier error handling with try/catch
- Pairs naturally with finally
- Modern standard per Helsinki course Part 2 and DecodeLabs PDF

## fetch() Pattern

Every fetch call follows this structure:

```javascript
setLoading(true)
try {
  const response = await fetch(url, options)
  if (!response.ok) throw new Error(response.status)
  const data = await response.json()
  // update state
} catch (err) {
  // show error to user
} finally {
  setLoading(false)
}
```

## response.ok Pattern

Never assumed a non-network error throws automatically:
- 4xx responses don't throw — they return ok: false
- Calling .json() on an HTML error page crashes the app
- Manually checked response.ok before every .json() call
- Prevents the anti-pattern of assuming a 404 throws into catch

## CORS

Frontend (port 5173) and backend (port 3001) are different origins.
Browser same-origin policy blocks cross-origin requests by default.
Solved by cors middleware on the Express backend.
Sends Access-Control-Allow-Origin header with every response.

## JSON Serialization

Sending to backend:
- JSON.stringify(formData) — serializes JS object to raw text
- Content-Type: application/json — tells backend how to parse the body

Receiving from backend:
- await response.json() — deserializes raw text back into a JS object

## Dynamic Dropdown

Package options in the contact form are no longer hardcoded.
On mount, Contact.jsx fetches GET /api/packages and maps results to option elements.
Adding a new package to MongoDB automatically appears in the dropdown.
No frontend code change needed.

## Error Handling Rules

- No silent failures — every catch block sets a visible error message
- No blank screens — loading state shows feedback while request is in flight
- Graceful degradation — if packages fail to load, error message shown, app never crashes
- finally block — loading state always cleaned up regardless of outcome

## Status Codes Used

- 200 — successful GET (packages loaded)
- 201 — successful POST (booking saved)
- 400 — validation error (missing fields)
- 404 — resource not found
- 500 — server error

## Anti-Patterns Avoided

- Forgetting await — all fetch and .json() calls are properly awaited
- Not checking response.ok — checked before every .json() call
- Silent catch — every catch block shows a user-facing error message
- Hardcoded dropdown — package options fetched live from MongoDB

## What's Not Included Yet

- No authentication — not in scope for this project
- No optimistic UI updates — straightforward request/response pattern

## Next Steps

- Add JWT authentication 
- Deploy full stack (Render for backend, Vercel for frontend)
