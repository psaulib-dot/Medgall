
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const isSupabaseConfigured = supabaseUrl && supabaseAnonKey;

export const getAuthHeaders = (accessToken) => {
  const headers = {
    'Content-Type': 'application/json',
    'apikey': supabaseAnonKey,
  };
  if (accessToken) {
    headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return headers;
};

export const supabaseConfig = {
  url: supabaseUrl,
  anonKey: supabaseAnonKey,
};
