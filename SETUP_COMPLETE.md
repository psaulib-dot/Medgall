# Supabase Setup Complete - Next Steps

## ✅ Done
- .env file configured with your Supabase credentials
- Project URL: https://tbzovlwniopojywvfffb.supabase.co

## 🔧 Required: Create Database Tables

1. Go to your Supabase Dashboard: https://supabase.com/dashboard/project/tbzovlwniopojywvfffb
2. Click **SQL Editor** in the left sidebar
3. Click **New Query**
4. Open the file `supabase/schema.sql` from this project
5. Copy ALL the SQL code from that file
6. Paste it into the Supabase SQL Editor
7. Click **Run** button

This will create:
- profiles table (user accounts)
- cities table (tourism cities)
- places table (attractions, hotels, restaurants, etc.)
- favorites table (saved places)
- contact_messages table (contact form submissions)
- Sample data for Riyadh and AlUla

## 🚀 Run the App

After running the SQL schema:

```bash
npm start
```

The app will open at http://localhost:3000

## 🧪 Test Features

- Switch between Arabic/English
- Sign up / Login (creates real accounts in Supabase)
- Browse cities and places (loaded from Supabase database)
- Add favorites (saved to Supabase)
- Submit contact form (saved to Supabase)
- View interactive maps

## 📝 Note

If you skip the SQL schema step, the app will still run but use local fallback data instead of Supabase.
