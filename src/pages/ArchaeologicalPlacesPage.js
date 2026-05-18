import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getTourismGuideData } from '../supabaseService';
import InteractiveTourismMap from './InteractiveTourismMap';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HotelIcon from '@mui/icons-material/Hotel';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AttractionsIcon from '@mui/icons-material/Attractions';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WcIcon from '@mui/icons-material/Wc';
import MapIcon from '@mui/icons-material/Map';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const Container = styled.main`
  font-family: '29LT Riwaya', 'Tahoma', sans-serif;
  padding: 24px 24px 48px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f4ee 100%);
  min-height: calc(100vh - var(--header-height));
  direction: ${({ dir }) => dir || 'ltr'};

  @media (min-width: 768px) {
    padding: 32px;
  }
`;

const PageLayout = styled.div`
  display: flex;
  flex-direction: row-reverse; /* Keep map on the left for LTR */
  gap: 24px;
  margin-top: 28px;
  
  ${({ dir }) => dir === 'rtl' && css`
    flex-direction: row;
  `}

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 480px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1024px) {
    width: 100%;
    order: 2; /* Show sidebar below map on mobile */
  }
`;

const MainContent = styled.div`
  flex-grow: 1;
  position: sticky;
  top: calc(var(--header-height) + 24px);
  height: calc(100vh - var(--header-height) - 48px);

  @media (max-width: 1024px) {
    position: relative;
    top: 0;
    order: 1;
    height: 65vh;
    min-height: 450px;
  }
`;


const SidebarSection = styled.div`
  background: #fff;
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0 12px 28px rgba(15, 28, 46, 0.1);
  border: 1px solid rgba(198, 167, 94, 0.22);
`;

const ScrollableContent = styled.div`
  max-height: 70vh; /* Adjust as needed */
  overflow-y: auto;
  padding-right: 10px; /* For scrollbar spacing */
`;


const HeroPanel = styled.section`
  background: linear-gradient(135deg, #0F1C2E 0%, #17304d 100%);
  color: #ffffff;
  border-radius: 28px;
  padding: 28px;
  margin-bottom: 34px;
  box-shadow: 0 18px 45px rgba(15, 28, 46, 0.18);
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    background: rgba(198, 167, 94, 0.18);
    top: -80px;
    ${({ dir }) => (dir === 'rtl' ? 'left: -70px;' : 'right: -70px;')}
  }

  @media (min-width: 768px) {
    padding: 34px;
  }
`;

const HeroTitle = styled.h1`
  margin: 0 0 12px;
  font-size: clamp(28px, 4vw, 48px);
  color: #E5D4A8;
`;

const HeroText = styled.p`
  margin: 0;
  max-width: 980px;
  font-size: 18px;
  line-height: 1.9;
  color: #f5f0e5;
  position: relative;
  z-index: 1;
`;

const SearchInput = styled.input`
  border: 2px solid rgba(15, 28, 46, 0.12);
  border-radius: 16px;
  padding: 14px 18px;
  font-size: 17px;
  background: #fff;
  color: #0F1C2E;
  outline: none;
  width: 100%;
  margin-bottom: 14px;

  &:focus {
    border-color: #C6A75E;
    box-shadow: 0 0 0 4px rgba(198, 167, 94, 0.16);
  }
`;

const LocationButton = styled.button`
  border: none;
  border-radius: 16px;
  background: #C6A75E;
  color: #0F1C2E;
  padding: 14px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    background: #b89450;
  }
`;

const SectionTitle = styled.h2`
  color: #0F1C2E;
  font-size: clamp(22px, 3vw, 32px);
  font-weight: bold;
  margin: 0 0 18px;
  text-align: center;

  span {
    border-bottom: 4px solid #C6A75E;
    padding-bottom: 8px;
  }
`;

const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 18px;
`;

const CityCard = styled.button`
  background-color: #fff;
  border-radius: 18px;
  border: 3px solid ${({ $selected }) => ($selected ? '#C6A75E' : 'transparent')};
  box-shadow: 0 8px 20px rgba(15, 28, 46, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.28s ease;
  padding: 0;
  text-align: inherit;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(15, 28, 46, 0.15);
  }
