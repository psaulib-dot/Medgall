const citiesData = {
  'Al Qassim': {
    ar: {
      name: 'القصيم',
      description: 'منطقة القصيم الغنية بالآثار والمعالم السياحية',
    },
    en: {
      name: 'Al Qassim',
      description: 'A region rich in archaeological sites and tourist attractions',
    },
    mainImage: require('../images/القصيم/m.jpeg'),
    attractions: {
      images: [
        require('../images/القصيم/1.jpg'),
        require('../images/القصيم/2.jpg'),
        require('../images/القصيم/3.jpg'),
        require('../images/القصيم/4.jpg'),
        require('../images/القصيم/5.jpg'),
        require('../images/القصيم/6.jpg'),
        require('../images/القصيم/7.jpg'),
        require('../images/القصيم/8.jpg'),
        require('../images/القصيم/9.jpg'),
      ],
      items: [
        {
          ar: {
            title: 'شعيب الأدغم',
            description: 'يقع شعيب الأدغم شرق منطقة القصيم ويُعد من أهم مواقع الاستيطان البشري القديم في المنطقة. يحتوي الموقع على أدوات حجرية تعود إلى العصور الحجرية المبكرة، ما يدل على أن المنطقة كانت مأهولة منذ آلاف السنين. كما يتميز بوجود مجاري مائية موسمية جذبت الإنسان القديم للاستقرار فيه، إضافةً إلى تضاريس صخرية وفرت حماية طبيعية. ويُعد الموقع شاهدًا مهمًا على تطور أنماط المعيشة والصيد وجمع الثمار في شمال الجزيرة العربية.',
          },
          en: {
            title: 'Shuaib Al-Adem',
            description: 'Located east of the Al Qassim region, Shuaib Al-Adem is one of the most important ancient human settlement sites in the area. The site contains stone tools dating back to the early Stone Ages, indicating that the region was inhabited thousands of years ago. It is characterized by seasonal watercourses that attracted ancient humans to settle there, in addition to rocky terrain that provided natural protection. The site is an important witness to the development of settlement patterns, hunting, and gathering in northern Arabia.',
          },
        },
        {
          ar: {
            title: 'قصيباء - موطن عنترة بن شداد',
            description: 'تمثل الكتابات والنقوش والرسوم الصخرية المنتشرة على جبال القصيم سجلاً تاريخيًا مهمًا يعود إلى عصور ما قبل الإسلام والعصور الإسلامية المبكرة. تتضمن نقوشًا بخطوط قديمة مثل الثمودي والنبطي، ورسومات لحيوانات ومشاهد صيد تعكس الحياة الاجتماعية والاقتصادية للسكان القدماء.',
          },
          en: {
            title: 'Qasibaa - Homeland of Antar Ibn Shaddad',
            description: 'The inscriptions and rock carvings scattered on the mountains of Al Qassim represent an important historical record dating back to the pre-Islamic and early Islamic periods. They include inscriptions in ancient scripts such as Thamudic and Nabataean, as well as drawings of animals and hunting scenes that reflect the social and economic life of ancient inhabitants.',
          },
        },
        {
          ar: {
            title: 'النقوش والرسوم الصخرية',
            description: 'يُعد درب زبيدة أحد أبرز طرق الحج والتجارة في التاريخ الإسلامي، وسُمّي نسبةً إلى زبيدة بنت جعفر زوجة الخليفة هارون الرشيد، التي أمرت بإنشاء برك مياه وآبار لخدمة الحجاج. يمتد الطريق من الكوفة إلى مكة المكرمة ويمر بعدة محطات في القصيم، ولا تزال بقايا المنشآت المائية شاهدة على عظمة التخطيط في العصر العباسي.',
          },
          en: {
            title: 'Rock Inscriptions and Drawings',
            description: 'Darb Zubaidah is one of the most prominent pilgrimage and trade routes in Islamic history, named after Zubaidah bint Ja\'far, wife of Caliph Harun al-Rashid, who ordered the construction of water reservoirs and wells to serve pilgrims. The route extends from Kufa to Mecca and passes through several stops in Al Qassim, with the remains of water facilities still bearing witness to the excellence of planning in the Abbasid era.',
          },
        },
        {
          ar: {
            title: 'درب زبيدة',
            description: 'يمتد طريق البصرة – مكة التاريخي عبر مناطق من القصيم، وكان من أهم الطرق التجارية والحجية في العصرين الأموي والعباسي. ساهم في تنشيط الحركة الاقتصادية ونقل البضائع والحجاج، وتنتشر على امتداده آثار آبار ومحطات استراحة قديمة.',
          },
          en: {
            title: 'Darb Zubaidah',
            description: 'The historic Basra-Mecca route extends through areas of Al Qassim and was one of the most important commercial and pilgrimage routes in the Umayyad and Abbasid periods. It contributed to stimulating economic activity and the transportation of goods and pilgrims, with traces of old wells and rest stations scattered along its length.',
          },
        },
        {
          ar: {
            title: 'طريق البصرة - مكة',
            description: 'ورد ذكر رامة ورامتان في الشعر الجاهلي والإسلامي، ويُعتقد أنهما موضعان جغرافيان في نجد بالقرب من القصيم. ارتبطت هذه المواقع بالقصص الشعرية والغزلية، وذكرتها قصائد عربية قديمة كمواطن ديار وتجمعات قبلية.',
          },
          en: {
            title: 'Basra-Mecca Route',
            description: 'Ramah and Ramatan are mentioned in pre-Islamic and Islamic poetry, and are believed to be geographic locations in Najd near Al Qassim. These sites are associated with poetic and romantic tales and are mentioned in ancient Arabic poems as dwelling places and tribal settlements.',
          },
        },
        {
          ar: {
            title: 'رامة ورامتان',
            description: 'توجد في منطقة القصيم كتل حجرية أثرية ضخمة يُعتقد أنها بقايا منشآت قديمة أو علامات حدودية تعود لعصور ما قبل الإسلام. تدل هذه الكتل على استخدام الحجارة في البناء والدفاع، وتشير إلى نشاط بشري مبكر في المنطقة.',
          },
          en: {
            title: 'Ramah and Ramatan',
            description: 'Large ancient stone blocks are found in the Al Qassim region, believed to be remains of ancient structures or boundary markers dating back to the pre-Islamic era. These blocks indicate the use of stone in construction and defense, and point to early human activity in the area.',
          },
        },
        {
          ar: {
            title: 'الكتل الحجرية الأثرية',
            description: 'تعكس الرسوم الصخرية القديمة في القصيم مشاهد من الحياة اليومية مثل الرعي والصيد والتنقل بالقوافل، إضافة إلى رموز وأشكال هندسية ذات دلالات ثقافية ودينية، ما يجعلها مصدرًا مهمًا لدراسة الفن والتاريخ في الجزيرة العربية.',
          },
          en: {
            title: 'Ancient Stone Blocks',
            description: 'The ancient rock drawings in Al Qassim reflect scenes from daily life such as herding and hunting and camel caravan travel, in addition to symbols and geometric shapes with cultural and religious significance, making them an important source for studying art and history in the Arabian Peninsula.',
          },
        },
        {
          ar: {
            title: 'الرسوم الصخرية القديمة',
            description: 'يقع مرقب عنيزة شمال شرق مدينة عنيزة، وكان يُستخدم قديمًا كنقطة مراقبة وتحذير لحماية المدينة من الغزوات. يتميز بارتفاعه الذي يوفر رؤية واسعة للمنطقة المحيطة، ويُعد من المعالم التاريخية البارزة في القصيم.',
          },
          en: {
            title: 'Ancient Rock Drawings',
            description: 'Marqab Aneiza is located northeast of the city of Aneiza and was used in ancient times as a watchtower and warning point to protect the city from raids. It is characterized by its height, which provides a wide view of the surrounding area, and is considered one of the prominent historical landmarks in Al Qassim.',
          },
        },
        {
          ar: {
            title: 'مرقب عنيزة',
            description: 'يُعد موقع العوسجة من المواقع الأثرية المهمة في القصيم، ويحتوي على بقايا استيطان بشري ونقوش صخرية تشير إلى مرور قوافل تجارية قديمة عبر المنطقة. ويُعتبر شاهدًا على أهمية القصيم كممر استراتيجي في طرق التجارة والحج القديمة.',
          },
          en: {
            title: 'Marqab Aneiza',
            description: 'The Al-Awsaja site is one of the important archaeological sites in Al Qassim, containing remains of human settlement and rock inscriptions indicating the passage of ancient trade caravans through the area. It is considered evidence of Al Qassim\'s importance as a strategic passage on ancient trade and pilgrimage routes.',
          },
        },
      ],
    },
    hotels: [
      {
        ar: {
          name: 'فندق موفنبيك القصيم',
          description: 'فندق 5 نجوم يقع في قلب بريدة، يتميز بموقعه المتميز وخدماته الفاخرة.',
          address: 'بريدة - طريق الملك عبدالعزيز',
        },
        en: {
          name: 'Movenpick Hotel Al Qassim',
          description: 'A 5-star hotel located in the heart of Buraydah, featuring a prime location and luxury services.',
          address: 'Buraydah - King Abdulaziz Road',
        },
        image: require('../images/القصيم/hotel1.jpg'),
        phone: '٠١٦٣٨١٩٩٩٩',
        rating: '٥ نجوم',
        booking: true,
      },
      {
        ar: {
          name: 'فندق جولدن توليب',
          description: 'فندق عصري يقدم إقامة مريحة مع مرافق متكاملة.',
          address: 'بريدة - طريق الملك فهد',
        },
        en: {
          name: 'Golden Tulip Hotel',
          description: 'A modern hotel offering comfortable accommodation with complete facilities.',
          address: 'Buraydah - King Fahd Road',
        },
        image: require('../images/القصيم/hotel2.jpg'),
        phone: '٠١٦٣٢٦٦٦٦٦',
        rating: '٤ نجوم',
        booking: true,
      },
      {
        ar: {
          name: 'فندق جلنار القصيم',
          description: 'فندق أنيق يوفر إقامة مريحة وخدمات راقية في منطقة القصيم.',
          address: 'بريدة - حي النهضة',
        },
        en: {
          name: 'Jeenar Al Qassim Hotel',
          description: 'An elegant hotel offering comfortable accommodation and premium services in the Al Qassim region.',
          address: 'Buraydah - Al-Nahda District',
        },
        image: require('../images/القصيم/h7.jpg'),
        phone: '٠١٦٣٧٧٧٧٧٧',
        rating: '٤ نجوم',
        booking: true,
      },
    ],
    restaurants: [
      {
        ar: {
          name: 'مطعم ومقهى السدة',
          description: 'مطعم سعودي تقليدي يقدم أشهى المأكولات الشعبية.',
          address: 'بريدة - حي الخليج',
          cuisine: 'مأكولات سعودية',
        },
        en: {
          name: 'Al Sidah Restaurant & Cafe',
          description: 'A traditional Saudi restaurant serving the finest popular cuisine.',
          address: 'Buraydah - Al Khaleej District',
          cuisine: 'Saudi Cuisine',
        },
        image: require('../images/القصيم/rest1.jpg'),
        phone: '٠١٦٣٨٣٣٣٣٣',
        hours: '١٠:٠٠ - ٢٣:٠٠',
      },
      {
        ar: {
          name: 'مطعم ديرتي',
          description: 'مأكولات نجدية أصيلة وقهوة عربية.',
          address: 'عنيزة - حليلة السليم',
          cuisine: 'نجدي',
        },
        en: {
          name: 'Dirty Restaurant',
          description: 'Authentic Najdi cuisine and Arabic coffee.',
          address: 'Aneiza - Halilat Al-Sulaim',
          cuisine: 'Najdi',
        },
        image: require('../images/القصيم/rest2.jpg'),
        phone: '٠١٦٣٦٥٥٥٥٥',
        hours: '٠٩:٣٠ - ٢٢:٣٠',
      },
      {
        ar: {
          name: 'مطعم فينور',
          description: 'مطعم يقدم أطباق متنوعة في أجواء عائلية راقية.',
          address: 'بريدة - طريق الملك فهد',
          cuisine: 'متنوع',
        },
        en: {
          name: 'Venoor Restaurant',
          description: 'A restaurant offering diverse dishes in an upscale family atmosphere.',
          address: 'Buraydah - King Fahd Road',
          cuisine: 'Diverse',
        },
        image: require('../images/القصيم/rest5.jpg'),
        phone: '٠١٦٣٦٦٦٦٦٦',
        hours: '١١:٠٠ - ٢٤:٠٠',
      },
      {
        ar: {
          name: 'الميار',
          description: 'مطعم يقدم المأكولات السعودية والعربية بنكهات مميزة.',
          address: 'القصيم',
          cuisine: 'سعودي',
        },
        en: {
          name: 'Al Mayar',
          description: 'A restaurant offering Saudi and Arab cuisine with distinctive flavors.',
          address: 'Al Qassim',
          cuisine: 'Saudi',
        },
        image: require('../images/القصيم/rest6.jpg'),
        phone: '٠١٦٣٦٧٧٧٧٧',
        hours: '١٢:٠٠ - ٢٣:٣٠',
      },
      {
        ar: {
          name: 'نخلا القصيم',
          description: 'مطعم ومقهى بطابع تراثي وسط أجواء النخيل الجميلة.',
          address: 'القصيم',
          cuisine: 'شعبي',
        },
        en: {
          name: 'Nakhla Al Qassim',
          description: 'A restaurant and cafe with a heritage theme surrounded by beautiful palm groves.',
          address: 'Al Qassim',
          cuisine: 'Traditional',
        },
        image: require('../images/القصيم/rest3.jpg'),
        phone: '٠١٦٣٦٨٨٨٨٨',
        hours: '١ٰ:٠٠ - ٢١:٠٠',
      },
      {
        ar: {
          name: 'عسيب القصيم',
          description: 'مقهى مختص يقدم القهوة المختصة في أجواء مميزة.',
          address: 'القصيم',
          cuisine: 'مقهى مختص',
        },
        en: {
          name: 'Aseeb Al Qassim',
          description: 'A specialty cafe offering specialty coffee in a unique atmosphere.',
          address: 'Al Qassim',
          cuisine: 'Specialty Cafe',
        },
        image: require('../images/القصيم/rest4.jpg'),
        phone: '٠١٦٣٦٩٩٩٩٩',
        hours: '٠٧:٠٠ - ٢٢:٠٠',
      },
      {
        ar: {
          name: 'مزرعة للنخيل',
          description: 'مزرعة تحتوي على مقهى مختص وجلسات خارجية وسط النخيل.',
          address: 'القصيم - خارج المدينة',
          cuisine: 'مقهى ومزرعة',
        },
        en: {
          name: 'Palm Farm',
          description: 'A farm featuring a specialty cafe and outdoor seating surrounded by palm trees.',
          address: 'Al Qassim - Outside the City',
          cuisine: 'Cafe & Farm',
        },
        image: require('../images/القصيم/rest7.jpg'),
        phone: '٠١٦٣٧١١١١١',
        hours: '٠٩:٠٠ - ٢١:٠٠',
      },
    ],
  },
  'Al Jouf': {
    ar: {
      name: 'الجوف',
      description: 'منطقة الجوف الغنية بالآثار النبطية والإسلامية',
    },
    en: {
      name: 'Al Jouf',
      description: 'A region rich in Nabataean and Islamic archaeological sites',
    },
    mainImage: require('../images/الجوف/m.jpeg'),
    attractions: {
      images: [
        require('../images/الجوف/1.jpg'),
        require('../images/الجوف/2.jpg'),
        require('../images/الجوف/3.jpg'),
        require('../images/الجوف/4.jpg'),
        require('../images/الجوف/5.jpg'),
        require('../images/الجوف/6.jpg'),
      ],
      items: [
        {
          ar: {
            title: 'دومة الجندل',
            description: 'تُعد دومة الجندل من أقدم المدن في شمال الجزيرة العربية، ويعود تاريخها إلى القرن العاشر قبل الميلاد، حيث كانت عاصمة لمملكة أدوماتو العربية القديمة. ذُكرت في النصوص الآشورية، وكانت مركزًا تجاريًا مهمًا لوقوعها على طرق القوافل بين الجزيرة العربية وبلاد الشام والعراق. كما شهدت أحداثًا مهمة في صدر الإسلام، وتضم اليوم عددًا من المعالم التاريخية البارزة.',
          },
          en: {
            title: 'Dumat Al-Jandal',
            description: 'Dumat Al-Jandal is one of the oldest cities in northern Arabia, dating back to the 10th century BC, when it was the capital of the ancient Arab kingdom of Dumat. It is mentioned in Assyrian texts and was an important trading center due to its location on caravan routes between Arabia, the Levant, and Iraq. It also witnessed important events in early Islam and today contains several prominent historical landmarks.',
          },
        },
        {
          ar: {
            title: 'قلعة زعبل',
            description: 'تقع قلعة زعبل على قمة جبل شمال مدينة سكاكا، وتُعد من أبرز المعالم التاريخية في منطقة الجوف. بُنيت من الحجر والطين خلال القرنين السابع عشر والثامن عشر الميلاديين، وكانت تستخدم لأغراض دفاعية ومراقبة المدينة. تتميز بموقعها المرتفع الذي يتيح رؤية بانورامية واسعة للمنطقة المحيطة.',
          },
          en: {
            title: 'Zabel Fort',
            description: 'Zabel Fort is located on a mountain summit north of Sakaka city and is one of the most prominent historical landmarks in the Al Jouf region. It was built from stone and mud during the 17th and 18th centuries AD and was used for defensive purposes and city surveillance. It is characterized by its elevated location, which provides a wide panoramic view of the surrounding area.',
          },
        },
        {
          ar: {
            title: 'قلعة ذات الحاج',
            description: 'تُعتبر قلعة ذات الحاج إحدى محطات طريق الحج الشامي التاريخي الذي كان يربط بلاد الشام بمكة المكرمة. أُنشئت خلال العهد العثماني لخدمة الحجاج، وتضم بقايا أسوار وبرك مياه وآبار كانت تُستخدم لتوفير الماء والمؤن للقوافل المارة عبر الصحراء.',
          },
          en: {
            title: 'Dhat Al-Haj Fort',
            description: 'Dhat Al-Haj Fort is considered one of the stations on the historic Levantine Hajj route that connected the Levant to Mecca. It was built during the Ottoman period to serve pilgrims and contains remains of walls, water reservoirs, and wells that were used to provide water and supplies to caravans passing through the desert.',
          },
        },
        {
          ar: {
            title: 'محطة بئر بن هرماس',
            description: 'محطة بئر بن هرماس تُعد إحدى محطات سكة حديد الحجاز التي أُنشئت في العهد العثماني أوائل القرن العشرين لربط دمشق بالمدينة المنورة. لعبت دورًا مهمًا في نقل الحجاج والبضائع، ولا تزال بقايا المحطة شاهدة على الأهمية التاريخية للخط الحديدي في المنطقة.',
          },
          en: {
            title: 'Bir Ibn Harmas Station',
            description: 'Bir Ibn Harmas Station is one of the Hejaz Railway stations established during the early Ottoman 20th century to connect Damascus to Medina. It played an important role in transporting pilgrims and goods, and the remains of the station still bear witness to the historical importance of the railway line in the region.',
          },
        },
        {
          ar: {
            title: 'أعمدة الرجاجيل',
            description: 'أعمدة الرجاجيل موقع أثري فريد يتكون من نحو خمسين مجموعة من الأعمدة الحجرية المنتصبة، ويعود تاريخها إلى الألفية الرابعة قبل الميلاد. يُعتقد أنها استُخدمت لأغراض دينية أو فلكية، وتُعد من أقدم المواقع الأثرية في المملكة، مما يدل على وجود حضارة مبكرة في منطقة الجوف.',
          },
          en: {
            title: 'Al-Rajajil Pillars',
            description: 'Al-Rajajil Pillars is a unique archaeological site consisting of about fifty groups of standing stone pillars dating back to the 4th millennium BC. They are believed to have been used for religious or astronomical purposes and are among the oldest archaeological sites in the Kingdom, indicating the presence of an early civilization in the Al Jouf region.',
          },
        },
        {
          ar: {
            title: 'بئر سيسرا',
            description: 'بئر سيسرا بئر أثري منحوت في الصخر يعود إلى الفترة النبطية في القرن الأول الميلادي، ويتميز بعمقه وتصميمه الهندسي المتقن الذي يهدف إلى جمع مياه الأمطار وتخزينها. يُعد شاهدًا على مهارة الأنباط في إدارة الموارد المائية في البيئات الصحراوية.',
          },
          en: {
            title: 'Sisra Well',
            description: 'Sisra Well is an ancient well carved into rock dating back to the Nabataean period in the 1st century AD, characterized by its depth and sophisticated engineering design aimed at collecting and storing rainwater. It is a testament to the Nabataeans\' skill in managing water resources in desert environments.',
          },
        },
      ],
    },
    hotels: [
      {
        ar: {
          name: 'فندق دومة الجندل',
          description: 'فندق مميز بالقرب من المواقع الأثرية.',
          address: 'دومة الجندل - طريق الملك فيصل',
        },
        en: {
          name: 'Dumat Al-Jandal Hotel',
          description: 'A distinctive hotel near archaeological sites.',
          address: 'Dumat Al-Jandal - King Faisal Road',
        },
        image: require('../images/الجوف/hotel1.jpg'),
        phone: '٠١٤٦٢٢٢٢٢٢',
        rating: '٤ نجوم',
        booking: true,
      },
      {
        ar: {
          name: 'فندق سكاكا الدولي',
          description: 'فندق عصري مع خدمات متكاملة.',
          address: 'سكاكا - حي الجامعة',
        },
        en: {
          name: 'Sakaka International Hotel',
          description: 'A modern hotel with complete services.',
          address: 'Sakaka - University District',
        },
        image: require('../images/الجوف/hotel2.jpg'),
        phone: '٠١٤٦٢٤٤٤٤٤',
        rating: '٤ نجوم',
        booking: true,
      },
    ],
    restaurants: [
      {
        ar: {
          name: 'مطعم الجوف التقليدي',
          description: 'مأكولات شعبية من منطقة الجوف.',
          address: 'سكاكا - حي الخالدية',
          cuisine: 'شعبي',
        },
        en: {
          name: 'Al Jouf Traditional Restaurant',
          description: 'Popular cuisine from the Al Jouf region.',
          address: 'Sakaka - Al-Khalidiyah District',
          cuisine: 'Traditional',
        },
        image: require('../images/الجوف/rest1.jpg'),
        phone: '٠١٤٦٢٥٥٥٥٥',
        hours: '١٠:٠٠ - ٢٢:٠٠',
      },
      {
        ar: {
          name: 'مطعم واحة الجوف',
          description: 'مطعم عائلي يقدم مأكولات متنوعة.',
          address: 'دومة الجندل - وسط المدينة',
          cuisine: 'متنوع',
        },
        en: {
          name: 'Al Jouf Oasis Restaurant',
          description: 'A family restaurant serving diverse cuisine.',
          address: 'Dumat Al-Jandal - City Center',
          cuisine: 'Diverse',
        },
        image: require('../images/الجوف/rest2.jpg'),
        phone: '٠١٤٦٢٦٦٦٦٦',
        hours: '١١:٠٠ - ٢٣:٠٠',
      },
    ],
  },
  'Tabuk': {
    ar: {
      name: 'تبوك',
      description: 'منطقة تبوك غنية بالآثار الإسلامية والنبطية',
    },
    en: {
      name: 'Tabuk',
      description: 'A region rich in Islamic and Nabataean archaeological sites',
    },
    mainImage: require('../images/القصيم/main.jpeg'),
    attractions: {
      images: [
        require('../images/تبوك/1.jpg'),
        require('../images/تبوك/2.jpg'),
        require('../images/تبوك/3.jpg'),
        require('../images/تبوك/4.jpg'),
        require('../images/تبوك/5.jpg'),
        require('../images/تبوك/6.jpg'),
        require('../images/تبوك/7.jpg'),
        require('../images/تبوك/8.jpg'),
        require('../images/تبوك/9.jpg'),
        require('../images/تبوك/10.jpg'),
      ],
      items: [
        {
          ar: {
            title: 'الرسوم الصخرية في أبا العجل',
            description: 'تُعد الرسوم الصخرية في موقع أبا العجل بجبال اللوز من أهم الشواهد الأثرية في منطقة تبوك، حيث تحتوي على نقوش ورسومات لحيوانات مثل الإبل والوعول تعود إلى عصور ما قبل التاريخ. تعكس هذه الرسوم أساليب الحياة القديمة وأنشطة الصيد والرعي، كما تدل على قدم الاستيطان البشري في شمال غرب الجزيرة العربية.',
          },
          en: {
            title: 'Rock Drawings at Aba Al-Ajal',
            description: 'The rock drawings at the Aba Al-Ajal site in the Al-Louz mountains are among the most important archaeological evidence in the Tabuk region, containing inscriptions and drawings of animals such as camels and gazelles dating back to prehistoric times. These drawings reflect ancient lifestyles and hunting and herding activities, and indicate the early human settlement in northwestern Arabia.',
          },
        },
        {
          ar: {
            title: 'قلعة تبوك',
            description: 'تقع قلعة تبوك في قلب المدينة، وتُعد من أبرز المعالم التاريخية في المنطقة. يعود تاريخ بنائها إلى العصر العثماني في القرن السادس عشر الميلادي، وشهدت إعادة ترميمات لاحقة. ارتبطت القلعة بطريق الحج الشامي، كما تُذكر في أحداث غزوة تبوك في صدر الإسلام، مما يمنحها أهمية دينية وتاريخية كبيرة.',
          },
          en: {
            title: 'Tabuk Fort',
            description: 'Tabuk Fort is located in the heart of the city and is one of the most prominent historical landmarks in the region. Its construction dates back to the Ottoman era in the 16th century AD and has undergone subsequent restoration. The fort is associated with the Levantine Hajj route and is mentioned in the events of the Expedition of Tabuk in early Islam, giving it great religious and historical significance.',
          },
        },
        {
          ar: {
            title: 'محطة وادي الأخضر',
            description: 'تقع محطة وادي الأخضر على ضفاف الوادي الذي يحمل الاسم نفسه، وقد أُنشئت عام 1325هـ ضمن مشروع سكة حديد الحجاز. كانت المحطة تُستخدم لتزويد القطارات بالمياه وخدمة الحجاج والمسافرين، ولا تزال بقايا مبانيها شاهدة على الدور الحيوي الذي لعبته في تلك الفترة.',
          },
          en: {
            title: 'Wadi Al-Akhdar Station',
            description: 'Wadi Al-Akhdar Station is located on the banks of the valley bearing the same name and was established in 1325 AH as part of the Hejaz Railway project. The station was used to supply water to trains and serve pilgrims and travelers, and the remains of its buildings still bear witness to the vital role it played during that period.',
          },
        },
        {
          ar: {
            title: 'محطة خط حديد الحجاز',
            description: 'تُعد محطة خط حديد الحجاز في تبوك إحدى المحطات الرئيسية التي افتُتحت عام 1906م ضمن المشروع العثماني لربط دمشق بالمدينة المنورة. لعبت دورًا مهمًا في تسهيل رحلة الحج ونقل البضائع، وتضم مباني حجرية ومستودعات وقاطرات قديمة تُبرز الطابع المعماري لتلك الحقبة.',
          },
          en: {
            title: 'Hejaz Railway Station',
            description: 'The Hejaz Railway Station in Tabuk is one of the main stations opened in 1906 as part of the Ottoman project to connect Damascus to Medina. It played an important role in facilitating the pilgrimage journey and transporting goods, and contains stone buildings, warehouses, and old locomotives highlighting the architectural style of that era.',
          },
        },
        {
          ar: {
            title: 'قلعة المعظم',
            description: 'تقع قلعة المعظم جنوب شرق تبوك، وهي من القلاع العثمانية التي بُنيت لحماية قوافل الحجاج على طريق الحج الشامي. تضم القلعة بركة المعظم الشهيرة التي كانت تُستخدم لتجميع مياه الأمطار، ما يعكس أهمية إدارة الموارد المائية في البيئات الصحراوية.',
          },
          en: {
            title: 'Al-Muazzam Fort',
            description: 'Al-Muazzam Fort is located southeast of Tabuk and is one of the Ottoman forts built to protect pilgrimage caravans on the Levantine Hajj route. The fort contains the famous Al-Muazzam reservoir, which was used to collect rainwater, reflecting the importance of water resource management in desert environments.',
          },
        },
        {
          ar: {
            title: 'القرية الأثرية',
            description: 'القرية الأثرية في منطقة تبوك تعود إلى مطلع الألف الأول قبل الميلاد، وتحتوي على بقايا مبانٍ سكنية ومنشآت حجرية تدل على وجود مجتمع منظم ومستقر. تشير الاكتشافات الأثرية إلى نشاط تجاري وزراعي في المنطقة خلال تلك الفترات المبكرة.',
          },
          en: {
            title: 'Ancient Village',
            description: 'The ancient village in the Tabuk region dates back to the beginning of the 1st millennium BC and contains remains of residential buildings and stone structures indicating the presence of an organized and settled community. Archaeological discoveries point to commercial and agricultural activity in the region during those early periods.',
          },
        },
        {
          ar: {
            title: 'الموقع الأثري شمال شرق تبوك',
            description: 'يتميز الموقع الأثري شمال شرق تبوك بوجود وحدات معمارية حجرية وبرك مياه ومنحوتات صخرية، ما يدل على كونه محطة استيطان مهمة على طرق التجارة القديمة. تعكس هذه المعالم تطور أساليب البناء والاستقرار في شمال غرب المملكة.',
          },
          en: {
            title: 'Archaeological Site Northeast of Tabuk',
            description: 'The archaeological site northeast of Tabuk is characterized by the presence of stone architectural units, water reservoirs, and rock carvings, indicating that it was an important settlement station on ancient trade routes. These features reflect the development of construction methods and settlement in northwestern Saudi Arabia.',
          },
        },
        {
          ar: {
            title: 'الآثار التاريخية',
            description: 'تزخر منطقة تبوك بالآثار التاريخية المتنوعة التي تمتد من عصور ما قبل التاريخ مرورًا بالفترات النبطية والرومانية والإسلامية. تشمل هذه الآثار نقوشًا صخرية، قلاعًا، آبارًا قديمة، ومحطات حج، مما يجعل المنطقة متحفًا مفتوحًا يعكس تاريخًا حضاريًا غنيًا.',
          },
          en: {
            title: 'Historical Monuments',
            description: 'The Tabuk region is rich in diverse historical monuments spanning from prehistoric times through the Nabataean, Roman, and Islamic periods. These monuments include rock inscriptions, forts, ancient wells, and pilgrimage stations, making the region an open museum reflecting a rich civilizational history.',
          },
        },
        {
          ar: {
            title: 'بئر هداج',
            description: 'يُعد بئر هداج في تيماء من أشهر الآبار التاريخية في الجزيرة العربية، ويعود تاريخه إلى آلاف السنين قبل الميلاد. يتميز بضخامته وقطره الواسع، وكان مصدرًا رئيسيًا للمياه لسكان تيماء والقوافل التجارية، مما جعله عنصرًا أساسيًا في ازدهار المنطقة قديمًا.',
          },
          en: {
            title: 'Hadaj Well',
            description: 'Hadaj Well in Tayma is one of the most famous historical wells in Arabia, dating back thousands of years BC. It is characterized by its size and wide diameter and was a primary source of water for Tayma residents and trade caravans, making it an essential element in the region\'s ancient prosperity.',
          },
        },
        {
          ar: {
            title: 'قصر تيماء الأثري',
            description: 'يُعتبر قصر تيماء الأثري من أبرز المعالم التاريخية في المنطقة، ويعود تاريخه إلى فترات ما قبل الميلاد، مع شواهد أثرية من العصور النبطية والبابلية. يحتوي الموقع على نقوش وكتابات قديمة وأسوار حجرية، ويعكس أهمية تيماء كمركز حضاري وتجاري على طرق القوافل القديمة.',
          },
          en: {
            title: 'Tayma Ancient Palace',
            description: 'Tayma Ancient Palace is considered one of the most prominent historical landmarks in the region, dating back to pre-Christian periods with archaeological evidence from Nabataean and Babylonian eras. The site contains ancient inscriptions and writings and stone walls, reflecting the importance of Tayma as a cultural and commercial center on ancient caravan routes.',
          },
        },
      ],
    },
    hotels: [
      {
        ar: {
          name: 'فندق هيلتون تبوك',
          description: 'فندق 5 نجوم مع إطلالات رائعة على المدينة.',
          address: 'تبوك - طريق الملك عبدالله',
        },
        en: {
          name: 'Hilton Tabuk Hotel',
          description: 'A 5-star hotel with beautiful views of the city.',
          address: 'Tabuk - King Abdullah Road',
        },
        image: require('../images/تبوك/hotel1.jpg'),
        phone: '٠١٤٤٢٢٢٢٢٢',
        rating: '٥ نجوم',
        booking: true,
      },
      {
        ar: {
          name: 'فندق سويس انترناشيونال',
          description: 'فندق حديث مع مرافق متكاملة.',
          address: 'تبوك - حي المهرجان',
        },
        en: {
          name: 'Swiss International Hotel',
          description: 'A modern hotel with complete facilities.',
          address: 'Tabuk - Al-Mahrajah District',
        },
        image: require('../images/تبوك/hotel2.jpg'),
        phone: '٠١٤٤٢٣٣٣٣٣',
        rating: '٤ نجوم',
        booking: true,
      },
    ],
    restaurants: [
      {
        ar: {
          name: 'مطعم تبوك التراثي',
          description: 'مأكولات تقليدية من شمال المملكة.',
          address: 'تبوك - حي العزيزية',
          cuisine: 'شمالي',
        },
        en: {
          name: 'Tabuk Heritage Restaurant',
          description: 'Traditional cuisine from northern Saudi Arabia.',
          address: 'Tabuk - Al-Aziziyah District',
          cuisine: 'Northern',
        },
        image: require('../images/تبوك/rest1.jpg'),
        phone: '٠١٤٤٢٥٥٥٥٥',
        hours: '١١:٣٠ - ٢٣:٣٠',
      },
      {
        ar: {
          name: 'مطعم الواحة',
          description: 'مطعم متخصص في المأكولات البحرية.',
          address: 'تبوك - طريق الملك خالد',
          cuisine: 'مأكولات بحرية',
        },
        en: {
          name: 'Al-Waha Restaurant',
          description: 'A restaurant specializing in seafood.',
          address: 'Tabuk - King Khaled Road',
          cuisine: 'Seafood',
        },
        image: require('../images/تبوك/rest2.jpg'),
        phone: '٠١٤٤٢٦٦٦٦٦',
        hours: '١٢:٠٠ - ٢٤:٠٠',
      },
      {
        ar: {
          name: 'مطعم واحة تيماء',
          description: 'مطعم عائلي يقدم المأكولات العربية.',
          address: 'تيماء - وسط البلد',
          cuisine: 'عربي',
        },
        en: {
          name: 'Tayma Oasis Restaurant',
          description: 'A family restaurant serving Arab cuisine.',
          address: 'Tayma - City Center',
          cuisine: 'Arabic',
        },
        image: require('../images/تبوك/rest3.jpg'),
        phone: '٠١٤٤٣٥٥٥٥٥',
        hours: '١٠:٠٠ - ٢٢:٠٠',
      },
    ],
  },
  'Wadi Dawsar': {
    ar: {
      name: 'وادي الدواسر',
      description: 'محافظة وادي الدواسر الغنية بالآثار والتراث',
    },
    en: {
      name: 'Wadi Dawsar',
      description: 'A governorate rich in archaeological sites and heritage',
    },
    mainImage: require('../images/وادي_الدواسر/main.jpeg'),
    attractions: {
      images: [
        require('../images/وادي_الدواسر/1.jpg'),
        require('../images/وادي_الدواسر/2.jpg'),
        require('../images/وادي_الدواسر/3.jpg'),
        require('../images/وادي_الدواسر/4.jpg'),
        require('../images/وادي_الدواسر/5.jpg'),
      ],
      items: [
        {
          ar: {
            title: 'قصر الملك عبدالعزيز',
            description: 'قصر الملك عبدالعزيز التاريخي في محافظة وادي الدواسر بُني عام 1355هـ تقريباً، ويعد من أهم المباني الحكومية القديمة في المنطقة. استخدمه الملك عبدالعزيز – رحمه الله – مقراً للإدارة والحكم أثناء زياراته للمنطقة بعد توحيد المملكة. يتميز القصر بطرازه النجدي التقليدي المبني من الطين واللبن، ويحتوي على ساحات داخلية وغرف استقبال ومجالس للضيوف، ويُعد اليوم معلماً سياحياً وتاريخياً بارزاً يجذب الزوار والمهتمين بالتاريخ السعودي.',
          },
          en: {
            title: 'King Abdulaziz Palace',
            description: 'The historic King Abdulaziz Palace in Wadi Dawsar Governorate was built around 1355 AH and is one of the most important ancient government buildings in the region. King Abdulaziz - may God have mercy on him - used it as a seat of administration and governance during his visits to the region after the unification of the Kingdom. The palace is characterized by its traditional Najdi style built from mud and bricks, containing inner courtyards, reception rooms, and guest halls, and is today a prominent tourism and historical landmark attracting visitors and those interested in Saudi history.',
          },
        },
        {
          ar: {
            title: 'متحف وادي الدواسر',
            description: 'متحف وادي الدواسر من أبرز المعالم الثقافية في المحافظة، حيث يضم مجموعة كبيرة من المقتنيات التراثية التي توثق حياة سكان المنطقة قديماً، مثل أدوات الزراعة التقليدية وأدوات إعداد القهوة العربية والأسلحة القديمة والملابس الشعبية. يعرض المتحف أيضاً نماذج للحياة البدوية والريفية ويعطي الزائر تصوراً كاملاً عن طبيعة المعيشة في وادي الدواسر قبل ظهور الحياة الحديثة.',
          },
          en: {
            title: 'Wadi Dawsar Museum',
            description: 'Wadi Dawsar Museum is one of the most prominent cultural landmarks in the governorate, housing a large collection of heritage artifacts that document the life of the region\'s inhabitants in ancient times, such as traditional agricultural tools, Arabic coffee preparation tools, ancient weapons, and folk clothing. The museum also displays models of Bedouin and rural life and gives visitors a complete picture of the nature of life in Wadi Dawsar before the advent of modern life.',
          },
        },
        {
          ar: {
            title: 'قصر بهجة',
            description: 'قصر بهجة الأثري يعد من المباني الطينية القديمة في وادي الدواسر ويعود تاريخه إلى أكثر من مئة عام. يتميز القصر بتصميمه المعماري النجدي الجنوبي، حيث الأبراج الدفاعية وفتحات التهوية والنوافذ الصغيرة التي كانت تساعد على تلطيف الجو داخل المبنى في الصيف. كان القصر يستخدم سكناً ومقراً للحماية والمراقبة، ويعد مثالاً واضحاً على العمارة التقليدية في جنوب نجد.',
          },
          en: {
            title: 'Bahjah Palace',
            description: 'Bahjah Ancient Palace is one of the old mud buildings in Wadi Dawsar dating back over a hundred years. The palace is characterized by its southern Najdi architectural design, featuring defensive towers, ventilation openings, and small windows that helped cool the building\'s interior in summer. The palace was used as a residence and a center for protection and surveillance, and is a clear example of traditional architecture in southern Najd.',
          },
        },
        {
          ar: {
            title: 'الرسوم الصخرية في جبل القارة',
            description: 'الرسوم الصخرية في جبال وادي الدواسر من أهم الشواهد الأثرية على وجود الإنسان القديم في المنطقة، حيث تحتوي الصخور على نقوش ورسومات لحيوانات مثل الجمال والوعول وأشكال بشرية تعود لآلاف السنين. هذه النقوش تدل على أن المنطقة كانت ممراً للقوافل التجارية ومكاناً للاستقرار البشري منذ عصور ما قبل الإسلام.',
          },
          en: {
            title: 'Rock Drawings at Qara Mountain',
            description: 'The rock drawings in the mountains of Wadi Dawsar are among the most important archaeological evidence of the presence of ancient humans in the region, as the rocks contain inscriptions and drawings of animals such as camels and gazelles and human figures dating back thousands of years. These inscriptions indicate that the region was a passage for trade caravans and a place of human settlement since pre-Islamic times.',
          },
        },
        {
          ar: {
            title: 'سوق الخميس التقليدي',
            description: 'سوق الخميس الشعبي في وادي الدواسر من أقدم الأسواق التقليدية في المحافظة، ويقام أسبوعياً منذ عقود طويلة. يجتمع فيه الأهالي لبيع وشراء المنتجات المحلية مثل التمور والسمن والعسل والحبوب والأدوات اليدوية. كما يشكل السوق مكاناً اجتماعياً مهماً لأهالي المنطقة، حيث يحافظ على العادات والتقاليد القديمة ويعكس روح الحياة التراثية في المجتمع المحلي.',
          },
          en: {
            title: 'Traditional Thursday Market',
            description: 'The popular Thursday Market in Wadi Dawsar is one of the oldest traditional markets in the governorate, held weekly for decades. Locals gather here to buy and sell local products such as dates, ghee, honey, grains, and hand tools. The market is also an important social gathering place for the region\'s residents, preserving old customs and traditions and reflecting the spirit of heritage life in the local community.',
          },
        },
      ],
    },
    hotels: [
      {
        ar: {
          name: 'فندق أورينتال باريس',
          description: 'فندق أنيق يوفر إقامة مريحة وخدمات راقية في وادي الدواسر.',
          address: 'وادي الدواسر - طريق الملك عبدالعزيز',
        },
        en: {
          name: 'Oriental Paris Hotel',
          description: 'An elegant hotel offering comfortable accommodation and premium services in Wadi Dawsar.',
          address: 'Wadi Dawsar - King Abdulaziz Road',
        },
        image: require('../images/وادي_الدواسر/oriental.jpg'),
        phone: '٠١٧٧٨٨٨٨٨٨',
        rating: '٤ نجوم',
        booking: true,
      },
      {
        ar: {
          name: 'فندق بودل',
          description: 'فندق عصري يتميز بغرف واسعة وخدمات فندقية متكاملة.',
          address: 'وادي الدواسر - حي الخالدية',
        },
        en: {
          name: 'Boudl Hotel',
          description: 'A modern hotel featuring spacious rooms and complete hotel services.',
          address: 'Wadi Dawsar - Al-Khalidiyah District',
        },
        image: require('../images/وادي_الدواسر/boudl.jpg'),
        phone: '٠١٧٧٨٩٩٩٩٩',
        rating: '٤ نجوم',
        booking: true,
      },
      {
        ar: {
          name: 'فندق أرجان بارك',
          description: 'فندق هادئ مناسب للعائلات مع مرافق متكاملة.',
          address: 'وادي الدواسر - طريق الملك فهد',
        },
        en: {
          name: 'Arjan Park Hotel',
          description: 'A quiet hotel suitable for families with complete facilities.',
          address: 'Wadi Dawsar - King Fahd Road',
        },
        image: require('../images/وادي_الدواسر/arjan.jpg'),
        phone: '٠١٧٧٨٢٢٢٢٢',
        rating: '٣ نجوم',
        booking: true,
      },
    ],
    entertainment: [
      {
        ar: {
          name: 'أكاديمية ويلا للفروسية',
          description: 'أكاديمية تضم كافيه ومطعم وتوفر تدريب الفروسية في أجواء ريفية مميزة ومناسبة للعائلات.',
          address: 'الخماسين - وادي الدواسر',
          type: 'فروسية',
        },
        en: {
          name: 'Wella Equestrian Academy',
          description: 'An equestrian academy with a cafe and restaurant offering horseback riding lessons in a distinctive rural family-friendly atmosphere.',
          address: 'Al-Khmaseen - Wadi Dawsar',
          type: 'Equestrian',
        },
        image: require('../images/وادي_الدواسر/rest15.jpg'),
        phone: '٠٥٦٢٢٢٢٢٢٢',
        hours: '٠٩:٠٠ - ١٨:٠٠',
      },
      {
        ar: {
          name: 'وناسة ومرح للترفية',
          description: 'أكبر صالة ترفيهية في وادي الدواسر والسليل، مكان ممتاز للعائلات والأطفال.',
          address: 'وادي الدواسر',
          type: 'صالة ترفيه',
        },
        en: {
          name: 'Wanasa wa Marah Entertainment',
          description: 'The largest entertainment center in Wadi Dawsar and Al-Selalah, an excellent place for families and children.',
          address: 'Wadi Dawsar',
          type: 'Entertainment Hall',
        },
        image: require('../images/وادي_الدواسر/inter.jpeg'),
        phone: '٠٥٣٨٢٩٠٤٦٠',
        hours: '٠٩:٠٠ - ٢٣:٠٠',
      },
    ],
    restaurants: [
      {
        ar: {
          name: 'مطعم شوزان',
          description: 'مطعم يقدم تشكيلة متنوعة من الأطباق العربية والعالمية.',
          address: 'وادي الدواسر - وسط البلد',
          cuisine: 'عالمي',
        },
        en: {
          name: 'Shoozan Restaurant',
          description: 'A restaurant offering a diverse selection of Arab and international dishes.',
          address: 'Wadi Dawsar - City Center',
          cuisine: 'International',
        },
        image: require('../images/وادي_الدواسر/new1.jpeg'),
        phone: '٠١٧٧٨٣٤٥٦٧',
        hours: '١١:٠٠ - ٢٣:٣٠',
      },
      {
        ar: {
          name: 'مطعم سافران',
          description: 'مطعم راقٍ يقدم أطباق مميزة في أجواء عائلية هادئة.',
          address: 'وادي الدواسر - حي الفيصلية',
          cuisine: 'متنوع',
        },
        en: {
          name: 'Saffron Restaurant',
          description: 'An upscale restaurant serving distinctive dishes in a quiet family atmosphere.',
          address: 'Wadi Dawsar - Al-Faisaliyah District',
          cuisine: 'Diverse',
        },
        image: require('../images/وادي_الدواسر/new2.jpeg'),
        phone: '٠١٧٧٨٤٥٦٧٨',
        hours: '١٢:ٰ٠ - ٢٣:٠٠',
      },
      {
        ar: {
          name: 'تسيتي فود وادي الدواسر',
          description: 'مطعم يقدم وجبات سريعة وأطباق متنوعة تناسب جميع الأذواق.',
          address: 'وادي الدواسر',
          cuisine: 'وجبات سريعة',
        },
        en: {
          name: 'Tasty Food Wadi Dawsar',
          description: 'A restaurant offering fast food and diverse dishes suitable for all tastes.',
          address: 'Wadi Dawsar',
          cuisine: 'Fast Food',
        },
        image: require('../images/وادي_الدواسر/rest3.jpg'),
        phone: '٠٥٥١١١١١١١',
      },
      {
        ar: {
          name: 'لمة مشاوي وادي الدواسر',
          description: 'مطعم متخصص في المشويات والأطباق الشعبية.',
          address: 'وادي الدواسر',
          cuisine: 'مشاوي',
        },
        en: {
          name: 'Lumma Grilled Wadi Dawsar',
          description: 'A restaurant specializing in grilled meat and popular dishes.',
          address: 'Wadi Dawsar',
          cuisine: 'Grilled',
        },
        image: require('../images/وادي_الدواسر/rest6.jpg'),
        phone: '٠٥٥٤٤٤٤٤٤٤',
      },
      {
        ar: {
          name: 'كوجا مطعم برجر',
          description: 'مطعم برجر يقدم خيارات متنوعة بنكهات مميزة.',
          address: 'وادي الدواسر',
          cuisine: 'برجر',
        },
        en: {
          name: 'Koja Burger Restaurant',
          description: 'A burger restaurant offering diverse options with distinctive flavors.',
          address: 'Wadi Dawsar',
          cuisine: 'Burger',
        },
        image: require('../images/وادي_الدواسر/rest7.jpg'),
        phone: '٠٥٥٥٥٥٥٥٥٥',
      },
      {
        ar: {
          name: 'بيت المدورة',
          description: 'مطعم يقدم فطور صباحي متنوع وطازج.',
          address: 'وادي الدواسر',
          cuisine: 'فطور صباحي',
        },
        en: {
          name: 'Bait Al-Madora',
          description: 'A restaurant serving diverse and fresh breakfast.',
          address: 'Wadi Dawsar',
          cuisine: 'Breakfast',
        },
        image: require('../images/وادي_الدواسر/rest8.jpg'),
        phone: '٠٥٥٦٦٦٦٦٦٦',
      },
      {
        ar: {
          name: 'كوفي ثري كبز',
          description: 'كافيه يقدم القهوة المختصة والمشروبات الساخنة.',
          address: 'الخماسين - وادي الدواسر',
          cuisine: 'كافيه',
        },
        en: {
          name: 'Coffee Three Kebz',
          description: 'A cafe serving specialty coffee and hot beverages.',
          address: 'Al-Khmaseen - Wadi Dawsar',
          cuisine: 'Cafe',
        },
        image: require('../images/وادي_الدواسر/rest9.jpg'),
        phone: '٠٥٥٧٧٧٧٧٧٧',
      },
      {
        ar: {
          name: 'كوفي فوغ',
          description: 'كافيه عصري بأجواء هادئة ومميزة.',
          address: 'الخماسين - وادي الدواسر',
          cuisine: 'كافيه',
        },
        en: {
          name: 'Coffee Fog',
          description: 'A modern cafe with a quiet and distinctive atmosphere.',
          address: 'Al-Khmaseen - Wadi Dawsar',
          cuisine: 'Cafe',
        },
        image: require('../images/وادي_الدواسر/rest10.jpg'),
        phone: '٠٥٥٨٨٨٨٨٨٨',
      },
      {
        ar: {
          name: 'كوفي فيد',
          description: 'كافيه يقدم مشروبات متنوعة وجلسات مريحة.',
          address: 'النويعمة - وادي الدواسر',
          cuisine: 'كافيه',
        },
        en: {
          name: 'Coffee Feed',
          description: 'A cafe offering diverse beverages and comfortable seating.',
          address: 'Al-Nuwaima - Wadi Dawsar',
          cuisine: 'Cafe',
        },
        image: require('../images/وادي_الدواسر/rest16.jpg'),
        phone: '٠٥٥٩٩٩٩٩٩٩',
      },
      {
        ar: {
          name: 'كوفي دارك',
          description: 'كافيه بطابع هادئ ومشروبات مميزة.',
          address: 'الخماسين - وادي الدواسر',
          cuisine: 'كافيه',
        },
        en: {
          name: 'Coffee Dark',
          description: 'A cafe with a quiet theme and distinctive beverages.',
          address: 'Al-Khmaseen - Wadi Dawsar',
          cuisine: 'Cafe',
        },
        image: require('../images/وادي_الدواسر/rest12.jpg'),
        phone: '٠٥٦١١١١١١١',
      },
      {
        ar: {
          name: 'كوفي ويلا',
          description: 'كافيه بجلسات مريحه يقدم القهوة المختصة والمشروبات المتنوعة في أجواء هادئة ومناسبة للعائلات.',
          address: 'الخماسين - وادي الدواسر',
          cuisine: 'كافيه ومطعم',
        },
        en: {
          name: 'Coffee Wella',
          description: 'A cafe with comfortable seating offering specialty coffee and diverse beverages in a quiet family-friendly atmosphere.',
          address: 'Al-Khmaseen - Wadi Dawsar',
          cuisine: 'Cafe & Restaurant',
        },
        image: require('../images/وادي_الدواسر/rest13.jpg'),
        phone: '٠٥٦٢٢٢٢٢٢٢',
      },
    ],
  },
};

export default citiesData;
