# Empathy Technologies Instagram Clone

## Description
A full-stack Instagram-style application featuring user authentication, media feeds, profiles, and post interactions. Built with a modern developer stack using Next.js, Tailwind CSS, Express.js, and Bun.

## Stack
- **Frontend:** Next.js + Tailwind CSS (`/www`)
- **Backend:** Express.js + TypeScript, powered by Bun (`/server`)

## Requirements
- **Bun** – [Install here](https://bun.sh/)
- **Node.js** – Required for specific dependencies
- **.env files** – Required for both frontend and backend (refer to respective READMEs)

## Development Setup

### 1. Clone the Repository
```bash
git clone <https://github.com/ani71ket/InstaClone/>
cd InstaClone
```

### 2. Start the Backend
```bash
cd server
bun install
bun run build
bun run start
```

### 3. Start the Frontend
```bash
cd ../www
bun install
bun run dev
```

### 4. Setup Redirect URIs (For OAuth)
Since Instagram requires HTTPS for redirect URIs:

- **Option 1 – VS Code Port Forwarding**: [Guide](https://code.visualstudio.com/docs/remote/ssh#_forwarding-a-port)
- **Option 2 – Ngrok**:
```bash
ngrok http <your-local-port>
```

Use the generated HTTPS URL as your OAuth redirect URI (e.g., `https://abc123.ngrok.io/auth/callback`).

## Docker Setup

### Step 1: Add Environment Files
Create `.env` files inside `/server` and `/www`. Refer to their README files for content structure.

### Step 2: Launch with Docker Compose
```bash
docker compose up --build
```

This builds both frontend and backend containers, and starts the application.

### Step 3: Finalize OAuth Redirect URI
Use your forwarded URL and append `/auth/callback`. Add this to Facebook Developer OAuth settings.

---

With this setup, you can fully simulate Instagram-like login and content workflows on your local machine using a public HTTPS tunnel.

---

## Project Highlights
- Auth flow compatible with social OAuth
- Type-safe and modular backend with Bun + TypeScript
- Modern, responsive UI using Tailwind
- Dockerized for seamless local testing

