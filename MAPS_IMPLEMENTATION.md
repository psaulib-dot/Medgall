# Google Maps Integration

The tourism guide now uses an embedded Google Maps approach instead of static map images or a Leaflet/OpenStreetMap tile layer.

## What changed

- `src/components/InteractiveTourismMap.js` now renders a live Google Maps iframe inside the application.
- The map works without adding a Google Maps JavaScript API dependency or an API key.
- City-level maps are shown first, and users can select any listed place/service to focus the embedded Google Map on that location.
- Each destination includes direct Google Maps links for:
  - Opening the selected place in Google Maps.
  - Getting directions from the user’s current location when geolocation permission is enabled.

## Why this approach was selected

This implementation is suitable when the project needs Google Maps inside the UI but cannot configure paid API keys, billing, or custom Google Maps JavaScript markers. It keeps the application simple, reliable, and easy to deploy while still meeting the requirement for integrated maps and direction links.

## Main files updated

- `src/components/InteractiveTourismMap.js`
- `src/components/ArchaeologicalPlacesPage.js`
- `src/GlobalStyle.js`
- `src/App.css`
- `src/components/Header.js`
- `src/components/Home.js`
- `src/components/Login.js`
- `src/components/SignUp.js`

## Notes

For a future production version with advanced multi-marker overlays directly on the map, the app can be upgraded to the Google Maps JavaScript API. That upgrade will require a Google Cloud API key and billing configuration.
