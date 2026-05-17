import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DirectionsIcon from '@mui/icons-material/Directions';
import MyLocationIcon from '@mui/icons-material/MyLocation';

const MapWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(15, 28, 46, 0.08);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 14px 34px rgba(15, 28, 46, 0.1);
  direction: ${({ $dir }) => $dir || 'ltr'};
`;

const MapFrameShell = styled.div`
  position: relative;
  width: 100%;
  min-height: 430px;
  background: linear-gradient(135deg, #f7f4ee, #ffffff);
`;

const GoogleFrame = styled.iframe`
  width: 100%;
  height: 430px;
  border: 0;
  display: block;
  background: #f5f5f5;
`;

const MapBadge = styled.div`
  position: absolute;
  top: 14px;
  ${({ $dir }) => ($dir === 'rtl' ? 'right: 14px;' : 'left: 14px;')}
  z-index: 2;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 13px;
  border-radius: 999px;
  background: rgba(15, 28, 46, 0.88);
  color: #e5d4a8;
  font-size: 13px;
  font-weight: 800;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);

  svg {
    font-size: 18px;
  }
`;

const MapContent = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(270px, 0.55fr);
  gap: 18px;
  padding: 18px;
  background: #ffffff;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 16px;
  }
`;

const SelectedPlace = styled.div`
  padding: 18px;
  border-radius: 18px;
  background: linear-gradient(135deg, #0f1c2e 0%, #17304d 100%);
  color: #ffffff;
  min-height: 100%;
`;

const SelectedTitle = styled.h4`
  margin: 0 0 10px;
  color: #e5d4a8;
  font-size: 22px;
  line-height: 1.35;
`;

const DetailLine = styled.p`
  margin: 8px 0 0;
  color: #f5f0e5;
  font-size: 14.5px;
  line-height: 1.7;
`;

const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 42px;
  padding: 10px 14px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 800;
  color: ${({ $primary }) => ($primary ? '#0f1c2e' : '#ffffff')};
  background: ${({ $primary }) => ($primary ? '#c6a75e' : 'rgba(255, 255, 255, 0.12)')};
  border: 1px solid ${({ $primary }) => ($primary ? '#c6a75e' : 'rgba(255, 255, 255, 0.22)')};
  transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.94;
  }

  svg {
    font-size: 18px;
  }
`;

const PlacesPanel = styled.div`
  min-width: 0;
`;

const PlacesTitle = styled.h4`
  margin: 0 0 12px;
  color: #0f1c2e;
  font-size: 18px;
`;

const PlacesList = styled.div`
  display: grid;
  gap: 10px;
  max-height: 306px;
  overflow-y: auto;
  padding-inline-end: 4px;
`;

const PlaceButton = styled.button`
  width: 100%;
  border: 1px solid ${({ $active }) => ($active ? '#c6a75e' : 'rgba(15, 28, 46, 0.12)')};
  border-radius: 16px;
  background: ${({ $active }) => ($active ? '#fff8e6' : '#ffffff')};
  color: #0f1c2e;
  padding: 13px 14px;
  text-align: ${({ $dir }) => ($dir === 'rtl' ? 'right' : 'left')};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${({ $active }) => ($active ? '0 10px 22px rgba(198, 167, 94, 0.18)' : '0 8px 18px rgba(15, 28, 46, 0.06)')};

  &:hover {
    transform: translateY(-2px);
    border-color: #c6a75e;
    box-shadow: 0 12px 24px rgba(15, 28, 46, 0.1);
  }
`;

const PlaceName = styled.span`
  display: block;
  font-size: 15px;
  line-height: 1.5;
  font-weight: 800;
`;

const PlaceMeta = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 6px;
  color: #5f6470;
  font-size: 13px;
  line-height: 1.45;
  flex-wrap: wrap;
`;

const EmptyMarkerState = styled.div`
  padding: 18px;
  border-radius: 16px;
  background: #f7f4ee;
  color: #5f6470;
  line-height: 1.7;
`;

const normalizeCoords = (coords) => {
  if (!coords?.lat || !coords?.lng) return null;
  return {
    lat: Number(coords.lat),
    lng: Number(coords.lng),
  };
};

const coordsQuery = (coords, fallbackQuery) => {
  const normalized = normalizeCoords(coords);
  return normalized ? `${normalized.lat},${normalized.lng}` : (fallbackQuery || 'Saudi Arabia tourism');
};

const makeGoogleMapsUrl = (target) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(target)}`;

const makeDirectionsUrl = (destination, userLocation) => {
  const destinationQuery = typeof destination === 'string'
    ? destination
    : coordsQuery(destination, 'Saudi Arabia');
  const origin = normalizeCoords(userLocation)
    ? `&origin=${userLocation.lat},${userLocation.lng}`
    : '';
  return `https://www.google.com/maps/dir/?api=1${origin}&destination=${encodeURIComponent(destinationQuery)}`;
};

