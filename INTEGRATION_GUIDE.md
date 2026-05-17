# دليل دمج واستخدام البيانات ثنائية اللغة

## المقدمة
هذا الدليل يشرح كيفية دمج البيانات ثنائية اللغة الجديدة مع مشروع React التطبيق الحالي.

---

## 1. البنية الأساسية للبيانات

### الوصول إلى البيانات من أي مكون

```javascript
import citiesData from '../data/citiesData';

// الوصول إلى مدينة معينة
const qassimData = citiesData['Al Qassim'];

// الوصول إلى المعلومات باللغة العربية
const arabicName = qassimData.ar.name; // "القصيم"

// الوصول إلى المعلومات باللغة الإنجليزية
const englishName = qassimData.en.name; // "Al Qassim"
```

---

## 2. استخدام البيانات مع نظام تعدد اللغات (i18n)

### المثال الأول: عرض معلومات المدينة

```javascript
import { useTranslation } from 'react-i18next';
import citiesData from '../data/citiesData';

function CityHeader({ cityKey }) {
  const { i18n } = useTranslation();
  const city = citiesData[cityKey];
  
  // الحصول على كائن اللغة المناسب
  const langObj = city[i18n.language];
  
  return (
    <div>
      <h1>{langObj.name}</h1>
      <p>{langObj.description}</p>
    </div>
  );
}

export default CityHeader;
```

### المثال الثاني: عرض المعالم السياحية

```javascript
import { useTranslation } from 'react-i18next';
import citiesData from '../data/citiesData';

function AttractionsList({ cityKey }) {
  const { i18n } = useTranslation();
  const city = citiesData[cityKey];
  const lang = i18n.language;
  
  return (
    <div className="attractions">
      {city.attractions.items.map((item, index) => (
        <div key={index} className="attraction-card">
          <img 
            src={city.attractions.images[index]} 
            alt={item[lang].title}
          />
          <h3>{item[lang].title}</h3>
          <p>{item[lang].description}</p>
        </div>
      ))}
    </div>
  );
}

export default AttractionsList;
```

### المثال الثالث: عرض الفنادق

```javascript
function HotelsList({ cityKey }) {
  const { i18n } = useTranslation();
  const city = citiesData[cityKey];
  const lang = i18n.language;
  
  return (
    <div className="hotels-container">
      {city.hotels.map((hotel, index) => (
        <div key={index} className="hotel-card">
          <img src={hotel.image} alt={hotel[lang].name} />
          <h3>{hotel[lang].name}</h3>
          <p>{hotel[lang].description}</p>
          <p className="address">🏠 {hotel[lang].address}</p>
          <p className="phone">📱 {hotel.phone}</p>
          <p className="rating">⭐ {hotel.rating}</p>
          {hotel.booking && <button>احجز الآن / Book Now</button>}
        </div>
      ))}
    </div>
  );
}
```

### المثال الرابع: عرض المطاعم والمقاهي

```javascript
function RestaurantsList({ cityKey }) {
  const { i18n } = useTranslation();
  const city = citiesData[cityKey];
  const lang = i18n.language;
  
  return (
    <div className="restaurants-container">
      {city.restaurants.map((restaurant, index) => (
        <div key={index} className="restaurant-card">
          <img src={restaurant.image} alt={restaurant[lang].name} />
          <h3>{restaurant[lang].name}</h3>
          <p>{restaurant[lang].description}</p>
          <p className="address">📍 {restaurant[lang].address}</p>
          <p className="cuisine">🍽️ {restaurant[lang].cuisine}</p>
          <p className="hours">🕐 {restaurant.hours}</p>
          <p className="phone">📞 {restaurant.phone}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 3. البحث والتصفية

### البحث عن مدينة

```javascript
function SearchCities(searchTerm, language) {
  const lang = language === 'ar' ? 'ar' : 'en';
  const results = [];
  
  Object.entries(citiesData).forEach(([key, city]) => {
    if (city[lang].name.includes(searchTerm) || 
        city[lang].description.includes(searchTerm)) {
      results.push({ key, ...city });
    }
  });
  
  return results;
}

