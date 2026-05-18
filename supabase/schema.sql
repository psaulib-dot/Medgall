-- Create the 'categories' table
CREATE TABLE public.categories (
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    name_ar text NOT NULL,
    name_en text NOT NULL,
    slug text NOT NULL UNIQUE,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT categories_pkey PRIMARY KEY (id)
);

-- Alter the 'places' table to use the 'categories' table
-- First, remove the old 'category' column with the CHECK constraint
-- Note: This is a destructive action and will remove the existing 'category' data.
-- A data migration step would be needed in a production environment.
ALTER TABLE public.places DROP COLUMN category;

-- Add a 'category_id' column that references the 'categories' table
ALTER TABLE public.places ADD COLUMN category_id uuid REFERENCES public.categories(id);

-- Add the 'full_name' column to the 'profiles' table
ALTER TABLE public.profiles ADD COLUMN full_name text;

-- Add 'name' and 'email' to the 'feedback' table for guest feedback
ALTER TABLE public.feedback ADD COLUMN name text;
ALTER TABLE public.feedback ADD COLUMN email text;

-- Recreate tables with the new schema for clarity and to ensure all constraints are met.
-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

DROP TABLE IF EXISTS public.cities CASCADE;
CREATE TABLE public.cities (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  slug text NOT NULL UNIQUE,
  name_ar text NOT NULL,
  name_en text NOT NULL,
  region_ar text,
  region_en text,
  description_ar text,
  description_en text,
  image_url text,
  latitude numeric,
  longitude numeric,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT cities_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public.contact_messages CASCADE;
CREATE TABLE public.contact_messages (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT contact_messages_pkey PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public.favorites CASCADE;
CREATE TABLE public.favorites (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL,
  place_id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT favorites_pkey PRIMARY KEY (id),
  CONSTRAINT favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id),
  CONSTRAINT favorites_place_id_fkey FOREIGN KEY (place_id) REFERENCES public.places(id)
);

DROP TABLE IF EXISTS public.feedback CASCADE;
CREATE TABLE public.feedback (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid,
  name text,
  email text,
  subject text,
  message text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT feedback_pkey PRIMARY KEY (id),
  CONSTRAINT feedback_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);

DROP TABLE IF EXISTS public.places CASCADE;
CREATE TABLE public.places (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  city_id uuid NOT NULL,
  category_id uuid,
  name_ar text NOT NULL,
  name_en text NOT NULL,
  description_ar text,
  description_en text,
  address_ar text,
  address_en text,
  phone text,
  opening_hours text,
  opening_hours_ar text,
  opening_hours_en text,
  service_type_ar text,
  service_type_en text,
  cuisine_ar text,
  cuisine_en text,
  stars integer CHECK (stars >= 1 AND stars <= 5),
  rating numeric CHECK (rating >= 0::numeric AND rating <= 5::numeric),
  image_url text,
  icon text,
  latitude numeric,
  longitude numeric,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT places_pkey PRIMARY KEY (id),
  CONSTRAINT places_city_id_fkey FOREIGN KEY (city_id) REFERENCES public.cities(id),
  CONSTRAINT places_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id)
);

DROP TABLE IF EXISTS public.profiles CASCADE;
CREATE TABLE public.profiles (
  id uuid NOT NULL,
  username text NOT NULL,
  full_name text,
  email text NOT NULL UNIQUE,
  role text NOT NULL DEFAULT 'visitor'::text CHECK (role = ANY (ARRAY['visitor'::text, 'admin'::text])),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id)
);
