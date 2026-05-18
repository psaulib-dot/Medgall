
import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthProvider mounted. Setting up auth state listener.');

    // 1. Fetch initial session
    const fetchSession = async () => {
      try {
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        console.log('Initial session fetched:', initialSession);
        setSession(initialSession);

        if (!initialSession) {
          setLoading(false);
        }
        // The user profile will be fetched by the second useEffect based on this session.
      } catch (error) {
        console.error('Error fetching initial session:', error);
        setLoading(false);
      }
    };

    fetchSession();

    // 2. Set up a listener for auth state changes (login, logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, newSession) => {
        console.log(`Auth state changed. Event: ${event}, New Session:`, newSession);
        setSession(newSession);
      }
    );

    // 3. Cleanup listener on unmount
    return () => {
      console.log('Cleaning up auth listener.');
      authListener.subscription.unsubscribe();
    };
  }, []);

  // This effect runs whenever the session changes, fetching the user's profile data
  useEffect(() => {
    if (session) {
      console.log('Session found. Fetching user profile...');
      setLoading(true);
      const fetchUserProfile = async () => {
        try {
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', session.user.id)
            .single();

          if (error) {
            console.error('Error fetching profile:', error);
            setUser(null); // Set user to null if profile fetch fails
          } else {
            console.log('User profile fetched successfully:', profile);
            setUser(profile); // The user object is now the profile data
          }
        } catch (error) {
          console.error('An unexpected error occurred while fetching profile:', error);
          setUser(null);
        } finally {
          setLoading(false);
        }
      };

      fetchUserProfile();
    } else {
      console.log('No session found. Clearing user data.');
      setUser(null); // If there's no session, there's no user
    }
  }, [session]);

  const value = {
    session,
    user, // This user object is from the 'profiles' table
    loading,
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
  };

  // We will render children even while loading to allow routes to handle loading state
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
