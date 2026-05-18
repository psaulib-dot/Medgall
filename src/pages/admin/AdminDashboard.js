
import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../hooks/useAuth'; // Adjusted path

const DashboardContainer = styled.div`
  padding: 40px;
  font-family: '29LT Riwaya', sans-serif;
  background-color: #f9f9f9;
  min-height: calc(100vh - 200px);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  border-bottom: 2px solid #c6a75e;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const WelcomeMessage = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const UserInfo = styled.div`
  background-color: #fff;
  border: 1px solid #eee;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const AdminDashboard = () => {
  const { user } = useAuth();

  console.log('AdminDashboard loaded. User:', user);

  return (
    <DashboardContainer>
      <Title>Admin Dashboard</Title>
      {user ? (
        <>
          <WelcomeMessage>
            Welcome, {user.full_name || 'Admin'}! You have successfully accessed the admin area.
          </WelcomeMessage>
          <UserInfo>
            <h2>Your Profile Information:</h2>
            <p><strong>Email:</strong> {user.email || 'Not available'}</p>
            <p><strong>Role:</strong> {user.role}</p>
            <p><strong>User ID:</strong> {user.id}</p>
          </UserInfo>
        </>
      ) : (
        <WelcomeMessage>Loading user information...</WelcomeMessage>
      )}
    </DashboardContainer>
  );
};

export default AdminDashboard;
