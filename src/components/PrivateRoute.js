
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

/**
 * A component to protect routes that require authentication.
 * It can also optionally check for a specific user role.
 *
 * How it works:
 * 1. It retrieves the current user's authentication status using the `useAuth` hook.
 * 2. If the user is not logged in, it redirects them to the /login page.
 * 3. If the route requires a specific role (passed via `requiredRole` prop),
 *    it checks if the user has that role. If not, it redirects them to the home page.
 * 4. If the user is authenticated (and has the required role, if any), it renders
 *    the nested child routes using the `<Outlet />` component from react-router-dom.
 */
const PrivateRoute = ({ requiredRole }) => {
  const { user } = useAuth();

  // While authentication status is being determined, you could show a loader
  // For now, we'll proceed directly.

  // 1. Check for authentication
  if (!user) {
    // Redirect to login page if not authenticated, preserving the intended destination
    return <Navigate to="/login" replace />;
  }

  // 2. Check for authorization (role-based access)
  if (requiredRole && user.role !== requiredRole) {
    // Redirect to home page if the user does not have the necessary role
    return <Navigate to="/" replace />;
  }

  // 3. Render the protected content
  return <Outlet />;
};

export default PrivateRoute;
