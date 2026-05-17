# وثيقة هيكل البيانات المحسّن ثنائي اللغة

## نظرة عامة
تم تحسين هيكل البيانات في `citiesData.js` ليصبح نموذج ثنائي اللغة شامل يدعم العربية والإنجليزية مع الحفاظ على جميع البيانات الأصلية.

## البنية الجديدة للمدن

### 1. معلومات المدينة الأساسية (City Information)

```javascript
{
  ar: {
    name: 'اسم المدينة بالعربية',
    description: 'وصف المدينة بالعربية'
  },
  en: {
    name: 'City Name in English',
    description: 'City description in English'
  },
  mainImage: require('../images/path/image.jpeg'),
  // باقي البيانات...
}
```

### 2. المعالم السياحية (Attractions)

**البنية القديمة:**
```javascript
attractions: {
  images: [array of images],
  titles: [array of titles],
  descriptions: [array of descriptions]
}
```

**البنية الجديدة:**
```javascript
attractions: {
  images: [array of images],
  items: [
    {
      ar: {
        title: 'اسم المعلم بالعربية',
        description: 'وصف المعلم بالعربية'
      },
      en: {
        title: 'Attraction Name in English',
        description: 'Attraction description in English'
      }
    }
  ]
}
```

### 3. الفنادق (Hotels)

**البنية القديمة:**
```javascript
{
  name: 'فندق الاسم',
  image: require('../images/path/image.jpg'),
  description: 'الوصف',
  address: 'العنوان',
  phone: 'الرقم',
  rating: 'التقييم',
  booking: true
}
```

**البنية الجديدة:**
```javascript
{
  ar: {
    name: 'اسم الفندق بالعربية',
    description: 'وصف الفندق بالعربية',
    address: 'العنوان بالعربية'
  },
  en: {
    name: 'Hotel Name in English',
    description: 'Hotel description in English',
    address: 'Address in English'
  },
  image: require('../images/path/image.jpg'),
  phone: 'الرقم',
  rating: 'التقييم',
  booking: true
}
```

### 4. المطاعم والمقاهي (Restaurants & Cafes)

**البنية القديمة:**
```javascript
{
  name: 'مطعم الاسم',
  image: require('../images/path/image.jpg'),
  description: 'الوصف',
  address: 'العنوان',
  phone: 'الرقم',
  cuisine: 'نوع المأكولات',
  hours: 'ساعات العمل'
}
```

**البنية الجديدة:**
```javascript
{
  ar: {
    name: 'اسم المطعم بالعربية',
    description: 'الوصف بالعربية',
    address: 'العنوان بالعربية',
    cuisine: 'نوع المأكولات بالعربية'
  },
  en: {
    name: 'Restaurant Name in English',
    description: 'Description in English',
    address: 'Address in English',
    cuisine: 'Cuisine Type in English'
  },
  image: require('../images/path/image.jpg'),
  phone: 'الرقم',
  hours: 'ساعات العمل'
}
```

### 5. مراكز الترفيه (Entertainment)

```javascript
{
  ar: {
    name: 'اسم المركز بالعربية',
    description: 'الوصف بالعربية',
    address: 'العنوان بالعربية',
    type: 'نوع الترفيه بالعربية'
  },
  en: {
    name: 'Entertainment Center Name in English',
    description: 'Description in English',
    address: 'Address in English',
    type: 'Entertainment Type in English'
  },
  image: require('../images/path/image.jpg'),
  phone: 'الرقم',
  hours: 'ساعات العمل'
}
```

## المدن والمعالم المتضمنة

### 1. القصيم (Al Qassim)
- **المعالم:**
  - شعيب الأدغم / Shuaib Al-Adem
  - قصيباء / Qasibaa
  - النقوش والرسوم الصخرية / Rock Inscriptions
  - درب زبيدة / Darb Zubaidah
  - طريق البصرة-مكة / Basra-Mecca Route
  - رامة ورامتان / Ramah and Ramatan
  - الكتل الحجرية / Stone Blocks
  - الرسوم الصخرية القديمة / Ancient Rock Drawings
  - مرقب عنيزة / Marqab Aneiza

- **الفنادق:** 3 فنادق
  - موفنبيك / Movenpick
  - جولدن توليب / Golden Tulip
  - جلنار / Jeenar

- **المطاعم:** 7 مطاعم ومقاهي

### 2. الجوف (Al Jouf)
- **المعالم:**
  - دومة الجندل / Dumat Al-Jandal
  - قلعة زعبل / Zabel Fort
  - قلعة ذات الحاج / Dhat Al-Haj Fort
  - محطة بئر بن هرماس / Bir Ibn Harmas Station
  - أعمدة الرجاجيل / Al-Rajajil Pillars
  - بئر سيسرا / Sisra Well

- **الفنادق:** 2 فندق
  - دومة الجندل / Dumat Al-Jandal
  - سكاكا الدولي / Sakaka International

- **المطاعم:** 2 مطعم

