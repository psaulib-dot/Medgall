# Supabase Project Setup Guide

## ✅ Credentials Configured

Your Supabase project has been successfully linked to your application:

**Project Details:**
- **Project ID:** tbzovlwniopojywvfffb
- **Project URL:** https://tbzovlwniopojywvfffb.supabase.co
- **Anon Key:** `sb_publishable_enWWjp80dNXhge25iZ2vlg_ZcQRKy8Y`
- **Env Status:** ✅ Configured in `.env` and `.env.example`

---

## 📋 Next Steps: Create User Profiles

Your authentication users have been created:
- **Admin User:** medhaladmin@gmail.com
- **Regular User:** medhaluser@gmail.com

### Run the SQL Setup Script

1. **Login to Supabase Dashboard:**
   - Go to: https://tbzovlwniopojywvfffb.supabase.co
   - Sign in with your account

2. **Navigate to SQL Editor:**
   - Click on **SQL Editor** in the left sidebar
   - Click on **New Query**

3. **Copy and Paste the SQL Code Below:**

```sql
-- Create profiles for your authentication users
INSERT INTO public.profiles (id, username, email, role, created_at) 
VALUES 
  ((SELECT id FROM auth.users WHERE email = 'medhaladmin@gmail.com'), 'medhal_admin', 'medhaladmin@gmail.com', 'admin', now()),
  ((SELECT id FROM auth.users WHERE email = 'medhaluser@gmail.com'), 'medhal_user', 'medhaluser@gmail.com', 'visitor', now())
ON CONFLICT (email) DO NOTHING;

-- Verify the profiles were created
SELECT id, username, email, role, created_at FROM public.profiles ORDER BY created_at DESC;
```

4. **Click "Run"** (Ctrl+Enter)

5. **You should see output showing the 2 profiles created**

---

## 🧪 How to Test Your Setup

### Option 1: Test via Supabase Dashboard
1. Go to **Database** → **Tables**
2. Click on **profiles**
3. You should see 2 rows with your users' data

### Option 2: Test via Your App
1. Navigate to your project root:
   ```bash
   cd /workspaces/Medgall
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Try logging in with:
   - **Email:** medhaladmin@gmail.com
   - **Email:** medhaluser@gmail.com
   - (Use passwords you set during user creation in Supabase Auth)

---

## 📊 Database Tables

Your application uses these tables:

| Table | Purpose |
|-------|---------|
| `profiles` | User profiles with role (admin/visitor) |
| `cities` | Tourism destinations |
| `places` | Attractions, hotels, restaurants, etc. |
| `favorites` | User saved favorites |
| `contact_messages` | Contact form submissions |

---

## 🔐 Security Settings

Your Row Level Security (RLS) policies:
- ✅ Public can view cities and places
- ✅ Users can only see their own profiles
- ✅ Users can only modify their own profiles
- ✅ Admins can manage content (set up additional policies as needed)

---

## 🚀 Ready to Deploy

Your project is now ready to:
1. ✅ Connect to Supabase
2. ✅ Authenticate users
3. ✅ Store user profiles with roles
4. ✅ Manage tourism data

---

## Troubleshooting

**Issue: "Profiles table is empty"**
- Make sure you ran the SQL setup script above
- Check that the auth users exist in Supabase Auth tab

**Issue: "Cannot connect to Supabase"**
- Verify `.env` file has the correct values
- Check your internet connection
- Ensure the project is not paused in Supabase dashboard

**Issue: "Login not working"**
- Verify the auth user exists in Supabase **Authentication** → **Users**
- Check that the profile was created in the profiles table
- Clear browser cache and try again

---

**Last Updated:** $(date)
**Status:** ✅ Ready for Development
