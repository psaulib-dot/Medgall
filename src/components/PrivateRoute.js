import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = () => {
  const { user } = useAuth();

  // Check for admin role here in a real app
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;