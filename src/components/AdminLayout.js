import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const AdminContainer = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  width: 250px;
  background: #0F1C2E;
  color: white;
  min-height: 100vh;
  padding: 20px;
`;

const NavItem = styled(NavLink)`
  display: block;
  color: white;
  text-decoration: none;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;

  &.active {
    background: #C6A75E;
  }

  &:hover {
    background: #1A2B42;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const AdminLayout = () => {
  const { t } = useTranslation();

  return (
    <AdminContainer>
      <Sidebar>
        <h2>{t('admin.panel')}</h2>
        <NavItem to="/admin/dashboard">{t('admin.dashboard')}</NavItem>
        <NavItem to="/admin/cities">{t('admin.cities')}</NavItem>
        <NavItem to="/admin/places">{t('admin.places')}</NavItem>
        <NavItem to="/admin/users">{t('admin.users')}</NavItem>
        <NavItem to="/admin/feedback">{t('admin.feedback')}</NavItem>
        <NavItem to="/admin/messages">{t('admin.messages')}</NavItem>
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </AdminContainer>
  );
};

export default AdminLayout;
