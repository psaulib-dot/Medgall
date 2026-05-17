import React from 'react';
import styled, { keyframes } from 'styled-components';
import bgImage from '../images/bg.jpeg';
import { useTranslation } from 'react-i18next';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PublicIcon from '@mui/icons-material/Public';
import HotelIcon from '@mui/icons-material/Hotel';

// ============ ANIMATIONS ============

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const parallaxFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

// ============ HERO SECTION ============

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - var(--header-height));
  background: linear-gradient(135deg, rgba(15, 28, 46, 0.45) 0%, rgba(15, 28, 46, 0.35) 100%),
              url(${bgImage}) center / cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 48px clamp(24px, 7vw, 80px) 120px clamp(24px, 7vw, 80px);
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(198, 167, 94, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding: 36px clamp(24px, 6vw, 50px) 100px clamp(24px, 6vw, 50px);
    min-height: 78vh;
  }

  @media (max-width: 768px) {
    min-height: 68vh;
    padding: 36px 30px 80px 30px;
    justify-content: center;
    text-align: center;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    min-height: 60vh;
    padding: 20px 20px 60px 20px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
  z-index: 2;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const MainHeading = styled.h1`
  font-size: 72px;
  font-weight: 700;
  color: #ffffff;
  font-family: 'Georgia', serif;
  letter-spacing: 2px;
  line-height: 1.2;
  text-shadow: 2px 2px 16px rgba(0, 0, 0, 0.5);
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.2s both;

  @media (max-width: 1024px) {
    font-size: 56px;
  }

  @media (max-width: 768px) {
    font-size: 44px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const SubHeading = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #E8DCC8;
  font-family: 'Georgia', serif;
  line-height: 1.8;
  margin: 0;
  animation: ${fadeIn} 1s ease-out 0.4s both;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;



// ============ FEATURE CARDS SECTION ============

const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: var(--spacing-3xl) clamp(var(--spacing-md), 6vw, 80px);
  background: transparent;
  z-index: 5;
  margin-top: -60px;

  @media (max-width: 1024px) {
    padding: var(--spacing-2xl) clamp(var(--spacing-md), 5vw, 50px);
    margin-top: -40px;
  }

  @media (max-width: 768px) {
    position: relative;
    transform: none;
    width: 100%;
    padding: var(--spacing-xl) var(--spacing-md);
    margin-top: 0;
  }

  @media (max-width: 480px) {
    padding: var(--spacing-lg) var(--spacing-sm);
    margin-top: 0;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  margin-top: 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const CardBase = styled.div`
  padding: 32px;
  border-radius: 20px;
  backdrop-filter: blur(20px);
  background: ${({ $bgColor }) => $bgColor || 'var(--medhal-navy)'};
  border: 1px solid rgba(198, 167, 94, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: all var(--transition-base);
  cursor: pointer;
  animation: ${slideUp} 1s ease-out;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  animation-fill-mode: both;
  min-width: 0;
  overflow: hidden;

  &:hover {
    transform: translateY(-12px);
    background: ${({ $hoverBg }) => $hoverBg || 'rgba(15, 28, 46, 0.95)'};
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
    border-color: rgba(198, 167, 94, 0.5);
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const Card = styled(CardBase)`
  background: var(--medhal-navy);
  border-color: rgba(198, 167, 94, 0.3);
  
  &:hover {
    background: rgba(15, 28, 46, 0.95);
  }
`;

const DarkCard = styled(CardBase)`
  background: var(--medhal-navy);
  border-color: rgba(198, 167, 94, 0.3);
  
  &:hover {
    background: rgba(15, 28, 46, 0.95);
    border-color: rgba(198, 167, 94, 0.5);
  }
`;

const CardIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  animation: ${parallaxFloat} 3s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || '0s'};
  color: var(--medhal-gold);

  ${CardBase}:hover & {
    transform: scale(1.2) rotate(5deg);
  }
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: var(--medhal-gold);
  font-family: var(--font-family-primary);
  margin: 16px 0 12px 0;
  letter-spacing: 1px;
`;

const CardDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: #D9D9D9;
  margin: 0;
  font-family: var(--font-family-primary);
`;

const AboutHomeSection = styled.section`
  background: rgba(255, 255, 255, 0.94);
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(15, 28, 46, 0.08);
  padding: 40px;
  margin: var(--spacing-2xl) auto;
  max-width: 1200px;
  width: calc(100% - var(--spacing-xl));
  display: grid;
  grid-template-columns: minmax(260px, 320px) 1fr;
  gap: 32px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    margin: var(--spacing-xl) var(--spacing-md);
    width: auto;
  }

  @media (max-width: 768px) {
    padding: var(--spacing-xl);
    margin: var(--spacing-lg) var(--spacing-md);
  }

  @media (max-width: 480px) {
    padding: var(--spacing-lg);
    margin: var(--spacing-md) var(--spacing-sm);
    gap: var(--spacing-lg);
  }
`;

const AboutLogo = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin: 0 auto;
  display: block;
  object-fit: cover;
  background: linear-gradient(135deg, var(--medhal-gold) 0%, #C6A75E 100%);
  padding: 8px;
  box-shadow: 0 8px 24px rgba(198, 167, 94, 0.3);
  transition: all var(--transition-base);

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 36px rgba(198, 167, 94, 0.4);
  }
`;

const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const AboutHeading = styled.h2`
  font-size: clamp(28px, 3vw, 36px);
  color: #0F1C2E;
  margin: 0;
  font-family: 'Georgia', serif;
`;

const AboutParagraph = styled.p`
  margin: 0;
  line-height: 1.9;
  color: #4a4a4a;
  font-size: 17px;
  font-family: 'Georgia', serif;
`;

const AboutHighlights = styled.div`
  display: grid;
  gap: 12px;
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const HighlightBullet = styled.span`
  width: 10px;
  height: 10px;
  margin-top: 8px;
  border-radius: 50%;
  background: #C6A75E;
  flex-shrink: 0;
`;

const HighlightText = styled.p`
  margin: 0;
  color: #5a5a5a;
  line-height: 1.7;
  font-size: 15px;
  font-family: 'Georgia', serif;
`;

// ============ PADDING SECTION ============






const Home = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <div dir={isArabic ? 'rtl' : 'ltr'}>
      <HeroSection>
        <HeroContent>
          <MainHeading>
            {isArabic ? 'مدهال مرشدك السياحي الذكي' : 'Medhal, Your Smart Tourism Guide'}
          </MainHeading>
          <SubHeading>
            {isArabic
              ? 'موقع سياحي متكامل يدعم العربية والإنجليزية ويرشد الزوار إلى أجمل الوجهات والخدمات العامة في المملكة'
              : 'A bilingual tourism website guiding visitors to Saudi destinations and essential public services'}
          </SubHeading>
         
        </HeroContent>
      </HeroSection>

      <AboutHomeSection>
        <AboutLogo src="/logo.png" alt={isArabic ? 'شعار مدهال' : 'Medhal Logo'} />
        <AboutText>
          <AboutHeading>
            {isArabic ? 'منصة مدهال السياحية' : 'About Medhal'}
          </AboutHeading>
          <AboutParagraph>
            {isArabic
              ? 'مدهال منصة سياحية ذكية ثنائية اللغة تساعد الزوار على اكتشاف أفضل الوجهات والتراث والخدمات العامة داخل المملكة بجودة عالية وسهولة استخدام.'
              : 'Medhal is a smart bilingual tourism platform that helps visitors discover top destinations, heritage sites, and essential public services across the Kingdom with clarity and ease.'}
          </AboutParagraph>
          <AboutHighlights>
            <HighlightItem>
              <HighlightBullet />
              <HighlightText>
                {isArabic ? 'معلومات محدثة عن المواقع الأثرية والسياحية.' : 'Up-to-date details for heritage and tourism sites.'}
              </HighlightText>
            </HighlightItem>
            <HighlightItem>
              <HighlightBullet />
              <HighlightText>
                {isArabic ? 'خرائط تفاعلية وروابط اتجاهات مباشرة.' : 'Interactive maps and direct direction links.'}
              </HighlightText>
            </HighlightItem>
            <HighlightItem>
              <HighlightBullet />
              <HighlightText>
                {isArabic ? 'عرض شامل للفنادق والمطاعم والخدمات الأساسية.' : 'Comprehensive hotel, restaurant, and service listings.'}
              </HighlightText>
            </HighlightItem>
          </AboutHighlights>
        </AboutText>
      </AboutHomeSection>

      <CardsWrapper $isArabic={isArabic}>
        <CardsContainer>
          {/* Card 1 - Explore The Sites */}
          <Card $delay="0.8s">
            <CardIcon $delay="0s"><AccountBalanceIcon sx={{ fontSize: 48 }} /></CardIcon>
            <CardTitle>
              {isArabic ? 'المعالم السياحية والأثرية' : 'Tourist & Heritage Sites'}
            </CardTitle>
            <CardDescription>
              {isArabic
                ? 'اكتشف المواقع التاريخية والوجهات السياحية في المدن السعودية مع صور ووصف واضح'
                : 'Discover historical sites and Saudi destinations with clear photos and descriptions'}
            </CardDescription>
          </Card>

          {/* Card 2 - Local Experiences */}
          <Card $delay="1s">
            <CardIcon $delay="0.2s"><PublicIcon sx={{ fontSize: 48 }} /></CardIcon>
            <CardTitle>
              {isArabic ? 'خرائط واتجاهات' : 'Maps & Directions'}
            </CardTitle>
            <CardDescription>
              {isArabic
                ? 'استخدم الخرائط التفاعلية وروابط الاتجاهات للوصول إلى الوجهات والخدمات بسهولة'
                : 'Use interactive maps and direction links to reach destinations and services easily'}
            </CardDescription>
          </Card>

          {/* Card 3 - Where to Stay (Same Blue Version) */}
          <Card $delay="1.2s">
            <CardIcon $delay="0.4s"><HotelIcon sx={{ fontSize: 48 }} /></CardIcon>
            <CardTitle>
              {isArabic ? 'الخدمات التي يحتاجها الزائر' : 'Visitor Essential Services'}
            </CardTitle>
            <CardDescription>
              {isArabic
                ? 'اعثر على الفنادق والمطاعم والمستشفيات ومحطات الوقود والمراكز التجارية والمرافق العامة'
                : 'Find hotels, restaurants, hospitals, fuel stations, malls, and public facilities'}
            </CardDescription>
          </Card>
        </CardsContainer>
      </CardsWrapper>


    
    </div>
  );
};

export default Home;
