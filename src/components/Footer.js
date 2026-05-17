
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

import vision2030Image from '../images/ll.png';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, var(--medhal-navy) 0%, #0a1420 100%);
  padding: var(--spacing-2xl) var(--spacing-md);
  color: var(--medhal-white);
  text-align: center;
  font-family: var(--font-family-primary);
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.3);
  margin-top: var(--spacing-3xl);

  @media (min-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }

  @media (min-width: 1024px) {
    padding: var(--spacing-2xl) var(--spacing-xl);
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--spacing-lg);
  max-width: var(--max-width-container);
  margin: 0 auto var(--spacing-xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
`;

const FooterSection = styled.div`
  text-align: ${props => props.textAlign || 'center'};
`;

const SectionTitle = styled.h4`
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-md);
  color: var(--medhal-gold);
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-primary);
`;

const LinkItem = styled.a`
  color: var(--medhal-cream);
  text-decoration: none;
  margin-bottom: var(--spacing-sm);
  display: block;
  font-size: var(--font-size-xs);
  transition: all var(--transition-fast);
  line-height: var(--line-height-relaxed);

  &:hover {
    color: var(--medhal-gold);
    transform: translateX(${props => props.dir === 'rtl' ? '-4px' : '4px'});
  }
`;

const StyledLink = styled(Link)`
  color: var(--medhal-cream);
  text-decoration: none;
  margin-bottom: var(--spacing-sm);
  display: block;
  font-size: var(--font-size-xs);
  transition: all var(--transition-fast);
  line-height: var(--line-height-relaxed);

  &:hover {
    color: var(--medhal-gold);
    transform: translateX(${props => props.dir === 'rtl' ? '-4px' : '4px'});
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(198, 167, 94, 0.1);
  border: 1px solid var(--medhal-gold);
  border-radius: var(--radius-full);
  color: var(--medhal-gold);
  transition: all var(--transition-base);
  cursor: pointer;

  &:hover {
    background: var(--medhal-gold);
    color: var(--medhal-navy);
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(198, 167, 94, 0.3);
  }

  svg {
    font-size: 20px;
  }
`;

const LogosContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-lg);
`;

const LogoWrapper = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  border: 1px solid rgba(198, 167, 94, 0.2);
  transition: all var(--transition-base);

  &:hover {
    background: rgba(198, 167, 94, 0.1);
    border-color: var(--medhal-gold);
  }
`;

const Logo = styled.img`
  width: 80px;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  transition: transform var(--transition-base);

  &:hover {
    transform: scale(1.05);
  }
`;

const Vision2030Logo = styled.img`
  width: 100px;
  height: auto;
  filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));
  transition: transform var(--transition-base);

  &:hover {
    transform: scale(1.05);
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--medhal-gold), transparent);
  margin: var(--spacing-lg) 0;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  max-width: var(--max-width-container);
  margin: 0 auto;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(198, 167, 94, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: var(--font-size-xs);
  color: var(--medhal-cream);
  margin: 0;
  line-height: var(--line-height-normal);
`;

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <FooterContainer dir={isArabic ? 'rtl' : 'ltr'}>
      <FooterContent>
        {/* Links Section */}
        <FooterSection textAlign={isArabic ? 'right' : 'left'}>
          <SectionTitle>{t('footer.importantLinks')}</SectionTitle>
          <LinkItem
            href="https://heritage.moc.gov.sa/"
            target="_blank"
            rel="noopener noreferrer"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {isArabic ? 'وزارة الثقافة' : 'Ministry of Culture'}
          </LinkItem>
          <LinkItem
            href="https://ksaforunesco.org/ar/ksas-world-heritage-list/"
            target="_blank"
            rel="noopener noreferrer"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {isArabic ? 'قائمة التراث العالمي' : 'UNESCO World Heritage'}
          </LinkItem>
          <LinkItem
            href="https://www.sta.gov.sa/ar/home"
            target="_blank"
            rel="noopener noreferrer"
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            {isArabic ? 'هيئة السياحة' : 'Tourism Authority'}
          </LinkItem>
        </FooterSection>

        {/* Quick Navigation */}
        <FooterSection textAlign={isArabic ? 'right' : 'left'}>
          <SectionTitle>{t('footer.quickNav')}</SectionTitle>
          <StyledLink to="/acplaces" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic ? 'الوجهات والخريطة' : 'Destinations & Map'}
          </StyledLink>
          <StyledLink to="/about" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic ? 'عن مدهال' : 'About Medhal'}
          </StyledLink>
          <StyledLink to="/contact" dir={isArabic ? 'rtl' : 'ltr'}>
            {isArabic ? 'تواصل معنا' : 'Contact Us'}
          </StyledLink>
        </FooterSection>

        {/* Social Media */}
        <FooterSection>
          <SectionTitle>{t('footer.followUs')}</SectionTitle>
          <SocialMediaContainer>
            <SocialIcon
              href="https://facebook.com/medhal"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon
              href="https://twitter.com/medhal"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon
              href="https://instagram.com/medhal"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon
              href="https://youtube.com/medhal"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <YouTubeIcon />
            </SocialIcon>
            <SocialIcon
              href="https://linkedin.com/company/medhal"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </SocialIcon>
            <SocialIcon
              href="mailto:info@medhal.com"
              title="Email"
            >
              <EmailIcon />
            </SocialIcon>
          </SocialMediaContainer>
        </FooterSection>
      </FooterContent>

      <LogosContainer>
        <LogoWrapper>
          <Logo src="/logo.png" alt="Medhal Logo" />
        </LogoWrapper>
        <LogoWrapper>
          <Vision2030Logo src={vision2030Image} alt="Vision 2030" />
        </LogoWrapper>
      </LogosContainer>

      <Divider />

      {/* Footer Bottom */}
      <FooterBottom dir={isArabic ? 'rtl' : 'ltr'}>
        <Copyright>
          © 2024-2026 {t('footer.medhal')}. {t('footer.allRightsReserved')}
        </Copyright>
        <Copyright>
          {isArabic ? 'منصة سياحية ذكية تابعة لرؤية السعودية 2030' : 'A smart tourism platform for Saudi Arabia Vision 2030'}
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