`;

const CityImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  display: block;
`;

const CityTitle = styled.h3`
  padding: 14px;
  margin: 0;
  color: #0F1C2E;
  font-size: 19px;
  text-align: center;
  background-color: #fff;
`;

const MapPanel = styled.div`
  background: #fff;
  border-radius: 22px;
  padding: 18px;
  box-shadow: 0 12px 28px rgba(15, 28, 46, 0.1);
  border: 1px solid rgba(198, 167, 94, 0.22);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: 10px 18px;
  font-size: 15px;
  font-weight: bold;
  background-color: ${({ $active }) => ($active ? '#0F1C2E' : '#fff')};
  color: ${({ $active }) => ($active ? '#E5D4A8' : '#0F1C2E')};
  border: 2px solid #0F1C2E;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  &:hover {
    background-color: #0F1C2E;
    color: #E5D4A8;
  }
  
  svg {
    font-size: 18px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`;

const Card = styled.article`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(15, 28, 46, 0.08);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 35px rgba(15, 28, 46, 0.12);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ServiceIcon = styled.div`
  height: 120px;
  display: grid;
  place-items: center;
  font-size: 52px;
  background: linear-gradient(135deg, #f6f1e6, #ffffff);
  color: #0F1C2E;
  
  svg {
    font-size: 52px;
  }
`;

const CardContent = styled.div`
  padding: 18px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h4`
  color: #0F1C2E;
  font-size: 20px;
  margin: 0 0 10px;
  font-weight: bold;
  line-height: 1.4;
`;

const CardDescription = styled.p`
  color: #5A5A5A;
  font-size: 15px;
  line-height: 1.7;
  margin: 0 0 12px;
`;

const InfoItem = styled.div`
  color: #0F1C2E;
  font-size: 14px;
  margin-top: 6px;
  line-height: 1.5;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: auto;
  padding-top: 14px;
`;

const ActionLink = styled.a`
  text-align: center;
  text-decoration: none;
  border-radius: 12px;
  padding: 10px 12px;
  font-weight: 700;
  background: ${({ $primary }) => ($primary ? '#C6A75E' : '#0F1C2E')};
  color: ${({ $primary }) => ($primary ? '#0F1C2E' : '#ffffff')};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  color: #0F1C2E;
  font-size: 18px;
  padding: 40px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 12px 28px rgba(15, 28, 46, 0.08);
`;

const StatusNote = styled.div`
  margin-top: 12px;
  color: #6c5f44;
  background: #fff8e6;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid rgba(198, 167, 94, 0.35);
`;

const MapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-bottom: 14px;
  flex-wrap: wrap;
`;

const MapTitle = styled.h3`
  margin: 0;
  color: #0F1C2E;
  font-size: 22px;
`;

const MapFilterBar = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const MapFilterButton = styled.button`
  border: 1px solid ${({ $active }) => ($active ? '#0F1C2E' : 'rgba(15, 28, 46, 0.16)')};
  background: ${({ $active }) => ($active ? '#0F1C2E' : '#fff')};
  color: ${({ $active }) => ($active ? '#E5D4A8' : '#0F1C2E')};
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    transform: translateY(-1px);
    border-color: #C6A75E;
  }
  svg {
    font-size: 16px;
  }
`;


const MapLegend = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 8px;
  margin-top: 12px;
  color: #0F1C2E;
  font-size: 13px;
`;

const LegendItem = styled.span`
  background: #f7f4ee;
  border: 1px solid rgba(198, 167, 94, 0.22);
  border-radius: 999px;
  padding: 8px 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  svg {
    font-size: 16px;
  }
`;

const getText = (item, lang, field, fallback = '') => item?.[lang]?.[field] || fallback;

