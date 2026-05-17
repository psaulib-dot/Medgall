
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaCity, FaMapMarkedAlt, FaList } from 'react-icons/fa';

const AdminDashboardContainer = styled.div`
  display: flex;
  min-height: calc(100vh - var(--header-height));
  background-color: var(--medhal-background);
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: var(--medhal-white);
  box-shadow: 2px 0 5px rgba(0,0,0,0.05);
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  
  ${({ isArabic }) => isArabic && `
    border-left: 1px solid var(--medhal-gold-light);
    border-right: none;
  `}
  ${({ isArabic }) => !isArabic && `
    border-right: 1px solid var(--medhal-gold-light);
  `}
`;

const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const StyledNavLink = styled(NavLink)`
  color: var(--medhal-text-secondary);
  text-decoration: none;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-base);

  &.active, &:hover {
    background-color: var(--medhal-gold-lightest);
    color: var(--medhal-gold-dark);
    font-weight: var(--font-weight-bold);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Content = styled.main`
  flex: 1;
  padding: var(--spacing-xl);
  background-color: #F7F4EE;
`;

const AdminDashboard = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const adminNavs = [
    { to: '/admin-dashboard/categories', icon: <FaList />, label: t('admin.nav.categories') || 'Categories' },
    { to: '/admin-dashboard/cities', icon: <FaCity />, label: t('admin.nav.cities') || 'Cities' },
    { to: '/admin-dashboard/places', icon: <FaMapMarkedAlt />, label: t('admin.nav.places') || 'Places' },
  ];

  return (
    <AdminDashboardContainer>
      <Sidebar isArabic={isArabic}>
        <SidebarNav>
          {adminNavs.map(nav => (
            <StyledNavLink to={nav.to} key={nav.to}>
              {nav.icon}
              <span>{nav.label}</span>
            </StyledNavLink>
          ))}
        </SidebarNav>
      </Sidebar>
      <Content>
        <Outlet />
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
