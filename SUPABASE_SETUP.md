# Supabase Setup for Medhal Tourism Guide

This version is configured to work with Supabase as the backend database and authentication provider.

## 1. Create Supabase Project
Create a new project in Supabase, then open **Project Settings > API** and copy:

- Project URL
- anon public key

## 2. Add Environment Variables
Create a `.env` file in the project root:

```env
REACT_APP_SUPABASE_URL=https://your-project-ref.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

Restart the React server after adding `.env`.

## 3. Create Database Tables
Open **Supabase Dashboard > SQL Editor**, then run:

```sql
-- paste everything from supabase/schema.sql
```

The schema creates these tables:

- `profiles`: user profile linked with Supabase Auth
- `cities`: bilingual tourism cities with coordinates
- `places`: attractions, hotels, restaurants, entertainment, and public services
- `favorites`: saved places for logged-in users
- `contact_messages`: messages from contact form

## 4. Authentication
The Login and Sign Up pages now use Supabase Auth when `.env` is configured. If `.env` is missing, the project automatically falls back to local demo mode so the website still runs.

## 5. Tourism Data
The destinations page loads cities and places from Supabase tables. If the database is empty or not configured, it uses the local sample data as fallback.

## 6. Images
For real deployment, upload images to **Supabase Storage**, make them public, then put their public URLs in:

- `cities.image_url`
- `places.image_url`

## 7. Run Project

```bash
npm install
npm start
```

Then open the website and test:

- Arabic / English language switching
- Sign up / Login using Supabase
- Tourist places loaded from Supabase
- Maps and directions
- Search and categories

## 8. Professional Interactive Maps
The destinations page now includes a professional interactive map using Leaflet and OpenStreetMap tiles. No extra npm package is required because the map assets are loaded dynamically from a CDN, and an OpenStreetMap iframe fallback is provided if the interactive script cannot load.

The map supports:

- City center marker.
- Markers for attractions, hotels, restaurants, entertainment places, and public services.
- Map category filters.
- User current-location marker after permission is granted.
- Approximate distance from the user to each place.
- Popup cards on the map with address, category, distance, and directions.
- Google Maps external direction links.

For best results, make sure every record in the `cities` and `places` tables has `latitude` and `longitude` values. If a place record does not have coordinates, the interface generates a temporary nearby marker around the city center for demo purposes.