const CATEGORY_META = {
  all: { icon: MapIcon, ar: 'الكل', en: 'All' },
  attractions: { icon: AccountBalanceIcon, ar: 'المعالم', en: 'Attractions' },
  hotels: { icon: HotelIcon, ar: 'الفنادق', en: 'Hotels' },
  restaurants: { icon: RestaurantIcon, ar: 'المطاعم', en: 'Restaurants' },
  entertainment: { icon: AttractionsIcon, ar: 'الترفيه', en: 'Entertainment' },
  publicServices: { icon: LocalHospitalIcon, ar: 'الخدمات', en: 'Services' },
};

const getCategoryText = (category, isArabic) => {
  const meta = CATEGORY_META[category] || CATEGORY_META.all;
  return isArabic ? meta.ar : meta.en;
};

const getCategoryLabel = (category, isArabic) => {
  const meta = CATEGORY_META[category] || CATEGORY_META.all;
  const Icon = meta.icon;
  return (
    <>
      <Icon />
      {getCategoryText(category, isArabic)}
    </>
  );
};

const offsetCoordinate = (center, index, category = 'attractions') => {
  if (!center?.lat || !center?.lng) return null;
  const categoryShift = {
    attractions: 0,
    hotels: 0.8,
    restaurants: 1.6,
    entertainment: 2.4,
    publicServices: 3.2,
  }[category] || 0;
  const angle = (index * 0.95) + categoryShift;
  const radius = 0.012 + ((index % 5) * 0.004);
  return {
    lat: Number((center.lat + Math.sin(angle) * radius).toFixed(7)),
    lng: Number((center.lng + Math.cos(angle) * radius).toFixed(7)),
  };
};

