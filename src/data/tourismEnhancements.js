const tourismEnhancements = {
  'Al Qassim': {
    coords: { lat: 26.3592, lng: 43.9818 },
    publicServices: [
      {
        icon: '🏥',
        ar: { name: 'مستشفى بريدة المركزي', description: 'خدمة طبية طارئة وأساسية للزوار والسكان.', address: 'بريدة - منطقة القصيم', type: 'مستشفى', hours: '٢٤ ساعة', phone: '٩٣٧' },
        en: { name: 'Buraidah Central Hospital', description: 'Emergency and essential medical services for visitors and residents.', address: 'Buraidah - Al Qassim', type: 'Hospital', hours: '24 Hours', phone: '937' },
        coords: { lat: 26.3337, lng: 43.9710 }
      },
      {
        icon: '⛽',
        ar: { name: 'محطة وقود قريبة', description: 'محطة مناسبة للتزود بالوقود وخدمات الطريق.', address: 'بريدة - طريق الملك عبدالعزيز', type: 'محطة وقود', hours: '٢٤ ساعة', phone: 'غير متوفر' },
        en: { name: 'Nearby Fuel Station', description: 'Fuel and roadside services for travelers.', address: 'Buraidah - King Abdulaziz Road', type: 'Fuel Station', hours: '24 Hours', phone: 'Not available' },
        coords: { lat: 26.3472, lng: 43.9626 }
      },
      {
        icon: '🛒',
        ar: { name: 'النخيل مول', description: 'مركز تسوق يضم مطاعم ومتاجر وخدمات متعددة.', address: 'بريدة - حي المنتزه', type: 'مركز تجاري', hours: '١٠:٠٠ - ٢٣:٠٠', phone: 'غير متوفر' },
        en: { name: 'Al Nakheel Mall', description: 'Shopping center with restaurants, stores, and visitor services.', address: 'Buraidah - Al Muntazah', type: 'Mall', hours: '10:00 - 23:00', phone: 'Not available' },
        coords: { lat: 26.3772, lng: 43.9634 }
      },
      {
        icon: '🚻',
        ar: { name: 'مرافق عامة وحدائق', description: 'مرافق عامة ودورات مياه ومناطق استراحة مناسبة للعائلات.', address: 'بريدة - الحدائق العامة', type: 'مرافق عامة', hours: '٠٨:٠٠ - ٢٣:٠٠', phone: 'غير متوفر' },
        en: { name: 'Public Facilities and Parks', description: 'Public restrooms and resting areas suitable for families.', address: 'Buraidah - Public Parks', type: 'Public Facilities', hours: '08:00 - 23:00', phone: 'Not available' },
        coords: { lat: 26.3620, lng: 43.9810 }
      }
    ]
  },
  'Al Jouf': {
    coords: { lat: 29.9697, lng: 40.2064 },
    publicServices: [
      {
        icon: '🏥',
        ar: { name: 'مستشفى الأمير متعب بن عبدالعزيز', description: 'خدمات صحية وطوارئ في مدينة سكاكا.', address: 'سكاكا - الجوف', type: 'مستشفى', hours: '٢٤ ساعة', phone: '٩٣٧' },
        en: { name: 'Prince Mutaib bin Abdulaziz Hospital', description: 'Healthcare and emergency services in Sakaka.', address: 'Sakaka - Al Jouf', type: 'Hospital', hours: '24 Hours', phone: '937' },
        coords: { lat: 29.9601, lng: 40.1997 }
      },
      {
        icon: '⛽',
        ar: { name: 'محطة وقود سكاكا', description: 'خدمات وقود واستراحة للمسافرين.', address: 'سكاكا - طريق الملك خالد', type: 'محطة وقود', hours: '٢٤ ساعة', phone: 'غير متوفر' },
        en: { name: 'Sakaka Fuel Station', description: 'Fuel and rest services for travelers.', address: 'Sakaka - King Khalid Road', type: 'Fuel Station', hours: '24 Hours', phone: 'Not available' },
        coords: { lat: 29.9788, lng: 40.2078 }
      },
      {
        icon: '🛒',
        ar: { name: 'الجوف بلازا', description: 'مركز تجاري مناسب للتسوق والمطاعم والخدمات.', address: 'سكاكا - الجوف', type: 'مركز تجاري', hours: '١٠:٠٠ - ٢٣:٠٠', phone: 'غير متوفر' },
        en: { name: 'Al Jouf Plaza', description: 'Shopping, restaurants, and visitor services.', address: 'Sakaka - Al Jouf', type: 'Mall', hours: '10:00 - 23:00', phone: 'Not available' },
        coords: { lat: 29.9752, lng: 40.2086 }
      },
      {
        icon: '🚻',
        ar: { name: 'حديقة ومرافق عامة', description: 'مساحات عامة للاستراحة ودورات مياه وخدمات للعائلات.', address: 'سكاكا - المناطق العامة', type: 'مرافق عامة', hours: '٠٨:٠٠ - ٢٣:٠٠', phone: 'غير متوفر' },
        en: { name: 'Park and Public Facilities', description: 'Resting areas, restrooms, and family services.', address: 'Sakaka - Public Areas', type: 'Public Facilities', hours: '08:00 - 23:00', phone: 'Not available' },
        coords: { lat: 29.9683, lng: 40.2044 }
      }
    ]
  },
  Tabuk: {
    coords: { lat: 28.3838, lng: 36.5662 },
    publicServices: [
      {
        icon: '🏥',
        ar: { name: 'مستشفى الملك فهد التخصصي', description: 'خدمات طبية وطوارئ للزوار في تبوك.', address: 'تبوك - طريق الملك خالد', type: 'مستشفى', hours: '٢٤ ساعة', phone: '٩٣٧' },
        en: { name: 'King Fahad Specialist Hospital', description: 'Medical and emergency services for visitors in Tabuk.', address: 'Tabuk - King Khalid Road', type: 'Hospital', hours: '24 Hours', phone: '937' },
        coords: { lat: 28.3892, lng: 36.5813 }
      },
      {
        icon: '⛽',
        ar: { name: 'محطة وقود طريق الأمير سلطان', description: 'خدمات وقود وتموين للمسافرين داخل المدينة.', address: 'تبوك - طريق الأمير سلطان', type: 'محطة وقود', hours: '٢٤ ساعة', phone: 'غير متوفر' },
        en: { name: 'Prince Sultan Road Fuel Station', description: 'Fuel and supplies for travelers inside the city.', address: 'Tabuk - Prince Sultan Road', type: 'Fuel Station', hours: '24 Hours', phone: 'Not available' },
        coords: { lat: 28.3805, lng: 36.5681 }
      },
      {
        icon: '🛒',
        ar: { name: 'تبوك بارك', description: 'مركز تسوق وترفيه يضم مطاعم ومتاجر.', address: 'تبوك', type: 'مركز تجاري', hours: '١٠:٠٠ - ٢٣:٠٠', phone: 'غير متوفر' },
        en: { name: 'Tabuk Park', description: 'Shopping and entertainment center with restaurants and stores.', address: 'Tabuk', type: 'Mall', hours: '10:00 - 23:00', phone: 'Not available' },
        coords: { lat: 28.3973, lng: 36.5617 }
      },
      {
        icon: '🚻',
        ar: { name: 'مرافق عامة للزوار', description: 'مناطق استراحة ودورات مياه قريبة من المواقع العامة.', address: 'تبوك - المنتزهات العامة', type: 'مرافق عامة', hours: '٠٨:٠٠ - ٢٣:٠٠', phone: 'غير متوفر' },
        en: { name: 'Visitor Public Facilities', description: 'Resting areas and public restrooms near public locations.', address: 'Tabuk - Public Parks', type: 'Public Facilities', hours: '08:00 - 23:00', phone: 'Not available' },
        coords: { lat: 28.3860, lng: 36.5720 }
      }
    ]
  },
  'Wadi Dawsar': {
    coords: { lat: 20.4607, lng: 44.8339 },
    publicServices: [
      {
        icon: '🏥',
        ar: { name: 'مستشفى وادي الدواسر العام', description: 'خدمات صحية وطوارئ للزوار والسكان.', address: 'وادي الدواسر', type: 'مستشفى', hours: '٢٤ ساعة', phone: '٩٣٧' },
        en: { name: 'Wadi Al Dawasir General Hospital', description: 'Healthcare and emergency services for visitors and residents.', address: 'Wadi Al Dawasir', type: 'Hospital', hours: '24 Hours', phone: '937' },
        coords: { lat: 20.4617, lng: 44.8361 }
      },
      {
        icon: '⛽',
        ar: { name: 'محطة وقود طريق الملك عبدالعزيز', description: 'خدمات وقود واستراحة للمسافرين.', address: 'وادي الدواسر - طريق الملك عبدالعزيز', type: 'محطة وقود', hours: '٢٤ ساعة', phone: 'غير متوفر' },
        en: { name: 'King Abdulaziz Road Fuel Station', description: 'Fuel and rest services for travelers.', address: 'Wadi Al Dawasir - King Abdulaziz Road', type: 'Fuel Station', hours: '24 Hours', phone: 'Not available' },
        coords: { lat: 20.4623, lng: 44.8289 }
      },
      {
        icon: '🛒',
        ar: { name: 'الخماسين مول', description: 'مركز تسوق وخدمات ومطاعم.', address: 'الخماسين - وادي الدواسر', type: 'مركز تجاري', hours: '١٠:٠٠ - ٢٣:٠٠', phone: 'غير متوفر' },
        en: { name: 'Khamaseen Mall', description: 'Shopping center with services and restaurants.', address: 'Khamaseen - Wadi Al Dawasir', type: 'Mall', hours: '10:00 - 23:00', phone: 'Not available' },
        coords: { lat: 20.4636, lng: 44.8221 }
      },
      {
        icon: '🚻',
        ar: { name: 'مرافق عامة واستراحات', description: 'خدمات عامة ودورات مياه ومناطق استراحة للعائلات.', address: 'وادي الدواسر - المناطق العامة', type: 'مرافق عامة', hours: '٠٨:٠٠ - ٢٣:٠٠', phone: 'غير متوفر' },
        en: { name: 'Public Facilities and Rest Areas', description: 'Public services, restrooms, and family rest areas.', address: 'Wadi Al Dawasir - Public Areas', type: 'Public Facilities', hours: '08:00 - 23:00', phone: 'Not available' },
        coords: { lat: 20.4592, lng: 44.8344 }
      }
    ]
  }
};

export default tourismEnhancements;
