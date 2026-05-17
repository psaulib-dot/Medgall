import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageSwitcherContainer = styled.div`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
  flex-shrink: 0;
  padding: 0 var(--spacing-md);
  margin: 0 var(--spacing-md);
  background: rgba(198, 167, 94, 0.1);
  border-radius: var(--radius-full);
  padding: var(--spacing-xs) var(--spacing-sm);
`;

const LanguageButton = styled.button`
  background-color: ${({ isActive }) =>
    isActive ? 'var(--medhal-gold)' : 'transparent'};
  color: ${({ isActive }) => (isActive ? 'white' : 'var(--medhal-navy)')};
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-full);
  cursor: pointer;
  font-family: var(--font-family-primary);
  font-size: var(--font-size-sm);
  font-weight: 600;
  transition: all var(--transition-fast);
  white-space: nowrap;
  min-width: 70px;
  text-align: center;

  &:hover {
    background-color: var(--medhal-gold);
    color: white;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline: 2px solid var(--medhal-gold);
    outline-offset: 2px;
  }
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [direction, setDirection] = useState(i18n.language === 'ar' ? 'rtl' : 'ltr');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    
    // Update document direction
    const dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    document.documentElement.dir = dir;
    document.body.dir = dir;
    setDirection(dir);
  };

  useEffect(() => {
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    setDirection(dir);
  }, [i18n.language]);

  return (
    <LanguageSwitcherContainer role="group" aria-label="Language Selector">
      <LanguageButton
        isActive={i18n.language === 'ar'}
        onClick={() => changeLanguage('ar')}
        aria-label="Switch to Arabic"
        title="العربية"
      >
        العربية
      </LanguageButton>
      <LanguageButton
        isActive={i18n.language === 'en'}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
        title="English"
      >
        English
      </LanguageButton>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