### 3. تبوك (Tabuk)
- **المعالم:**
  - الرسوم الصخرية في أبا العجل / Rock Drawings at Aba Al-Ajal
  - قلعة تبوك / Tabuk Fort
  - محطة وادي الأخضر / Wadi Al-Akhdar Station
  - محطة حديد الحجاز / Hejaz Railway Station
  - قلعة المعظم / Al-Muazzam Fort
  - القرية الأثرية / Ancient Village
  - الموقع الأثري شمال شرق / Northeast Archaeological Site
  - الآثار التاريخية / Historical Monuments
  - بئر هداج / Hadaj Well
  - قصر تيماء / Tayma Palace

- **الفنادق:** 2 فندق
  - هيلتون / Hilton
  - سويس انترناشيونال / Swiss International

- **المطاعم:** 3 مطاعم

### 4. وادي الدواسر (Wadi Dawsar)
- **المعالم:**
  - قصر الملك عبدالعزيز / King Abdulaziz Palace
  - متحف وادي الدواسر / Wadi Dawsar Museum
  - قصر بهجة / Bahjah Palace
  - الرسوم الصخرية / Rock Drawings
  - سوق الخميس / Thursday Market

- **الفنادق:** 3 فنادق
  - أورينتال باريس / Oriental Paris
  - بودل / Boudl
  - أرجان بارك / Arjan Park

- **الترفيه:** 2 مركز
  - مدينة ملاهي الواحة / Al-Waha Amusement Park
  - حديقة النخيل / Palm Garden

- **المطاعم:** 11 مطعم ومقهى

## نقاط مهمة

### 1. الحفاظ على البيانات الأصلية
✓ جميع البيانات العربية الأصلية محفوظة كما هي
✓ لم يتم حذف أي معلومات سابقة
✓ الصور والروابط محفوظة بالكامل

### 2. الترجمات الاحترافية
✓ ترجمات دقيقة وسياقية
✓ أسماء الأماكن مترجمة بشكل صحيح
✓ المعلومات السياحية مترجمة بوضوح

### 3. سهولة الاستخدام في الواجهة الأمامية
```javascript
// للحصول على اسم المدينة بالعربية
citiesData['Al Qassim'].ar.name // "القصيم"

// للحصول على اسم المعلم بالإنجليزية
citiesData['Al Qassim'].attractions.items[0].en.title 
// "Shuaib Al-Adem"

// للحصول على اسم الفندق ووصفه بالعربية
citiesData['Al Qassim'].hotels[0].ar.name // "فندق موفنبيك القصيم"
citiesData['Al Qassim'].hotels[0].ar.description
```

### 4. المرونة والتوسع
- يمكن بسهولة إضافة مدن جديدة بنفس النمط
- يمكن إضافة معالم سياحية جديدة
- يمكن إضافة فنادق ومطاعم إضافية

## الترجمات الرئيسية

### أسماء الفنادق والمطاعم
| العربية | الإنجليزية |
|---------|-----------|
| فندق موفنبيك القصيم | Movenpick Hotel Al Qassim |
| مطعم ومقهى السدة | Al Sidah Restaurant & Cafe |
| فندق دومة الجندل | Dumat Al-Jandal Hotel |
| مطعم الجوف التقليدي | Al Jouf Traditional Restaurant |
| فندق هيلتون تبوك | Hilton Tabuk Hotel |
| فندق أورينتال باريس | Oriental Paris Hotel |

### أنواع المأكولات
| العربية | الإنجليزية |
|---------|-----------|
| مأكولات سعودية | Saudi Cuisine |
| نجدي | Najdi |
| متنوع | Diverse |
| شعبي | Traditional |
| مقهى مختص | Specialty Cafe |
| مأكولات بحرية | Seafood |
| عالمي | International |

### أنواع الترفيه
| العربية | الإنجليزية |
|---------|-----------|
| ملاهي | Amusement Park |
| حديقة | Garden |
| مقهى ومطعم | Cafe & Restaurant |
| فروسية | Equestrian |

## التكامل مع النظام الحالي

### مع نظام تعدد اللغات (i18n)
البيانات مصممة للعمل بسلاسة مع أنظمة `react-i18next` أو ما شابهها:

```javascript
const language = i18n.language; // 'ar' أو 'en'
const cityName = citiesData['Al Qassim'][language].name;
const hotelName = citiesData['Al Qassim'].hotels[0][language].name;
```

### مع المكونات الحالية
تم الحفاظ على جميع الحقول الإضافية (رقم الهاتف، التقييم، ساعات العمل) لضمان عدم تعطل المكونات الحالية.

## ملاحظات للمطورين

1. **البحث والتصفية:** استخدم حقول `ar.name` و`en.name` للبحث عن الأماكن
2. **العرض المشروط:** استخدم اللغة المحفوظة في الحالة للبيئة لاختيار النص المناسب
3. **التوسع المستقبلي:** يمكن إضافة حقول إضافية (مثل الإحداثيات الجيوغرافية) بسهولة

## الملفات المعدلة
- `src/data/citiesData.js` - تم تحديثه بالكامل بالبنية الجديدة

## الملفات المكملة
- `DATA_STRUCTURE_DOCUMENTATION.md` - هذه الوثيقة
