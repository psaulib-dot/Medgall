-- Medhal Tourism Guide Supabase Schema
-- Run this file in Supabase SQL Editor, then add your environment values to .env.

create extension if not exists "uuid-ossp";

-- User profile table connected to Supabase Auth users.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  email text not null unique,
  role text not null default 'visitor' check (role in ('visitor', 'admin')),
  created_at timestamptz not null default now()
);

-- Tourism cities.
create table if not exists public.cities (
  id uuid primary key default uuid_generate_v4(),
  slug text not null unique,
  name_ar text not null,
  name_en text not null,
  region_ar text,
  region_en text,
  description_ar text,
  description_en text,
  image_url text,
  latitude numeric(10,7),
  longitude numeric(10,7),
  created_at timestamptz not null default now()
);

-- Tourist places and visitor services.
create table if not exists public.places (
  id uuid primary key default uuid_generate_v4(),
  city_id uuid not null references public.cities(id) on delete cascade,
  category text not null check (category in ('attractions','hotels','restaurants','entertainment','public_services')),
  name_ar text not null,
  name_en text not null,
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
  stars int check (stars between 1 and 5),
  rating numeric(2,1) check (rating between 0 and 5),
  image_url text,
  icon text,
  latitude numeric(10,7),
  longitude numeric(10,7),
  display_order int not null default 0,
  created_at timestamptz not null default now()
);

-- Favorites saved by visitors.
create table if not exists public.favorites (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users(id) on delete cascade,
  place_id uuid not null references public.places(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(user_id, place_id)
);

-- Contact messages from the website.
create table if not exists public.contact_messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.cities enable row level security;
alter table public.places enable row level security;
alter table public.favorites enable row level security;
alter table public.contact_messages enable row level security;

-- Public read access for tourism guide data.
drop policy if exists "Public can read cities" on public.cities;
create policy "Public can read cities" on public.cities for select using (true);

drop policy if exists "Public can read places" on public.places;
create policy "Public can read places" on public.places for select using (true);

-- Profile access.
drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile" on public.profiles for select using (auth.uid() = id);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles for update using (auth.uid() = id);

-- Favorites access.
drop policy if exists "Users can manage own favorites" on public.favorites;
create policy "Users can manage own favorites" on public.favorites for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- Contact form can insert messages.
drop policy if exists "Anyone can send contact message" on public.contact_messages;
create policy "Anyone can send contact message" on public.contact_messages for insert with check (true);

-- Admin policies for managing content. Set profile.role = 'admin' manually for admin account.
drop policy if exists "Admins can manage cities" on public.cities;
create policy "Admins can manage cities" on public.cities for all using (
  exists (select 1 from public.profiles where profiles.id = auth.uid() and profiles.role = 'admin')
) with check (
  exists (select 1 from public.profiles where profiles.id = auth.uid() and profiles.role = 'admin')
);

drop policy if exists "Admins can manage places" on public.places;
create policy "Admins can manage places" on public.places for all using (
  exists (select 1 from public.profiles where profiles.id = auth.uid() and profiles.role = 'admin')
) with check (
  exists (select 1 from public.profiles where profiles.id = auth.uid() and profiles.role = 'admin')
);

-- Example seed records. Replace image_url values with Supabase Storage public URLs when ready.
insert into public.cities (slug, name_ar, name_en, region_ar, region_en, description_ar, description_en, latitude, longitude)
values
('riyadh', 'الرياض', 'Riyadh', 'منطقة الرياض', 'Riyadh Region', 'مدينة تجمع بين التاريخ والترفيه والخدمات الحديثة.', 'A city that combines history, entertainment, and modern services.', 24.7136, 46.6753),
('alula', 'العلا', 'AlUla', 'منطقة المدينة المنورة', 'Madinah Region', 'وجهة أثرية وسياحية عالمية تضم مواقع تاريخية فريدة.', 'A world-class heritage and tourism destination with unique historical sites.', 26.6085, 37.9232)
on conflict (slug) do nothing;

insert into public.places (city_id, category, name_ar, name_en, description_ar, description_en, address_ar, address_en, service_type_ar, service_type_en, phone, opening_hours, icon, latitude, longitude, display_order)
select id, 'attractions', 'الدرعية التاريخية', 'Historic Diriyah', 'من أهم المواقع التاريخية في المملكة وتضم حي الطريف المدرج في اليونسكو.', 'One of the most important historical sites in Saudi Arabia, including the UNESCO-listed At-Turaif district.', 'الدرعية، الرياض', 'Diriyah, Riyadh', 'معلم أثري', 'Heritage Site', null, '09:00 - 23:00', '🏛️', 24.7340, 46.5755, 1
from public.cities where slug = 'riyadh'
on conflict do nothing;

insert into public.places (city_id, category, name_ar, name_en, description_ar, description_en, address_ar, address_en, service_type_ar, service_type_en, phone, opening_hours, icon, latitude, longitude, display_order)
select id, 'public_services', 'مستشفى قريب', 'Nearby Hospital', 'خدمة عامة مهمة للزوار في حالات الطوارئ.', 'An important public service for visitors during emergencies.', 'وسط المدينة', 'City center', 'مستشفى', 'Hospital', '997', '24/7', '🏥', latitude, longitude, 10
from public.cities where slug = 'riyadh'
on conflict do nothing;
