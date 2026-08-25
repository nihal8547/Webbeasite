# Webbea Site

This is the official profile website for Webbea Software Design, built with Vue 3 + TypeScript + Vite.

## Features
- **Premium Design**: Dark mode aesthetic with glassmorphism and animations.
- **Pages**: Home, About, Work (Portfolio), Contact.
- **Services Showcase**: Detailed list of services including Digital Marketing, Custom Development, etc.
- **Packages**: Pricing plans display.
- **Backend API**: Integrated Express server for handling contact form submissions.

## Project Structure
- `src/`: Frontend Vue application.
- `server/`: Backend Express server.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Servers
To run both the frontend and backend:

**Terminal 1 (Backend):**
```bash
npm run server
```

**Terminal 2 (Frontend):**
```bash
npm run dev
```

Open your browser at the URL shown in the frontend terminal (usually `http://localhost:5173` or similar).

## Backend API
The backend runs on port `3001` and serves:
- `GET /api/services`: List of services.
- `POST /api/contact`: Handle contact form submissions.

## Technologies
- Vue 3
- TypeScript
- Vite
- Lucide Vue Next (Icons)
- Express (Backend)
# Webbeasite
