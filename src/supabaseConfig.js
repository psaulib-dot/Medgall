const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  SUPABASE_URL &&
  SUPABASE_ANON_KEY &&
  !SUPABASE_URL.includes('your-project') &&
  !SUPABASE_ANON_KEY.includes('your-anon-key')
);

export const supabaseConfig = {
  url: SUPABASE_URL.replace(/\/$/, ''),
  anonKey: SUPABASE_ANON_KEY,
};

export const getAuthHeaders = (accessToken) => ({
  apikey: supabaseConfig.anonKey,
  Authorization: `Bearer ${accessToken || supabaseConfig.anonKey}`,
  'Content-Type': 'application/json',
});