// الاستخدام
const arabicResults = SearchCities('قصيم', 'ar');
const englishResults = SearchCities('qassim', 'en');
```

### البحث عن فندق معين

```javascript
function SearchHotels(cityKey, hotelName, language) {
  const city = citiesData[cityKey];
  const lang = language === 'ar' ? 'ar' : 'en';
  
  return city.hotels.find(hotel => 
    hotel[lang].name === hotelName
  );
}
```

### تصفية المطاعم حسب النوع

```javascript
function FilterRestaurantsByCuisine(cityKey, cuisineType, language) {
  const city = citiesData[cityKey];
  const lang = language === 'ar' ? 'ar' : 'en';
  
  return city.restaurants.filter(restaurant => 
    restaurant[lang].cuisine === cuisineType
  );
}

// الاستخدام
const seafoodRestaurants = FilterRestaurantsByCuisine(
  'Tabuk', 
  'Seafood', 
  'en'
);
```

---

## 4. مثال متقدم: مكون كامل

```javascript
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import citiesData from '../data/citiesData';

function AtharCityPage({ cityKey }) {
  const { i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('attractions');
  const city = citiesData[cityKey];
  const lang = i18n.language;
  
  const renderContent = () => {
    switch(activeTab) {
      case 'attractions':
        return (
          <div className="attractions-section">
            <h2>{lang === 'ar' ? 'المعالم السياحية' : 'Attractions'}</h2>
            <div className="attractions-grid">
              {city.attractions.items.map((item, idx) => (
                <div key={idx} className="attraction">
                  <img src={city.attractions.images[idx]} alt={item[lang].title} />
                  <h3>{item[lang].title}</h3>
                  <p>{item[lang].description}</p>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'hotels':
        return (
          <div className="hotels-section">
            <h2>{lang === 'ar' ? 'الفنادق' : 'Hotels'}</h2>
            <div className="hotels-grid">
              {city.hotels.map((hotel, idx) => (
                <div key={idx} className="hotel">
                  <img src={hotel.image} alt={hotel[lang].name} />
                  <h3>{hotel[lang].name}</h3>
                  <p>{hotel[lang].description}</p>
                  <div className="hotel-info">
                    <p>📍 {hotel[lang].address}</p>
                    <p>⭐ {hotel.rating}</p>
                    <p>📱 {hotel.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      case 'restaurants':
        return (
          <div className="restaurants-section">
            <h2>{lang === 'ar' ? 'المطاعم والمقاهي' : 'Restaurants'}</h2>
            <div className="restaurants-grid">
              {city.restaurants.map((restaurant, idx) => (
                <div key={idx} className="restaurant">
                  <img src={restaurant.image} alt={restaurant[lang].name} />
                  <h3>{restaurant[lang].name}</h3>
                  <p>{restaurant[lang].description}</p>
                  <div className="restaurant-info">
                    <p>🍽️ {restaurant[lang].cuisine}</p>
                    <p>🕐 {restaurant.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <div className={`city-page ${lang}`}>
      <header className="city-header">
        <img src={city.mainImage} alt={city[lang].name} />
        <h1>{city[lang].name}</h1>
        <p>{city[lang].description}</p>
      </header>
      
      <nav className="tabs">
        <button 
          onClick={() => setActiveTab('attractions')}
          className={activeTab === 'attractions' ? 'active' : ''}
        >
          {lang === 'ar' ? 'المعالم' : 'Attractions'}
        </button>
        <button 
          onClick={() => setActiveTab('hotels')}
          className={activeTab === 'hotels' ? 'active' : ''}
        >
          {lang === 'ar' ? 'الفنادق' : 'Hotels'}
        </button>
        <button 
          onClick={() => setActiveTab('restaurants')}
          className={activeTab === 'restaurants' ? 'active' : ''}
        >
          {lang === 'ar' ? 'المطاعم' : 'Restaurants'}
        </button>
      </nav>
      
      <main className="content">
        {renderContent()}
      </main>
    </div>
  );
}

export default AtharCityPage;
```

---

## 5. توافقية مع الكود الموجود

### العمل مع البيانات القديمة

إذا كان لديك كود يستخدم البيانات القديمة:

```javascript
// الكود القديم
const titleText = citiesData['Al Qassim'].attractions.titles[0];

// يمكن تحويله إلى
const newTitleText = citiesData['Al Qassim'].attractions.items[0].ar.title;
```

### مثال الترجمة التلقائية

```javascript
// وظيفة مساعدة للتوافقية
function getAttractionTitle(cityKey, index, language = 'ar') {
  const city = citiesData[cityKey];
  return city.attractions.items[index][language].title;
}

function getHotelName(cityKey, hotelIndex, language = 'ar') {
  const city = citiesData[cityKey];
  return city.hotels[hotelIndex][language].name;
}
```

---

## 6. التعامل مع العناصر الاختيارية

### التحقق من وجود الترفيه

```javascript
function EntertainmentList({ cityKey }) {
  const { i18n } = useTranslation();
  const city = citiesData[cityKey];
  const lang = i18n.language;
  
  if (!city.entertainment || city.entertainment.length === 0) {
    return <p>{lang === 'ar' ? 'لا توجد مراكز ترفيه' : 'No entertainment'}</p>;
  }
  
  return (
    <div>
      {city.entertainment.map((item, idx) => (
        <div key={idx}>
          <h3>{item[lang].name}</h3>
          <p>{item[lang].description}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 7. أفضل الممارسات

### 1. استخدام المتغيرات للغة
```javascript
const lang = i18n.language === 'ar' ? 'ar' : 'en';
const data = city[lang];
```

### 2. عدم تكرار الكود
```javascript
// ❌ تجنب هذا
const arabicName = city.ar.name;
const arabicDesc = city.ar.description;
const englishName = city.en.name;
const englishDesc = city.en.description;

// ✅ بدلاً من ذلك
const lang = i18n.language;
const data = city[lang];
const name = data.name;
const desc = data.description;
```

### 3. استخدام ثوابت للمفاتيح
```javascript
const CITIES = {
  QASSIM: 'Al Qassim',
  JOUF: 'Al Jouf',
  TABUK: 'Tabuk',
  WADI_DAWSAR: 'Wadi Dawsar'
};

// بدلاً من
const city = citiesData['Al Qassim'];

// استخدم
const city = citiesData[CITIES.QASSIM];
```

---

## 8. معالجة الأخطاء

```javascript
function SafeCityAccess(cityKey, language = 'ar') {
  // التحقق من وجود المدينة
  if (!citiesData[cityKey]) {
    console.error(`City not found: ${cityKey}`);
    return null;
  }
  
  const city = citiesData[cityKey];
  
  // التحقق من لغة صحيحة
  const lang = language === 'ar' ? 'ar' : 'en';
  
  // التحقق من وجود الحقول
  if (!city[lang]) {
    console.error(`Language not supported: ${lang}`);
    return null;
  }
  
  return city[lang];
}
```

---

## 9. أمثلة العرض (Display Examples)

### عرض جدول بيانات

```javascript
function HotelsTable({ cityKey }) {
  const { i18n } = useTranslation();
  const city = citiesData[cityKey];
  const lang = i18n.language;
  
  return (
    <table>
      <thead>
        <tr>
          <th>{lang === 'ar' ? 'الاسم' : 'Name'}</th>
          <th>{lang === 'ar' ? 'الوصف' : 'Description'}</th>
          <th>{lang === 'ar' ? 'التقييم' : 'Rating'}</th>
        </tr>
      </thead>
      <tbody>
        {city.hotels.map((hotel, idx) => (
          <tr key={idx}>
            <td>{hotel[lang].name}</td>
            <td>{hotel[lang].description}</td>
            <td>{hotel.rating}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

---

## 10. الخلاصة

| الموضوع | التفاصيل |
|--------|----------|
| **الملف الرئيسي** | `src/data/citiesData.js` |
| **عدد المدن** | 4 مدن |
| **عدد المعالم** | 30 معلم |
| **عدد الفنادق** | 10 فنادق |
| **عدد المطاعم** | 23 مطعم ومقهى |
| **اللغات المدعومة** | العربية والإنجليزية |
| **البنية** | ثنائي اللغة مع أسلوب موحد |

---

## موارد إضافية
- [ملف البيانات الرئيسي](./src/data/citiesData.js)
- [وثيقة الهيكل](./DATA_STRUCTURE_DOCUMENTATION.md)
- [ملخص الترجمات](./TRANSLATIONS_SUMMARY.md)
- [دليل i18next](https://www.i18next.com/)
