
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ requiredRole }) => {
  const { user, loading, session } = useAuth();
  const location = useLocation();

  console.log('PrivateRoute Check:', { loading, session, user, requiredRole });

  // 1. Show a loading indicator while the auth state is being determined
  if (loading) {
    return <div>Loading... Please wait.</div>; // This is crucial to prevent premature rendering
  }

  // 2. Check for a valid session. If there is no session, redirect to login.
  if (!session) {
    console.log('No session found. Redirecting to /login.');
    // Preserve the user's intended destination to redirect back after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3. Session exists, but the user profile might still be loading or failed to load.
  // If there's no user object (profile), they are not truly authenticated yet.
  if (!user) {
    // This can happen briefly while the profile is being fetched.
    // Or if fetching the profile failed, in which case they can't access protected routes.
    console.log('Session exists, but no user profile. Access denied.');
    // You could redirect to a specific error page or back to login.
    return <Navigate to="/login" replace />;
  }

  // 4. Check for authorization (role-based access) if a requiredRole is specified.
  if (requiredRole && user.role !== requiredRole) {
    console.log(`Authorization failed. User role: ${user.role}, Required role: ${requiredRole}. Redirecting to /unauthorized.`);
    // User is logged in but does not have the necessary permissions.
    return <Navigate to="/unauthorized" replace />;
  }

  // 5. If all checks pass, render the nested child routes.
  console.log('All checks passed. Rendering protected content.');
  return <Outlet />;
};

export default PrivateRoute;
