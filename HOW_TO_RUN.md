# How to Run Medhal

## Quick Start

Install the packages first:

```bash
npm install --legacy-peer-deps
```

Then start the app:

```bash
npm start
```

Open: **http://localhost:3000**

## Windows shortcut

You can also double-click `start-dev.bat` or run:

```bash
start-dev.bat
```

This starts the development server on port 3000.

## Production build

```bash
npm run build
```

The fixed version was verified with this command and compiled successfully.

## Environment Variables

The project uses `.env` for Supabase configuration:

- `REACT_APP_SUPABASE_URL` - Your Supabase project URL
- `REACT_APP_SUPABASE_ANON_KEY` - Your Supabase anon/public key

## Map behavior

The app now uses embedded Google Maps inside the website. No Google Maps API key is required for the current implementation. Each selected city/place can be opened in Google Maps, and directions can use the visitor's current location when the browser grants location permission.

## If Port 3000 is Already in Use

```bash
# Find the process
netstat -ano | findstr :3000

# Kill it (replace PID with the actual process ID)
taskkill /F /PID <PID>
```