const makeGoogleEmbedUrl = ({ coords, query, zoom = 13 }) => {
  const mapQuery = coordsQuery(coords, query);
  return `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&z=${zoom}&output=embed`;
};

const getCategoryText = (marker) => {
  if (!marker) return '';
  if (typeof marker.categoryLabel === 'string') return marker.categoryLabel;
  if (typeof marker.type === 'string') return marker.type;
  return '';
};

const InteractiveTourismMap = ({ center, markers = [], userLocation, isArabic, cityName }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const dir = isArabic ? 'rtl' : 'ltr';

  useEffect(() => {
    setSelectedIndex(null);
  }, [center?.lat, center?.lng, markers.length]);

  const activeMarker = selectedIndex !== null ? markers[selectedIndex] : null;
  const selectedTitle = activeMarker?.title || cityName || (isArabic ? 'خريطة المملكة العربية السعودية' : 'Saudi Arabia Map');
  const selectedAddress = activeMarker?.address || cityName || (isArabic ? 'المملكة العربية السعودية' : 'Saudi Arabia');
  const selectedCoords = activeMarker?.coords || center;
  const selectedQuery = activeMarker
    ? `${activeMarker.title} ${activeMarker.address || cityName || ''} Saudi Arabia`
    : `${cityName || 'Saudi Arabia'} tourism map`;

  const embedUrl = makeGoogleEmbedUrl({
    coords: selectedCoords,
    query: selectedQuery,
    zoom: activeMarker ? 15 : 12,
  });

  const mapsTarget = coordsQuery(selectedCoords, selectedQuery);

  return (
    <MapWrapper $dir={dir}>
      <MapFrameShell>
        <MapBadge $dir={dir}>
          <TravelExploreIcon />
          {isArabic ? 'خريطة Google مدمجة' : 'Embedded Google Map'}
        </MapBadge>
        <GoogleFrame
          title={selectedTitle}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </MapFrameShell>

      <MapContent>
        <SelectedPlace>
          <SelectedTitle>{selectedTitle}</SelectedTitle>
          <DetailLine>
            <LocationOnIcon sx={{ fontSize: 17, marginInlineEnd: '4px', verticalAlign: 'middle' }} />
            {selectedAddress}
          </DetailLine>
          {activeMarker?.categoryLabel && <DetailLine>{isArabic ? 'التصنيف' : 'Category'}: {getCategoryText(activeMarker)}</DetailLine>}
          {activeMarker?.distanceText && <DetailLine>{isArabic ? 'المسافة التقريبية' : 'Approximate distance'}: {activeMarker.distanceText}</DetailLine>}
          {userLocation?.lat && userLocation?.lng && (
            <DetailLine>
              <MyLocationIcon sx={{ fontSize: 17, marginInlineEnd: '4px', verticalAlign: 'middle' }} />
              {isArabic ? 'سيتم استخدام موقعك الحالي كنقطة بداية عند فتح الاتجاهات.' : 'Your current location will be used as the starting point when opening directions.'}
            </DetailLine>
          )}
          <ButtonRow>
            <ActionButton $primary href={makeGoogleMapsUrl(mapsTarget)} target="_blank" rel="noreferrer">
              <TravelExploreIcon />
              {isArabic ? 'فتح في Google Maps' : 'Open in Google Maps'}
            </ActionButton>
            <ActionButton href={makeDirectionsUrl(selectedCoords || selectedQuery, userLocation)} target="_blank" rel="noreferrer">
              <DirectionsIcon />
              {isArabic ? 'الاتجاهات' : 'Directions'}
            </ActionButton>
          </ButtonRow>
        </SelectedPlace>

        <PlacesPanel>
          <PlacesTitle>{isArabic ? 'اختر موقعاً لعرضه على الخريطة' : 'Choose a place to show on the map'}</PlacesTitle>
          {markers.length > 0 ? (
            <PlacesList>
              {markers.map((marker, index) => (
                <PlaceButton
                  key={`${marker.title}-${index}`}
                  type="button"
                  $active={selectedIndex === index}
                  $dir={dir}
                  onClick={() => setSelectedIndex(index)}
                >
                  <PlaceName>{marker.title}</PlaceName>
                  <PlaceMeta>
                    <LocationOnIcon sx={{ fontSize: 15 }} />
                    {getCategoryText(marker)}
                    {marker.distanceText ? ` • ${marker.distanceText}` : ''}
                  </PlaceMeta>
                </PlaceButton>
              ))}
            </PlacesList>
          ) : (
            <EmptyMarkerState>
              {isArabic
                ? 'سيتم عرض الخريطة للمدينة المختارة. أضف إحداثيات للأماكن لإظهارها هنا.'
                : 'The selected city map is shown. Add place coordinates to display them here.'}
            </EmptyMarkerState>
          )}
        </PlacesPanel>
      </MapContent>
    </MapWrapper>
  );
};

export default InteractiveTourismMap;
