# Getaway Travels — Project 4
Frontend & Backend Integration.

## About
This project connects the React frontend to the Express + MongoDB backend built in Projects 2 and 3. The two isolated systems are now a single full-stack application — the frontend sends HTTP requests to the backend, receives JSON responses, and dynamically updates the UI in real time.

## Tech Stack

### Frontend
- React.js (Vite)
- JavaScript fetch() API
- async/await

### Backend
- Node.js + Express
- MongoDB Atlas
- Mongoose
- dotenv
- CORS

## Repository Structure
Task-4-Ahsan-Ghaffar/

├── Project-Decode/          ← React frontend

│   └── src/

│       └── components/

│           ├── Packages.jsx     ← fetches from API

│           └── Contact.jsx      ← posts to API, dynamic dropdown

└── Project-Decode-API/      ← Express backend

├── models/

├── routes/

├── index.js

└── seed.js

## What's Integrated

### Packages Section
- On page load fetches all tour packages from GET /api/packages using async/await
- Displays them dynamically as cards
- Shows "Loading packages..." while request is in flight
- Shows error message if backend is unreachable
- response.ok checked before parsing JSON

### Contact / Booking Form
- Package dropdown populated dynamically from MongoDB — not hardcoded
- On submit sends POST /api/contacts to the backend
- Button shows "Sending..." and disables during request
- Shows success message on 201 response
- Shows error message if request fails
- Form auto-resets after 3 seconds
- finally block always clears loading state

## Data Flow (IPO Model)
- Input: User fills form or page loads
- Process: fetch() sends HTTP request → backend queries MongoDB → returns JSON
- Output: React state updates → UI re-renders with live data

## Error Handling
- response.ok checked before parsing JSON
- try/catch wraps all fetch calls
- finally block always clears loading state
- User always sees actionable feedback — no blank screens, no silent failures

## Running Locally

Start backend first:
```bash
cd Project-Decode-API
npm install
npm run dev
```

Then start frontend:
```bash
cd Project-Decode
npm install
npm run dev
```

Frontend: http://localhost:5173
Backend: http://localhost:3001

## Notes
CORS is handled on the backend via the cors middleware — this allows the frontend on port 5173 to communicate with the backend on port 3001 without browser security blocks.
