# Medhal Tourism Guide

Medhal is a bilingual Arabic/English tourism guide for Saudi Arabia. It supports tourist and archaeological places, hotels, restaurants, entertainment places, public services, maps, directions, search, and responsive design.

## Main Features

- Arabic and English interface
- RTL/LTR support through language switching
- Tourist city guide
- Attractions and archaeological sites
- Hotels and restaurants
- Entertainment places
- Public services such as hospitals, fuel stations, malls, and restrooms
- Interactive map embeds and Google Maps direction links
- User signup and login
- Supabase database and authentication support
- Local fallback data when Supabase is not configured
- Contact form connected to Supabase

## Technology Stack

- React.js
- Styled Components
- i18next / react-i18next
- React Router
- Supabase Auth
- Supabase PostgreSQL Database
- Supabase Storage for images
- Google Maps direction links and OpenStreetMap embeds

## Supabase Setup

Read `SUPABASE_SETUP.md` and run `supabase/schema.sql` in Supabase SQL Editor.

Create a `.env` file from `.env.example`:

```env
REACT_APP_SUPABASE_URL=https://your-project-ref.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

## Run Locally

```bash
npm install
npm start
```

## Database Tables

- `profiles`
- `cities`
- `places`
- `favorites`
- `contact_messages`

## Notes

The system works in two modes:

1. **Supabase mode:** when `.env` values are added and the tables are created.
2. **Local fallback mode:** when Supabase is not configured, so the project remains runnable for academic demonstration.
