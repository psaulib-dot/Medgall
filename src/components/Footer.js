
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import vision2030Image from '../images/ll.png';

const FooterContainer = styled.footer`
  background-color: #0F1C2E;
  padding: 40px 20px;
  color: white;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2);

  @media (min-width: 1024px) {
    text-align: center;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImportantLinks = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: right;

  h4 {
    font-size: 20px;
    margin-bottom: 15px;
    color: #C6A75E;
    font-weight: bold;
  }

  a {
    color: #E8DCC8;
    text-decoration: none;
    margin-bottom: 10px;
    display: block;
    transition: color 0.3s ease;

    &:hover {
      color: #C6A75E;
    }
  }
`;

const LogosContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Vision2030Logo = styled.img`
  width: 120px;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;



const Footer = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <FooterContainer dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <FooterContent>
        <ImportantLinks style={{ textAlign: i18n.language === 'ar' ? 'right' : 'left' }}>
          <h4>{t('footer.importantLinks')}</h4>
          <a
            href="https://heritage.moc.gov.sa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i18n.language === 'ar' ? 'موقع وزارة الثقافة' : 'Ministry of Culture'}
          </a>
          <a
            href="https://ksaforunesco.org/ar/ksas-world-heritage-list/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i18n.language === 'ar' ? 'قائمة التراث العالمي في السعودية' : 'Saudi UNESCO World Heritage List'}
          </a>
          <a
            href="https://www.sta.gov.sa/ar/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i18n.language === 'ar' ? 'موقع هيئة السياحة' : 'Saudi Tourism Authority'}
          </a>
        </ImportantLinks>

        <LogosContainer>
          <Logo src="/logo.png" alt={t('footer.medhalLogo')} />
          <Vision2030Logo src={vision2030Image} alt={t('footer.vision2030')} />
        </LogosContainer>
      </FooterContent>
   
      <p style={{ marginTop: '30px', fontSize: '14px' }}>
        © 2026 {t('footer.medhal')} - {t('footer.allRightsReserved')}
      </p>
    </FooterContainer>
  );
};

export default Footer;
