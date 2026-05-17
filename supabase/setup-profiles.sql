-- Medhal Tourism Guide - User Profile Setup
-- Run this in Supabase SQL Editor to create profiles for your auth users
-- Created for medhaladmin@gmail.com and medhaluser@gmail.com

-- Step 1: Verify auth users exist
SELECT 'Step 1: Checking Auth Users' as status;
SELECT id, email, email_confirmed_at FROM auth.users WHERE email IN ('medhaladmin@gmail.com', 'medhaluser@gmail.com');

-- Step 2: Create profiles with appropriate roles
SELECT 'Step 2: Creating Profiles' as status;
INSERT INTO public.profiles (id, username, email, role, created_at) 
VALUES 
  ((SELECT id FROM auth.users WHERE email = 'medhaladmin@gmail.com'), 'medhal_admin', 'medhaladmin@gmail.com', 'admin', now()),
  ((SELECT id FROM auth.users WHERE email = 'medhaluser@gmail.com'), 'medhal_user', 'medhaluser@gmail.com', 'visitor', now())
ON CONFLICT (email) DO NOTHING;

-- Step 3: Verify profiles were created
SELECT 'Step 3: Verifying Profiles' as status;
SELECT id, username, email, role, created_at FROM public.profiles 
WHERE email IN ('medhaladmin@gmail.com', 'medhaluser@gmail.com')
ORDER BY created_at DESC;

-- Step 4: Count total profiles
SELECT COUNT(*) as total_profiles FROM public.profiles;

-- If you need to delete and recreate (for testing):
-- DELETE FROM public.profiles WHERE email IN ('medhaladmin@gmail.com', 'medhaluser@gmail.com');
