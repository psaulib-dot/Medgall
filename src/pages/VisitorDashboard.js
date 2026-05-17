import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaUser, FaHeart, FaComment, FaCog } from 'react-icons/fa';
import { useAuth } from '../hooks/useAuth';

const VisitorDashboardContainer = styled.div`
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

const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--medhal-gold-light);
`;

const UserAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid var(--medhal-gold);
  margin-bottom: var(--spacing-md);
`;

const UserName = styled.h3`
  color: var(--medhal-text-primary);
  font-weight: var(--font-weight-bold);
  margin: 0;
`;

const UserEmail = styled.p`
  color: var(--medhal-text-secondary);
  font-size: 0.9rem;
  margin: 0;
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

const VisitorDashboard = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const { user } = useAuth();

  const visitorNavs = [
    { to: '/visitor-dashboard/profile', icon: <FaUser />, label: t('visitor.nav.profile') || 'Profile' },
    { to: '/visitor-dashboard/favorites', icon: <FaHeart />, label: t('visitor.nav.favorites') || 'Favorites' },
    { to: '/visitor-dashboard/feedback', icon: <FaComment />, label: t('visitor.nav.feedback') || 'My Feedback' },
    { to: '/visitor-dashboard/settings', icon: <FaCog />, label: t('visitor.nav.settings') || 'Settings' },
  ];

  return (
    <VisitorDashboardContainer>
      <Sidebar isArabic={isArabic}>
        {user && (
          <UserProfile>
            <UserAvatar src={user.user_metadata?.avatar_url || '/default-avatar.png'} alt="User Avatar" />
            <UserName>{user.user_metadata?.full_name || user.email}</UserName>
            <UserEmail>{user.email}</UserEmail>
          </UserProfile>
        )}
        <SidebarNav>
          {visitorNavs.map(nav => (
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
    </VisitorDashboardContainer>
  );
};

export default VisitorDashboard;
