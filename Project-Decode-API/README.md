# Getaway Travels API — Project 3
Backend REST API with MongoDB database integration, developed as Project 3 for the DecodeLabs Full Stack Development internship (Batch 2026).

## About
An upgraded Express backend that now connects to a real MongoDB database to persist tour package data and customer booking/contact submissions. This builds directly on Project 2 — replacing the in-memory arrays with a proper database layer using Mongoose as the ODM.

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS
- nodemon (dev only)

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Health check |
| GET | /api/packages | Get all tour packages from DB |
| GET | /api/packages/:id | Get a single package by ID |
| GET | /api/contacts | Get all contact submissions from DB |
| POST | /api/contacts | Submit and save a new booking/contact |

## Example — POST /api/contacts

```json
{
  "name": "Ali Ahmed",
  "email": "ali@gmail.com",
  "phone": "03001234567",
  "package": "Northern Areas Tour",
  "message": "I want to book for 2 people"
}
```

Response:
```json
{
  "message": "Booking received successfully!",
  "contact": {
    "name": "Ali Ahmed",
    "email": "ali@gmail.com",
    "phone": "03001234567",
    "package": "Northern Areas Tour",
    "message": "I want to book for 2 people",
    "createdAt": "2026-06-23T00:00:00.000Z",
    "id": "6a3988965a7ba661d79c527e"
  }
}
```

## Database Schema

### Package
| Field | Type | Required |
|-------|------|----------|
| title | String | ✅ |
| description | String | ✅ |
| duration | String | ✅ |
| price | Number | ✅ |

### Contact
| Field | Type | Required |
|-------|------|----------|
| name | String | ✅ |
| email | String | ✅ |
| phone | String | ✅ |
| package | String | ✅ |
| message | String | ✅ |
| createdAt | Date | auto |

## Validation
- All fields required (name, email, phone, package, message)
- Email validated against regex pattern
- Mongoose schema-level validation (not just application-level)
- Returns proper status codes (200, 201, 400, 404)
- toJSON transform applied — returns clean id instead of _id, removes __v

## Running Locally

```bash
cd Project-Decode-API
npm install
```

Create a .env file:
MONGODB_URI=your_mongodb_atlas_connection_string
PORT=3001

Seed the database with sample packages:
```bash
node seed.js
```

Start the server:
```bash
npm run dev
```

Runs on http://localhost:3001

## Project Structure
Project-Decode-API/

├── models/

│   ├── Package.js

│   └── Contact.js

├── routes/

│   ├── packages.js

│   └── contact.js

├── index.js

├── seed.js

└── package.json

## What Changed from Project 2
- Data is now stored in MongoDB Atlas — persists across server restarts
- Added models/ folder with Mongoose schemas for Package and Contact
- Added seed.js to populate initial package data into the database
- Added unknownEndpoint and errorHandler middleware (Helsinki course pattern)
- Frontend Packages.jsx now fetches packages live from the database
- Frontend Contact.jsx now saves submissions directly to MongoDB
- Environment variables handled via dotenv — MongoDB URI kept secret via .gitignore
