import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';

// ========= STYLED COMPONENTS (remain unchanged) =========

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #0F1C2E;
  min-height: var(--header-height);
  padding: 12px clamp(16px, 4vw, 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  backdrop-filter: blur(10px);
  
  @media (max-width: 1024px) {
    padding: 12px 24px;
  }

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: auto;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

const LogoText = styled.span`
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  font-family: 'Georgia', serif;
  text-transform: uppercase;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  flex: 1;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease;
    font-family: 'Georgia', serif;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: linear-gradient(90deg, #C6A75E, #E5D4A8);
      transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: #C6A75E;
    }

    &.active {
      color: #C6A75E;
      text-decoration: none;

      &::after {
        width: 100%;
        text-decoration: none;
      }
    }
  }

  @media (max-width: 1024px) {
    gap: 25px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageToggle = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Georgia', serif;
  letter-spacing: 1px;

  &:hover {
    background-color: #C6A75E;
    border-color: #C6A75E;
    color: #0F1C2E;
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(198, 167, 94, 0.3);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

const AuthButton = styled.button`
  background-color: rgba(198, 167, 94, 0.14);
  border: 2px solid #C6A75E;
  color: #E5D4A8;
  padding: 10px 18px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #C6A75E;
    color: #0F1C2E;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 28px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  background-color: #0F1C2E;
  border-bottom: 1px solid rgba(198, 167, 94, 0.2);
  padding: 20px;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  gap: 15px;
  z-index: 999;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  a {
    color: #ffffff;
    text-decoration: none;
    padding: 10px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    font-size: 16px;
    font-family: 'Georgia', serif;
    border-left: 3px solid transparent;

    &:hover {
      background-color: rgba(198, 167, 94, 0.1);
      border-left-color: #C6A75E;
      color: #C6A75E;
      text-decoration: none;

    }

    &.active {
      background-color: rgba(198, 167, 94, 0.2);
      border-left-color: #C6A75E;
      color: #C6A75E;
      text-decoration: none;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const { user, signOut } = useAuth(); // Use the reliable user object and signOut from our hook
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Update active button based on the current path
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') setActiveButton('home');
    else if (currentPath === '/about') setActiveButton('about');
    else if (currentPath === '/acplaces') setActiveButton('destinations');
    else if (currentPath === '/contact') setActiveButton('contact');
    else if (currentPath === '/login') setActiveButton('login');
    else if (currentPath.startsWith('/visitor-dashboard')) setActiveButton('profile'); // CORRECT: Highlight profile for any dashboard page
    else if (currentPath.startsWith('/admin')) setActiveButton('admin');
    else setActiveButton(null);
  }, [location]);

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const handleLogout = async () => {
    await signOut(); // CORRECT: Use signOut from useAuth hook
    setActiveButton(null);
    closeMenu();
    navigate('/');
  };

  const navLinkItems = [
    { to: "/", name: "home", label: t('header.home', 'Home') },
    { to: "/acplaces", name: "destinations", label: t('header.destinations', 'Destinations') },
    { to: "/about", name: "about", label: t('header.about', 'About Us') },
    { to: "/contact", name: "contact", label: t('header.contact', 'Contact') },
  ];

  return (
    <HeaderContainer dir={isArabic ? 'rtl' : 'ltr'}>
      <LogoSection onClick={() => navigate('/')}> 
        <LogoImage src="/logo.png" alt="Medhal Logo" />
        <LogoText>{isArabic ? 'مدهال' : 'MEDHAL'}</LogoText>
      </LogoSection>

      {/* Centered Navigation */}
      <NavLinks>
        {navLinkItems.map(item => (
          <Link key={item.name} to={item.to} className={activeButton === item.name ? 'active' : ''}>
            {item.label}
          </Link>
        ))}
        {/* CORRECT: Show Profile link only when user is logged in, and link to the correct path */}
        {user && (
          <Link to="/visitor-dashboard/profile" className={activeButton === 'profile' ? 'active' : ''}>
            {t('header.profile', 'Profile')}
          </Link>
        )}
        {user && user.role === 'admin' && (
          <Link to="/admin" className={activeButton === 'admin' ? 'active' : ''}>
            {t('header.admin', 'Admin')}
          </Link>
        )}
      </NavLinks>

      {/* Right-aligned controls */}
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <LanguageToggle onClick={toggleLanguage}>
          {isArabic ? 'English' : 'العربية'}
        </LanguageToggle>
        {/* CORRECT: Use user object to determine which button to show */}
        {user ? (
          <AuthButton onClick={handleLogout}>{t('header.logout', 'Logout')}</AuthButton>
        ) : (
          <AuthButton onClick={() => navigate('/login')}>{t('header.login', 'Login')}</AuthButton>
        )}
        <HamburgerMenu onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </HamburgerMenu>
      </div>

      {/* Mobile Menu */}
      <MobileMenu $isOpen={isMenuOpen} dir={isArabic ? 'rtl' : 'ltr'}>
        {navLinkItems.map(item => (
            <Link key={item.name} to={item.to} className={activeButton === item.name ? 'active' : ''} onClick={closeMenu}>
                {item.label}
            </Link>
        ))}
        {user && (
          <Link to="/visitor-dashboard/profile" className={activeButton === 'profile' ? 'active' : ''} onClick={closeMenu}>
            {t('header.profile', 'Profile')}
          </Link>
        )}
        {user && user.role === 'admin' && (
          <Link to="/admin" className={activeButton === 'admin' ? 'active' : ''} onClick={closeMenu}>
            {t('header.admin', 'Admin')}
          </Link>
        )}
        {/* Login/Logout buttons for mobile */}
        {user ? (
            <AuthButton onClick={handleLogout}>{t('header.logout', 'Logout')}</AuthButton>
        ) : (
            <AuthButton onClick={() => { navigate('/login'); closeMenu(); }}>{t('header.login', 'Login')}</AuthButton>
        )}
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
