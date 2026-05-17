import citiesDataBilingual from './data/citiesDataBilingual';
import tourismEnhancements from './data/tourismEnhancements';
import { getAuthHeaders, isSupabaseConfigured, supabaseConfig } from './supabaseConfig';

const SESSION_KEY = 'medhalSupabaseSession';
const PROFILE_KEY = 'medhalUserProfile';

const request = async (path, options = {}) => {
  if (!isSupabaseConfigured) {
    throw new Error('Supabase is not configured. Add REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY to .env');
  }

  const response = await fetch(`${supabaseConfig.url}${path}`, {
    ...options,
    headers: {
      ...getAuthHeaders(options.accessToken),
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;

  if (!response.ok) {
    throw new Error(data?.msg || data?.error_description || data?.message || 'Supabase request failed');
  }

  return data;
};

export const saveSession = (session) => {
  if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
};

export const getSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
};

export const getAccessToken = () => getSession()?.access_token || null;

export const getCurrentUserProfile = () => {
  try {
    return JSON.parse(localStorage.getItem(PROFILE_KEY) || 'null');
  } catch {
    return null;
  }
};

export const signUpUser = async ({ username, email, password }) => {
  const body = {
    email,
    password,
    data: { username, role: 'visitor' },
  };

  if (typeof window !== 'undefined') {
    body.redirect_to = `${window.location.origin}/login`;
  }

  const authData = await request('/auth/v1/signup', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (authData?.access_token) saveSession(authData);

  const userId = authData?.user?.id;
  const profile = { id: userId, username, email, role: 'visitor' };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));

  if (userId && authData?.access_token) {
    await upsertProfile(profile, authData.access_token).catch(() => null);
  }

  return authData;
};

const isEmailVerified = (user) => Boolean(
  user?.confirmed_at ||
  user?.email_confirmed_at ||
  user?.user_metadata?.email_confirmed
);

export const signInUser = async ({ email, password }) => {
  const authData = await request('/auth/v1/token?grant_type=password', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  if (!isEmailVerified(authData.user)) {
    throw new Error('Please verify your email before logging in.');
  }

  saveSession(authData);
  let profile = await getProfile(authData.user.id, authData.access_token).catch(() => null);
  if (!profile) {
    profile = await upsertProfile({
      id: authData.user.id,
      username: authData.user.user_metadata?.username || email,
      email,
      role: authData.user.user_metadata?.role || 'visitor',
    }, authData.access_token).catch(() => ({
      id: authData.user.id,
      username: authData.user.user_metadata?.username || email,
      email,
      role: authData.user.user_metadata?.role || 'visitor',
    }));
  }

  localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  return { authData, profile };
};

export const sendPasswordResetEmail = async (email) => {
  const body = { email };
  if (typeof window !== 'undefined') {
    body.redirect_to = `${window.location.origin}/login`;
  }

  return request('/auth/v1/recover', {
    method: 'POST',
    body: JSON.stringify(body),
  });
};

export const signOutUser = async () => {
  const accessToken = getAccessToken();
  if (isSupabaseConfigured && accessToken) {
    await request('/auth/v1/logout', { method: 'POST', accessToken }).catch(() => null);
  }
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(PROFILE_KEY);
  localStorage.removeItem('authToken');
  localStorage.removeItem('userRole');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userName');
};

export const upsertProfile = async (profile, accessToken = getAccessToken()) => {
  const rows = await request('/rest/v1/profiles?on_conflict=id', {
    method: 'POST',
    accessToken,
    headers: { Prefer: 'resolution=merge-duplicates,return=representation' },
    body: JSON.stringify({
      id: profile.id,
      username: profile.username,
      email: profile.email,
      role: profile.role || 'visitor',
    }),
  });
  return rows?.[0] || profile;
};

export const getProfile = async (id, accessToken = getAccessToken()) => {
  const rows = await request(`/rest/v1/profiles?id=eq.${encodeURIComponent(id)}&select=*`, {
    method: 'GET',
    accessToken,
  });
  return rows?.[0] || null;
};

const getFallbackImage = (cityNameEn, field, index = 0) => {
  const fallbackCity = citiesDataBilingual[cityNameEn] || Object.values(citiesDataBilingual)[0];
  if (!fallbackCity) return '';
  if (field === 'city') return fallbackCity.mainImage;
  if (field === 'attractions') return fallbackCity.attractions?.items?.[index % fallbackCity.attractions.items.length]?.image || fallbackCity.mainImage;
  if (field === 'hotels') return fallbackCity.hotels?.[index % fallbackCity.hotels.length]?.image || fallbackCity.mainImage;
  if (field === 'restaurants') return fallbackCity.restaurants?.[index % fallbackCity.restaurants.length]?.image || fallbackCity.mainImage;
  if (field === 'entertainment') return fallbackCity.entertainment?.[index % (fallbackCity.entertainment?.length || 1)]?.image || fallbackCity.mainImage;
  return fallbackCity.mainImage;
};

const textObj = (row, nameField = 'name') => ({
  ar: {
    name: row[`${nameField}_ar`] || row.name_ar || row.title_ar || '',
    title: row.title_ar || row.name_ar || '',
    description: row.description_ar || '',
    address: row.address_ar || '',
    phone: row.phone || '',
    cuisine: row.cuisine_ar || row.service_type_ar || row.type_ar || '',
    type: row.service_type_ar || row.type_ar || row.category_ar || '',
    hours: row.opening_hours_ar || row.opening_hours || '',
  },
  en: {
    name: row[`${nameField}_en`] || row.name_en || row.title_en || '',
    title: row.title_en || row.name_en || '',
    description: row.description_en || '',
    address: row.address_en || '',
    phone: row.phone || '',
    cuisine: row.cuisine_en || row.service_type_en || row.type_en || '',
    type: row.service_type_en || row.type_en || row.category_en || '',
    hours: row.opening_hours_en || row.opening_hours || '',
  },
});

export const getTourismGuideData = async () => {
  if (!isSupabaseConfigured) {
    return { cities: citiesDataBilingual, enhancements: tourismEnhancements, source: 'local-fallback' };
  }

  try {
    const cities = await request('/rest/v1/cities?select=*&order=name_en.asc');
    const places = await request('/rest/v1/places?select=*&order=display_order.asc');

    if (!cities?.length) {
      return { cities: citiesDataBilingual, enhancements: tourismEnhancements, source: 'local-fallback-empty-db' };
    }

    const normalizedCities = {};
    const enhancements = {};

    cities.forEach((city) => {
      const cityKey = city.slug || city.name_en;
      normalizedCities[cityKey] = {
        ar: { name: city.name_ar, label: city.name_ar },
        en: { name: city.name_en, label: city.name_en },
        mainImage: city.image_url || getFallbackImage(city.name_en, 'city'),
        attractions: { items: [] },
        hotels: [],
        restaurants: [],
        entertainment: [],
      };
      enhancements[cityKey] = {
        coords: city.latitude && city.longitude ? { lat: Number(city.latitude), lng: Number(city.longitude) } : tourismEnhancements[city.name_en]?.coords,
        publicServices: [],
      };
    });

    places.forEach((place, index) => {
      const city = cities.find((c) => c.id === place.city_id);
      if (!city) return;
      const cityKey = city.slug || city.name_en;
      const base = textObj(place);
      const category = place.category;
      const common = {
        image: place.image_url || getFallbackImage(city.name_en, category, index),
        rating: place.rating ? `${place.rating}` : place.stars ? `${place.stars} stars` : '',
        coords: place.latitude && place.longitude ? { lat: Number(place.latitude), lng: Number(place.longitude) } : null,
        icon: place.icon || '📍',
        ...base,
      };

      if (category === 'attractions') {
        normalizedCities[cityKey].attractions.items.push({ image: common.image, ar: common.ar, en: common.en, coords: common.coords });
      } else if (category === 'hotels') {
        normalizedCities[cityKey].hotels.push({ image: common.image, ar: common.ar, en: common.en, rating: common.rating || `${place.stars || 4} stars`, coords: common.coords, booking: true });
      } else if (category === 'restaurants') {
        normalizedCities[cityKey].restaurants.push({ image: common.image, ar: common.ar, en: common.en, rating: common.rating, coords: common.coords });
      } else if (category === 'entertainment') {
        normalizedCities[cityKey].entertainment.push({ image: common.image, ar: common.ar, en: common.en, coords: common.coords });
      } else if (category === 'public_services') {
        enhancements[cityKey].publicServices.push({ icon: common.icon, ar: common.ar, en: common.en, coords: common.coords });
      }
    });

    return { cities: normalizedCities, enhancements, source: 'supabase' };
  } catch (error) {
    console.error('Supabase guide data load failed:', error);
    return { cities: citiesDataBilingual, enhancements: tourismEnhancements, source: 'local-fallback-error', error: error.message };
  }
};


export const submitContactMessage = async ({ name, email, subject = 'Website message', message }) => {
  if (!isSupabaseConfigured) {
    const localMessages = JSON.parse(localStorage.getItem('medhalContactMessages') || '[]');
    localStorage.setItem('medhalContactMessages', JSON.stringify([
      ...localMessages,
      { name, email, subject, message, created_at: new Date().toISOString() },
    ]));
    return { local: true };
  }

  const rows = await request('/rest/v1/contact_messages', {
    method: 'POST',
    headers: { Prefer: 'return=representation' },
    body: JSON.stringify({ name, email, subject, message }),
  });
  return rows?.[0] || null;
};

export { isSupabaseConfigured };