const distanceKm = (from, to) => {
  if (!from?.lat || !from?.lng || !to?.lat || !to?.lng) return null;
  const R = 6371;
  const dLat = (to.lat - from.lat) * Math.PI / 180;
  const dLng = (to.lng - from.lng) * Math.PI / 180;
  const lat1 = from.lat * Math.PI / 180;
  const lat2 = to.lat * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2
    + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

const formatDistance = (km, isArabic) => {
  if (!km && km !== 0) return '';
  return km < 1
    ? `${Math.round(km * 1000)} ${isArabic ? 'متر' : 'm'}`
    : `${km.toFixed(1)} ${isArabic ? 'كم' : 'km'}`;
};

const makeMapSearchUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const makeDirectionsUrl = (destination, userLocation) => {
  const destinationQuery = typeof destination === 'string'
    ? destination
    : `${destination.lat},${destination.lng}`;
  const origin = userLocation ? `&origin=${userLocation.lat},${userLocation.lng}` : '';
  return `https://www.google.com/maps/dir/?api=1${origin}&destination=${encodeURIComponent(destinationQuery)}`;
};

const ArchaeologicalPlacesPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [activeTab, setActiveTab] = useState('attractions');
  const [mapFilter, setMapFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [locationMessage, setLocationMessage] = useState('');
  const [citiesDataBilingual, setCitiesDataBilingual] = useState({});
  const [tourismEnhancements, setTourismEnhancements] = useState({});
  const contentRef = useRef(null);
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'ar';
  const isArabic = lang === 'ar';

  useEffect(() => {
    let isMounted = true;
    getTourismGuideData().then(({ cities, enhancements }) => {
      if (!isMounted) return;
      setCitiesDataBilingual(cities || {});
      setTourismEnhancements(enhancements || {});
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const cityKeys = useMemo(() => Object.keys(citiesDataBilingual), [citiesDataBilingual]);

  const handleCityClick = (cityName) => {
    setSelectedCity(cityName);
    setActiveTab('attractions');
    setMapFilter('all');

    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const handleDetectLocation = () => {
    if (!navigator.geolocation) {
      setLocationMessage(isArabic ? 'المتصفح لا يدعم تحديد الموقع.' : 'Geolocation is not supported by this browser.');
      return;
    }

    setLocationMessage(isArabic ? 'جاري تحديد موقعك...' : 'Detecting your location...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        setLocationMessage(isArabic ? 'تم تفعيل موقعك الحالي لفتح الاتجاهات بدقة.' : 'Your current location is enabled for accurate directions.');
      },
      () => {
        setLocationMessage(isArabic ? 'تعذر الوصول للموقع. يمكنك الاستمرار باستخدام روابط الخرائط.' : 'Unable to access location. You can still use map links.');
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const selectedCityData = selectedCity ? citiesDataBilingual[selectedCity] : null;
  const enhancement = selectedCity ? tourismEnhancements[selectedCity] : null;

  const cityCenter = enhancement?.coords || null;

  const buildCategoryItems = (category) => {
    if (!selectedCityData) return [];

    // ... (rest of the buildCategoryItems function is the same)

    if (category === 'attractions') {
        return selectedCityData.attractions.items.map((item, index) => ({
          category,
          markerIcon: <AccountBalanceIcon />,
          kind: 'image',
          image: item.image,
          title: getText(item, lang, 'title'),
          description: getText(item, lang, 'description'),
          address: getText(item, lang, 'address', selectedCityData[lang].name) || selectedCityData[lang].name,
          type: isArabic ? 'معلم سياحي / أثري' : 'Tourist / Archaeological Site',
          phone: getText(item, lang, 'phone', isArabic ? 'غير متوفر' : 'Not available'),
          coords: item.coords || offsetCoordinate(cityCenter, index, category),
        }));
      }
  
      if (category === 'hotels') {
        return selectedCityData.hotels.map((item, index) => ({
          category,
          markerIcon: <HotelIcon />,
          kind: 'image',
          image: item.image,
          title: getText(item, lang, 'name'),
          description: getText(item, lang, 'description'),
          address: getText(item, lang, 'address'),
          type: isArabic ? 'فندق' : 'Hotel',
          phone: getText(item, lang, 'phone'),
          extra: `⭐ ${item.rating}`,
          coords: item.coords || offsetCoordinate(cityCenter, index, category),
        }));
      }
  
      if (category === 'restaurants') {
        return selectedCityData.restaurants.map((item, index) => ({
          category,
          markerIcon: <RestaurantIcon />,
          kind: 'image',
          image: item.image,
          title: getText(item, lang, 'name'),
          description: getText(item, lang, 'description'),
          address: getText(item, lang, 'address'),
          type: getText(item, lang, 'cuisine'),
          phone: getText(item, lang, 'phone'),
          extra: `🕐 ${getText(item, lang, 'hours')}`,
          coords: item.coords || offsetCoordinate(cityCenter, index, category),
        }));
      }
  
      if (category === 'entertainment') {
        return (selectedCityData.entertainment || []).map((item, index) => ({
          category,
          markerIcon: <AttractionsIcon />,
          kind: 'image',
          image: item.image,
          title: getText(item, lang, 'name'),
          description: getText(item, lang, 'description'),
          address: getText(item, lang, 'address'),
          type: getText(item, lang, 'type'),
          phone: getText(item, lang, 'phone'),
          extra: `🕐 ${getText(item, lang, 'hours')}`,
          coords: item.coords || offsetCoordinate(cityCenter, index, category),
        }));
      }
  
      if (category === 'publicServices') {
        const getServiceIcon = (serviceType) => {
          const type = serviceType?.toLowerCase() || '';
          if (type.includes('hospital') || type.includes('مستشفى')) return <LocalHospitalIcon />;
          if (type.includes('fuel') || type.includes('وقود') || type.includes('gas')) return <LocalGasStationIcon />;
          if (type.includes('mall') || type.includes('مركز') || type.includes('shopping')) return <ShoppingCartIcon />;
          if (type.includes('restroom') || type.includes('دورة') || type.includes('wc')) return <WcIcon />;
          return <LocalHospitalIcon />;
        };
  
        return (enhancement?.publicServices || []).map((item, index) => ({
          category,
          markerIcon: getServiceIcon(getText(item, lang, 'type')),
          kind: 'service',
          icon: getServiceIcon(getText(item, lang, 'type')),
          title: getText(item, lang, 'name'),
          description: getText(item, lang, 'description'),
          address: getText(item, lang, 'address'),
          type: getText(item, lang, 'type'),
          phone: getText(item, lang, 'phone'),
          extra: `🕐 ${getText(item, lang, 'hours')}`,
          coords: item.coords || offsetCoordinate(cityCenter, index, category),
        }));
      }
  
      return [];

  };

  const filteredCityKeys = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return cityKeys;
    return cityKeys.filter((cityKey) => {
      const city = citiesDataBilingual[cityKey];
      return city.ar.name.includes(searchTerm.trim()) || city.en.name.toLowerCase().includes(term);
    });
  }, [cityKeys, searchTerm, citiesDataBilingual]);


  const items = useMemo(() => {
    if (!selectedCity) return [];
    const term = searchTerm.trim().toLowerCase();
    const categoryItems = buildCategoryItems(activeTab);
    
    if (!term) return categoryItems;

    return categoryItems.filter(item => 
      [item.title, item.description, item.address, item.type]
        .join(' ').toLowerCase().includes(term) ||
        [item.title, item.description, item.address, item.type]
        .join(' ').includes(searchTerm.trim())
    );
  }, [selectedCity, activeTab, searchTerm, citiesDataBilingual, enhancement, lang]);

  const allMapItems = useMemo(() => 
    ['attractions', 'hotels', 'restaurants', 'entertainment', 'publicServices']
      .flatMap(buildCategoryItems)
      .filter(item => item.coords?.lat && item.coords?.lng),
    [selectedCity, citiesDataBilingual, enhancement, lang]
  );

  const mapItems = useMemo(() => 
    allMapItems
      .filter(item => mapFilter === 'all' || item.category === mapFilter)
      .map(item => ({
        ...item,
        categoryLabel: getCategoryText(item.category, isArabic),
        distanceText: formatDistance(distanceKm(userLocation, item.coords), isArabic),
      })),
    [allMapItems, mapFilter, userLocation, isArabic]
  );

  const cityName = selectedCityData?.[lang]?.name;

  return (
    <Container dir={isArabic ? 'rtl' : 'ltr'}>
      <HeroPanel dir={isArabic ? 'rtl' : 'ltr'}>
        <HeroTitle>{isArabic ? 'مرشد سياحي ذكي داخل المملكة' : 'Smart Tourism Guide in Saudi Arabia'}</HeroTitle>
        <HeroText>
          {isArabic
            ? 'اختر مدينة واستكشف معالمها السياحية، الفنادق، المطاعم، وأماكن الترفيه والخدمات العامة من خلال الخريطة التفاعلية والقوائم التفصيلية.'
            : 'Select a city and explore its landmarks, hotels, restaurants, entertainment, and public services through our interactive map and detailed lists.'}
        </HeroText>
      </HeroPanel>

      <PageLayout dir={isArabic ? 'rtl' : 'ltr'}>
        <MainContent>
          <MapPanel>
            <MapHeader>
              <MapTitle>{cityName ? `${isArabic ? 'خريطة' : 'Map of'} ${cityName}` : (isArabic ? 'خريطة المملكة' : 'Map of Saudi Arabia')}</MapTitle>
              {selectedCity && (
                <MapFilterBar>
                  {Object.keys(CATEGORY_META).map((category) => (
                    <MapFilterButton
                      key={category}
                      $active={mapFilter === category}
                      onClick={() => setMapFilter(category)}
                    >
                      {getCategoryLabel(category, isArabic)}
                    </MapFilterButton>
                  ))}
                </MapFilterBar>
              )}
            </MapHeader>
            <InteractiveTourismMap
              center={cityCenter}
              markers={mapItems}
              userLocation={userLocation}
              isArabic={isArabic}
              cityName={cityName}
            />
            <MapLegend>
              <LegendItem><LocationCityIcon /> {isArabic ? 'مركز المدينة' : 'City Center'}</LegendItem>
              <LegendItem><LocationOnIcon /> {isArabic ? 'الأماكن' : 'Places'}</LegendItem>
              <LegendItem><MyLocationIcon /> {isArabic ? 'موقعك' : 'Your Location'}</LegendItem>
            </MapLegend>
          </MapPanel>
        </MainContent>

        <Sidebar>
          <SidebarSection>
             <SearchInput
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder={isArabic ? 'ابحث عن مدينة، معلم، فندق...' : 'Search city, landmark, hotel...'}
            />
            <LocationButton onClick={handleDetectLocation}>
              <MyLocationIcon />
              {isArabic ? 'استخدام موقعي للاتجاهات' : 'Use My Location for Directions'}
            </LocationButton>
            {locationMessage && <StatusNote>{locationMessage}</StatusNote>}
          </SidebarSection>
          
          <SidebarSection>
            <SectionTitle><span>{isArabic ? 'اختر المدينة' : 'Select a City'}</span></SectionTitle>
            <CitiesGrid>
              {filteredCityKeys.map((city) => (
                <CityCard
                  key={city}
                  onClick={() => handleCityClick(city)}
                  $selected={selectedCity === city}
                >
                  <CityImage src={citiesDataBilingual[city].mainImage} alt={citiesDataBilingual[city][lang].name} />
                  <CityTitle>{citiesDataBilingual[city][lang].name}</CityTitle>
                </CityCard>
              ))}
            </CitiesGrid>
          </SidebarSection>

          {selectedCity && (
            <SidebarSection ref={contentRef}>
              <SectionTitle><span>{isArabic ? 'استكشف' : 'Explore'} {cityName}</span></SectionTitle>
              <TabsContainer>
                {Object.keys(CATEGORY_META).filter(c => c !== 'all').map(category => (
                  <Tab key={category} $active={activeTab === category} onClick={() => setActiveTab(category)}>
                    {React.createElement(CATEGORY_META[category].icon)}
                    {getCategoryText(category, isArabic)}
                  </Tab>
                ))}
              </TabsContainer>
              
              <ScrollableContent>
                {items.length > 0 ? (
                  <ContentGrid>
                    {items.map((item, index) => {
                      const destination = item.coords || `${item.title}, ${item.address}, Saudi Arabia`;
                      const mapLabel = `${item.title} ${item.address} Saudi Arabia`;
                      return (
                        <Card key={`${item.title}-${index}`}>
                          {item.kind === 'service'
                            ? <ServiceIcon>{item.icon}</ServiceIcon>
                            : <CardImage src={item.image} alt={item.title} />}
                          <CardContent>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                            <InfoItem>📍 {item.address}</InfoItem>
                            {item.coords && userLocation && <InfoItem>🧭 {isArabic ? 'المسافة' : 'Distance'}: {formatDistance(distanceKm(userLocation, item.coords), isArabic)}</InfoItem>}
                            <InfoItem>🏷️ {item.type}</InfoItem>
                            {item.extra && <InfoItem>{item.extra}</InfoItem>}
                            <InfoItem>📱 {item.phone}</InfoItem>
                            <Actions>
                              <ActionLink $primary href={makeMapSearchUrl(mapLabel)} target="_blank" rel="noreferrer">
                                {isArabic ? 'عرض على الخريطة' : 'View on Map'}
                              </ActionLink>
                              <ActionLink href={makeDirectionsUrl(destination, userLocation)} target="_blank" rel="noreferrer">
                                {isArabic ? 'اذهب إليه' : 'Go There'}
                              </ActionLink>
                            </Actions>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </ContentGrid>
                ) : (
                  <EmptyState>{isArabic ? 'لا توجد نتائج مطابقة للبحث في هذا القسم.' : 'No matching results found in this section.'}</EmptyState>
                )}
              </ScrollableContent>
            </SidebarSection>
          )}
        </Sidebar>
      </PageLayout>
    </Container>
  );
};

export default ArchaeologicalPlacesPage;
