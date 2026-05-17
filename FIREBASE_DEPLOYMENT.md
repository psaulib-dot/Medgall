# Firebase Hosting Deployment Guide

## Project Configuration

Your Firebase project is configured and ready:
- **Project ID**: medhal-21df9
- **Auth Domain**: medhal-21df9.firebaseapp.com
- **Hosting URL**: https://medhal-21df9.web.app

---

## Prerequisites

1. Install Firebase CLI globally:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

---

## Deployment Steps

### Step 1: Install Dependencies
```bash
npm install
```

This will install Firebase SDK and all project dependencies.

### Step 2: Build the Project
```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Step 3: Deploy to Firebase
```bash
firebase deploy
```

Or deploy only hosting:
```bash
firebase deploy --only hosting
```

---

## What Was Configured

### 1. Firebase Configuration (`src/firebaseConfig.js`)
```javascript
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAvggI_dgC36Wg-McL5VZlWMIMWFIRiuno",
  authDomain: "medhal-21df9.firebaseapp.com",
  projectId: "medhal-21df9",
  storageBucket: "medhal-21df9.firebasestorage.app",
  messagingSenderId: "821409726912",
  appId: "1:821409726912:web:1ee5bbf1f06505cb130825",
  measurementId: "G-DB324PDYNR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
```

### 2. Firebase Hosting Config (`firebase.json`)
- Public directory: `build`
- SPA routing: All routes redirect to `index.html`
- Cache optimization for static assets
- Proper headers for images and JS/CSS files

### 3. Project Config (`.firebaserc`)
- Default project: medhal-21df9

---

## Map Integration Fixed

### Interactive Map Now Displays Inside Website

The map component has been completely rewritten to:

✅ **Display embedded inside the website** (not external links)
✅ **Use Material-UI icons** instead of keyboard emojis
✅ **Professional markers** with custom styling
✅ **Responsive design** for all screen sizes
✅ **Fallback to OpenStreetMap iframe** if Leaflet fails to load

### Map Features:
- **City Center Marker**: LocationCityIcon (brown)
- **Place Markers**: LocationOnIcon (dark blue)
- **User Location**: MyLocationIcon (green)
- **Interactive Popups**: Click markers for details
- **Directions Links**: Direct Google Maps integration
- **Distance Calculation**: Shows distance from user location

### Technical Implementation:
```javascript
- Leaflet.js for interactive maps
- OpenStreetMap tiles (free, no API key needed)
- Material-UI icons rendered as SVG
- Custom marker styling with CSS
- Responsive container (430px height)
- RTL support for Arabic
```

---

## No Keyboard Icons Anywhere

All keyboard emojis have been replaced with Material-UI icons:

### Home Page:
- 🏛️ → `<AccountBalanceIcon />`
- 🌍 → `<PublicIcon />`
- 🏨 → `<HotelIcon />`

### Archaeological Places Page:
- 🗺️ → `<MapIcon />`
- 🏛️ → `<AccountBalanceIcon />`
- 🏨 → `<HotelIcon />`
- 🍽️ → `<RestaurantIcon />`
- 🎢 → `<AttractionsIcon />`
- 🧭 → `<LocalHospitalIcon />`
- 📍 → `<LocationOnIcon />`
- 🏙️ → `<LocationCityIcon />`
- 🧍 → `<MyLocationIcon />`

### Service Icons:
- Hospital → `<LocalHospitalIcon />`
- Fuel Station → `<LocalGasStationIcon />`
- Mall → `<ShoppingCartIcon />`
- Restroom → `<WcIcon />`

### Map Markers:
- City Center → `<LocationCityIcon />`
- Places → `<LocationOnIcon />`
- User Location → `<MyLocationIcon />`

---

## Post-Deployment

### Your Live URLs:
- **Main Site**: https://medhal-21df9.web.app
- **Alternative**: https://medhal-21df9.firebaseapp.com

### Verify Deployment:
1. Visit your live URL
2. Test all pages (Home, Destinations, About, Contact, Login, SignUp)
3. Test language switching (Arabic/English)
4. Test interactive map functionality
5. Test forms (Login, SignUp, Contact)
6. Test on mobile devices

---

## Continuous Deployment

### Update Your Site:
```bash
# 1. Make changes to your code
# 2. Build the project
npm run build

# 3. Deploy to Firebase
firebase deploy
```

### View Deployment History:
```bash
firebase hosting:channel:list
```

### Rollback if Needed:
Go to Firebase Console → Hosting → Release History → Rollback

---

## Firebase Console Access

Access your project dashboard:
https://console.firebase.google.com/project/medhal-21df9

From here you can:
- View hosting analytics
- Monitor performance
- Check deployment history
- Configure custom domain
- Set up SSL certificate (automatic)

---

## Custom Domain (Optional)

To use your own domain:

1. Go to Firebase Console → Hosting
2. Click "Add custom domain"
3. Follow the DNS configuration steps
4. Firebase provides free SSL certificate

---

## Performance Optimization

Your build includes:
- Code splitting
- Minification
- Tree shaking
- Image optimization
- Cache headers
- Gzip compression

---

## Troubleshooting

### Build Fails:
```bash
# Clear cache and rebuild
rm -rf node_modules build
npm install
npm run build
```

### Deployment Fails:
```bash
# Re-login to Firebase
firebase logout
firebase login
firebase deploy
```

### Map Not Loading:
- Check browser console for errors
- Verify internet connection
- Fallback iframe will load automatically

---

## Support

For Firebase issues:
- Documentation: https://firebase.google.com/docs/hosting
- Support: https://firebase.google.com/support

For project issues:
- Check browser console
- Review error messages
- Test in incognito mode
