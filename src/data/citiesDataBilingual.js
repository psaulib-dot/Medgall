const citiesDataBilingual = {
  'Al Qassim': {
    ar: { name: 'القصيم', label: 'القصيم' },
    en: { name: 'Al Qassim', label: 'Al Qassim' },
    mainImage: require('../images/القصيم/m.jpeg'),
    
    attractions: {
      items: [
        {
          image: require('../images/القصيم/1.jpg'),
          ar: { title: 'شعيب الأدغم', description: 'يقع شعيب الأدغم شرق منطقة القصيم ويُعد من أهم مواقع الاستيطان البشري القديم في المنطقة. يحتوي الموقع على أدوات حجرية تعود إلى العصور الحجرية المبكرة، ما يدل على أن المنطقة كانت مأهولة منذ آلاف السنين. كما يتميز بوجود مجاري مائية موسمية جذبت الإنسان القديم للاستقرار فيه، إضافةً إلى تضاريس صخرية وفرت حماية طبيعية. ويُعد الموقع شاهدًا مهمًا على تطور أنماط المعيشة والصيد وجمع الثمار في شمال الجزيرة العربية.' },
          en: { title: 'Shuaib Al-Adem', description: `Located east of Al Qassim, Shuaib Al-Adem is one of the most important ancient human settlement sites in the region. The site contains stone tools dating back to the Early Stone Age, indicating that the area has been inhabited for thousands of years. It is also characterized by seasonal water streams that attracted ancient humans to settle there, in addition to rocky terrain that provided natural protection. The site is an important witness to the development of ancient patterns of living, hunting, and gathering in northern Arabia.` }
        },
        {
          image: require('../images/القصيم/2.jpg'),
          ar: { title: 'قصيباء - موطن عنترة بن شداد', description: 'تمثل الكتابات والنقوش والرسوم الصخرية المنتشرة على جبال القصيم سجلاً تاريخيًا مهمًا يعود إلى عصور ما قبل الإسلام والعصور الإسلامية المبكرة. تتضمن نقوشًا بخطوط قديمة مثل الثمودي والنبطي، ورسومات لحيوانات ومشاهد صيد تعكس الحياة الاجتماعية والاقتصادية للسكان القدماء.' },
          en: { title: 'Qasibaa - Homeland of Antarah ibn Shaddad', description: 'The inscriptions, rock carvings, and drawings spread across the mountains of Al Qassim represent an important historical record dating back to pre-Islamic and early Islamic periods. They include ancient inscriptions in Thamudi and Nabatean scripts, as well as drawings of animals and hunting scenes that reflect the social and economic life of ancient inhabitants.' }
        },
        {
          image: require('../images/القصيم/3.jpg'),
          ar: { title: 'النقوش والرسوم الصخرية', description: 'يُعد درب زبيدة أحد أبرز طرق الحج والتجارة في التاريخ الإسلامي، وسُمّي نسبةً إلى زبيدة بنت جعفر زوجة الخليفة هارون الرشيد، التي أمرت بإنشاء برك مياه وآبار لخدمة الحجاج. يمتد الطريق من الكوفة إلى مكة المكرمة ويمر بعدة محطات في القصيم، ولا تزال بقايا المنشآت المائية شاهدة على عظمة التخطيط في العصر العباسي.' },
          en: { title: 'Rock Inscriptions and Drawings', description: 'Darb Zubaida is one of the most prominent pilgrimage and trade routes in Islamic history, named after Zubaida bint Jafar, wife of Caliph Harun al-Rashid, who ordered the construction of water reservoirs and wells to serve pilgrims. The route extends from Kufa to Mecca and passes through several stations in Al Qassim, and remnants of water installations remain as evidence of the magnificence of Abbasid planning.' }
        },
        {
          image: require('../images/القصيم/4.jpg'),
          ar: { title: 'درب زبيدة', description: 'يمتد طريق البصرة – مكة التاريخي عبر مناطق من القصيم، وكان من أهم الطرق التجارية والحجية في العصرين الأموي والعباسي. ساهم في تنشيط الحركة الاقتصادية ونقل البضائع والحجاج، وتنتشر على امتداده آثار آبار ومحطات استراحة قديمة.' },
          en: { title: 'Darb Zubaida', description: 'The historical Basra-Mecca road extends through areas of Al Qassim and was one of the most important trade and pilgrimage routes during the Umayyad and Abbasid periods. It contributed to stimulating economic activity and transporting goods and pilgrims, with remnants of ancient wells and rest stations scattered along its length.' }
        },
        {
          image: require('../images/القصيم/5.jpg'),
          ar: { title: 'طريق البصرة - مكة', description: 'ورد ذكر رامة ورامتان في الشعر الجاهلي والإسلامي، ويُعتقد أنهما موضعان جغرافيان في نجد بالقرب من القصيم. ارتبطت هذه المواقع بالقصص الشعرية والغزلية، وذكرتها قصائد عربية قديمة كمواطن ديار وتجمعات قبلية.' },
          en: { title: 'Basra-Mecca Route', description: 'Rama and Ramatan are mentioned in pre-Islamic and Islamic poetry, believed to be geographical locations in Najd near Al Qassim. These sites are connected to poetic and romantic stories, mentioned in ancient Arabic poems as dwelling places and tribal gatherings.' }
        },
        {
          image: require('../images/القصيم/6.jpg'),
          ar: { title: 'رامة ورامتان', description: 'توجد في منطقة القصيم كتل حجرية أثرية ضخمة يُعتقد أنها بقايا منشآت قديمة أو علامات حدودية تعود لعصور ما قبل الإسلام. تدل هذه الكتل على استخدام الحجارة في البناء والدفاع، وتشير إلى نشاط بشري مبكر في المنطقة.' },
          en: { title: 'Rama and Ramatan', description: 'Massive ancient stone blocks exist in the Al Qassim region, believed to be remnants of ancient structures or boundary markers dating back to pre-Islamic times. These blocks indicate the use of stone in construction and defense, and point to early human activity in the region.' }
        },
        {
          image: require('../images/القصيم/7.jpg'),
          ar: { title: 'الكتل الحجرية الأثرية', description: 'تعكس الرسوم الصخرية القديمة في القصيم مشاهد من الحياة اليومية مثل الرعي والصيد والتنقل بالقوافل، إضافة إلى رموز وأشكال هندسية ذات دلالات ثقافية ودينية، ما يجعلها مصدرًا مهمًا لدراسة الفن والتاريخ في الجزيرة العربية.' },
          en: { title: 'Ancient Stone Blocks', description: 'Ancient rock drawings in Al Qassim reflect scenes of daily life such as herding, hunting, and caravan movement, in addition to symbols and geometric shapes with cultural and religious significance, making them an important source for studying art and history in Arabia.' }
        },
        {
          image: require('../images/القصيم/8.jpg'),
          ar: { title: 'الرسوم الصخرية القديمة', description: 'يقع مرقب عنيزة شمال شرق مدينة عنيزة، وكان يُستخدم قديمًا كنقطة مراقبة وتحذير لحماية المدينة من الغزوات. يتميز بارتفاعه الذي يوفر رؤية واسعة للمنطقة المحيطة، ويُعد من المعالم التاريخية البارزة في القصيم.' },
          en: { title: 'Ancient Rock Drawings', description: 'Located northeast of Unaizah city, Miraab Unaizah was used in ancient times as a watchtower to protect the city from invasions. It is characterized by its elevated position offering a wide view of the surrounding area, and is considered one of the prominent historical landmarks in Al Qassim.' }
        },
        {
          image: require('../images/القصيم/9.jpg'),
          ar: { title: 'مرقب عنيزة', description: 'يُعد موقع العوسجة من المواقع الأثرية المهمة في القصيم، ويحتوي على بقايا استيطان بشري ونقوش صخرية تشير إلى مرور قوافل تجارية قديمة عبر المنطقة. ويُعتبر شاهدًا على أهمية القصيم كممر استراتيجي في طرق التجارة والحج القديمة.' },
          en: { title: 'Miraab Unaizah', description: `The Al-Osaja site is one of the important archaeological sites in Al Qassim, containing remnants of human settlement and rock carvings indicating the passage of ancient trade caravans through the region. It is considered evidence of Al Qassim's importance as a strategic passage on ancient trade and pilgrimage routes.` }
        }
      ]
    },

    hotels: [
      {
        image: require('../images/القصيم/hotel1.jpg'),
        ar: { name: 'فندق موفنبيك القصيم', description: 'فندق 5 نجوم يقع في قلب بريدة، يتميز بموقعه المتميز وخدماته الفاخرة.', address: 'بريدة - طريق الملك عبدالعزيز', phone: '٠١٦٣٨١٩٩٩٩' },
        en: { name: 'Movenpick Hotel Al Qassim', description: 'A 5-star hotel located in the heart of Riyadh, featuring a prime location and luxury services.', address: 'Riyadh - King Abdulaziz Road', phone: '+966-16-3819999' },
        rating: '٥ نجوم',
        booking: true
      },
      {
        image: require('../images/القصيم/hotel2.jpg'),
        ar: { name: 'فندق جولدن توليب', description: 'فندق عصري يقدم إقامة مريحة مع مرافق متكاملة.', address: 'بريدة - طريق الملك فهد', phone: '٠١٦٣٢٦٦٦٦٦' },
        en: { name: 'Golden Tulip Hotel', description: 'A modern hotel offering comfortable accommodation with integrated facilities.', address: 'Riyadh - King Fahd Road', phone: '+966-16-3266666' },
        rating: '٤ نجوم',
        booking: true
      },
      {
        image: require('../images/القصيم/h7.jpg'),
        ar: { name: 'فندق جلنار القصيم', description: 'فندق أنيق يوفر إقامة مريحة وخدمات راقية في منطقة القصيم.', address: 'بريدة - حي النهضة', phone: '٠١٦٣٧٧٧٧٧٧' },
        en: { name: 'Gelnar Al Qassim Hotel', description: 'An elegant hotel offering comfortable accommodation and premium services in Al Qassim region.', address: 'Riyadh - Al-Nahda District', phone: '+966-16-3777777' },
        rating: '٤ نجوم',
        booking: true
      }
    ],

    restaurants: [
      {
        image: require('../images/القصيم/rest1.jpg'),
        ar: { name: 'مطعم ومقهى السدة', description: 'مطعم سعودي تقليدي يقدم أشهى المأكولات الشعبية.', address: 'بريدة - حي الخليج', phone: '٠١٦٣٨٣٣٣٣٣', cuisine: 'مأكولات سعودية', hours: '١٠:٠٠ - ٢٣:٠٠' },
        en: { name: 'Al Sidah Restaurant & Cafe', description: 'A traditional Saudi restaurant serving delicious local cuisine.', address: 'Riyadh - Al-Khalij District', phone: '+966-16-3833333', cuisine: 'Saudi', hours: '10:00 - 23:00' }
      },
      {
        image: require('../images/القصيم/rest2.jpg'),
        ar: { name: 'مطعم ديرتي', description: 'مأكولات نجدية أصيلة وقهوة عربية.', address: 'عنيزة - حليلة السليم', phone: '٠١٦٣٦٥٥٥٥٥', cuisine: 'نجدي', hours: '٠٩:٣٠ - ٢٢:٣٠' },
        en: { name: 'Dirty Restaurant', description: 'Authentic Najdi cuisine and Arabic coffee.', address: 'Unaizah - Halila Al-Salim', phone: '+966-16-3655555', cuisine: 'Najdi', hours: '09:30 - 22:30' }
      },
      {
        image: require('../images/القصيم/rest5.jpg'),
        ar: { name: 'مطعم فينور', description: 'مطعم يقدم أطباق متنوعة في أجواء عائلية راقية.', address: 'بريدة - طريق الملك فهد', phone: '٠١٦٣٦٦٦٦٦٦', cuisine: 'متنوع', hours: '١١:٠٠ - ٢٤:٠٠' },
        en: { name: 'Finor Restaurant', description: 'A restaurant offering diverse dishes in an elegant family atmosphere.', address: 'Riyadh - King Fahd Road', phone: '+966-16-3666666', cuisine: 'Mixed', hours: '11:00 - 24:00' }
      },
      {
        image: require('../images/القصيم/rest6.jpg'),
        ar: { name: 'الميار', description: 'مطعم يقدم المأكولات السعودية والعربية بنكهات مميزة.', address: 'القصيم', phone: '٠١٦٣٦٧٧٧٧٧', cuisine: 'سعودي', hours: '١٢:٠٠ - ٢٣:٣٠' },
        en: { name: 'Al Myar', description: 'A restaurant serving Saudi and Arabic cuisine with distinctive flavors.', address: 'Al Qassim', phone: '+966-16-3677777', cuisine: 'Saudi', hours: '12:00 - 23:30' }
      },
      {
        image: require('../images/القصيم/rest3.jpg'),
        ar: { name: 'نخلا القصيم', description: 'مطعم ومقهى بطابع تراثي وسط أجواء النخيل الجميلة.', address: 'القصيم', phone: '٠١٦٣٦٨٨٨٨٨', cuisine: 'شعبي', hours: '١٠:٠٠ - ٢١:٠٠' },
        en: { name: 'Nakhla Al Qassim', description: 'A restaurant and cafe with heritage character amidst beautiful palm surroundings.', address: 'Al Qassim', phone: '+966-16-3688888', cuisine: 'Local', hours: '10:00 - 21:00' }
      },
      {
        image: require('../images/القصيم/rest4.jpg'),
        ar: { name: 'عسيب القصيم', description: 'مقهى مختص يقدم القهوة المختصة في أجواء مميزة.', address: 'القصيم', phone: '٠١٦٣٦٩٩٩٩٩', cuisine: 'مقهى مختص', hours: '٠٧:٠٠ - ٢٢:٠٠' },
        en: { name: 'Assib Al Qassim', description: 'A specialty cafe serving specialty coffee in a special ambiance.', address: 'Al Qassim', phone: '+966-16-3699999', cuisine: 'Specialty Cafe', hours: '07:00 - 22:00' }
      },
      {
        image: require('../images/القصيم/rest7.jpg'),
        ar: { name: 'مزرعة للنخيل', description: 'مزرعة تحتوي على مقهى مختص وجلسات خارجية وسط النخيل.', address: 'القصيم - خارج المدينة', phone: '٠١٦٣٧١١١١١', cuisine: 'مقهى ومزرعة', hours: '٠٩:٠٠ - ٢١:٠٠' },
        en: { name: 'Palm Farm', description: 'A farm featuring a specialty cafe and outdoor seating among palm trees.', address: 'Al Qassim - Outside City', phone: '+966-16-3711111', cuisine: 'Cafe & Farm', hours: '09:00 - 21:00' }
      }
    ],

    entertainment: [
      {
        image: require('../images/القصيم/rest1.jpg'),
        ar: { name: 'مدينة الملاهي', description: 'مدينة ملاهي عائلية توفر أنشطة ترفيهية للأطفال والعائلات.', address: 'بريدة - حي الخليج', phone: '٠١٦٣٨١٢٣٤٥', type: 'ملاهي', hours: '١٦:٠٠ - ٢٣:٠٠' },
        en: { name: 'Amusement City', description: 'A family amusement park offering entertainment activities for children and families.', address: 'Riyadh - Al-Khalij District', phone: '+966-16-3812345', type: 'Amusement', hours: '16:00 - 23:00' }
      },
      {
        image: require('../images/القصيم/rest2.jpg'),
        ar: { name: 'حديقة الملك عبدالعزيز', description: 'حديقة عامة جميلة مع مناطق جلوس ومسارات طبيعية.', address: 'بريدة - طريق الملك عبدالعزيز', phone: '٠١٦٣٨٦٥٤٣٢', type: 'حديقة', hours: '٠٨:٠٠ - ٢٢:٠٠' },
        en: { name: 'King Abdulaziz Park', description: 'A beautiful public garden with seating areas and natural pathways.', address: 'Riyadh - King Abdulaziz Road', phone: '+966-16-3865432', type: 'Park', hours: '08:00 - 22:00' }
      }
    ]
  },

  'Al Jouf': {
    ar: { name: 'الجوف', label: 'الجوف' },
    en: { name: 'Al Jouf', label: 'Al Jouf' },
    mainImage: require('../images/الجوف/m.jpeg'),
    
    attractions: {
      items: [
        {
          image: require('../images/الجوف/1.jpg'),
          ar: { title: 'دومة الجندل', description: 'تُعد دومة الجندل من أقدم المدن في شمال الجزيرة العربية، ويعود تاريخها إلى القرن العاشر قبل الميلاد، حيث كانت عاصمة لمملكة أدوماتو العربية القديمة. ذُكرت في النصوص الآشورية، وكانت مركزًا تجاريًا مهمًا لوقوعها على طرق القوافل بين الجزيرة العربية وبلاد الشام والعراق. كما شهدت أحداثًا مهمة في صدر الإسلام، وتضم اليوم عددًا من المعالم التاريخية البارزة.' },
          en: { title: 'Dumat Al-Jandal', description: 'One of the oldest cities in northern Arabia, dating back to the 10th century BC when it was the capital of the ancient Arab kingdom of Adummatu. Mentioned in Assyrian texts, it was an important commercial center located on caravan routes between Arabia, the Levant, and Iraq. It witnessed important historical events in early Islam and today contains several prominent historical landmarks.' }
        },
        {
          image: require('../images/الجوف/2.jpg'),
          ar: { title: 'قلعة زعبل', description: 'تقع قلعة زعبل على قمة جبل شمال مدينة سكاكا، وتُعد من أبرز المعالم التاريخية في منطقة الجوف. بُنيت من الحجر والطين خلال القرنين السابع عشر والثامن عشر الميلاديين، وكانت تستخدم لأغراض دفاعية ومراقبة المدينة. تتميز بموقعها المرتفع الذي يتيح رؤية بانورامية واسعة للمنطقة المحيطة.' },
          en: { title: 'Zaabel Castle', description: 'Located on top of a mountain north of Sakaka city, Zaabel Castle is one of the most prominent historical landmarks in the Al Jouf region. Built from stone and mud during the 17th and 18th centuries, it was used for defensive purposes and city surveillance. It is distinguished by its elevated location offering a panoramic view of the surrounding area.' }
        },
        {
          image: require('../images/الجوف/3.jpg'),
          ar: { title: 'قلعة ذات الحاج', description: 'تُعتبر قلعة ذات الحاج إحدى محطات طريق الحج الشامي التاريخي الذي كان يربط بلاد الشام بمكة المكرمة. أُنشئت خلال العهد العثماني لخدمة الحجاج، وتضم بقايا أسوار وبرك مياه وآبار كانت تُستخدم لتوفير الماء والمؤن للقوافل المارة عبر الصحراء.' },
          en: { title: 'Dhat Al-Hajj Castle', description: 'Dhat Al-Hajj Castle is one of the stations on the historical Shami pilgrimage route that connected the Levant to Mecca. Established during the Ottoman period to serve pilgrims, it contains remains of walls, water reservoirs, and wells that were used to provide water and supplies to caravans traveling through the desert.' }
        },
        {
          image: require('../images/الجوف/4.jpg'),
          ar: { title: 'محطة بئر بن هرماس', description: 'محطة بئر بن هرماس تُعد إحدى محطات سكة حديد الحجاز التي أُنشئت في العهد العثماني أوائل القرن العشرين لربط دمشق بالمدينة المنورة. لعبت دورًا مهمًا في نقل الحجاج والبضائع، ولا تزال بقايا المحطة شاهدة على الأهمية التاريخية للخط الحديدي في المنطقة.' },
          en: { title: 'Bir Bin Harmas Station', description: 'Bir Bin Harmas Station is one of the Hijaz Railway stations established during the early 20th century Ottoman period to connect Damascus to Medina. It played an important role in transporting pilgrims and goods, and the station remains as evidence of the historical importance of the railway line in the region.' }
        },
        {
          image: require('../images/الجوف/5.jpg'),
          ar: { title: 'أعمدة الرجاجيل', description: 'أعمدة الرجاجيل موقع أثري فريد يتكون من نحو خمسين مجموعة من الأعمدة الحجرية المنتصبة، ويعود تاريخها إلى الألفية الرابعة قبل الميلاد. يُعتقد أنها استُخدمت لأغراض دينية أو فلكية، وتُعد من أقدم المواقع الأثرية في المملكة، مما يدل على وجود حضارة مبكرة في منطقة الجوف.' },
          en: { title: 'Rajajil Columns', description: 'Rajajil Columns is a unique archaeological site consisting of about fifty groups of standing stone pillars, dating back to the 4th millennium BC. It is believed they were used for religious or astronomical purposes, and they are among the oldest archaeological sites in the kingdom, indicating the existence of an early civilization in the Al Jouf region.' }
        },
        {
          image: require('../images/الجوف/6.jpg'),
          ar: { title: 'بئر سيسرا', description: 'بئر سيسرا بئر أثري منحوت في الصخر يعود إلى الفترة النبطية في القرن الأول الميلادي، ويتميز بعمقه وتصميمه الهندسي المتقن الذي يهدف إلى جمع مياه الأمطار وتخزينها. يُعد شاهدًا على مهارة الأنباط في إدارة الموارد المائية في البيئات الصحراوية.' },
          en: { title: 'Sisra Well', description: 'Sisra Well is an ancient well carved into rock dating back to the Nabatean period in the 1st century AD, distinguished by its depth and precise engineering design intended to collect and store rainwater. It is a testament to the Nabatean skill in managing water resources in desert environments.' }
        }
      ]
    },

    hotels: [
      {
        image: require('../images/الجوف/hotel1.jpg'),
        ar: { name: 'فندق دومة الجندل', description: 'فندق مميز بالقرب من المواقع الأثرية.', address: 'دومة الجندل - طريق الملك فيصل', phone: '٠١٤٦٢٢٢٢٢٢' },
        en: { name: 'Dumat Al-Jandal Hotel', description: 'A distinctive hotel close to archaeological sites.', address: 'Dumat Al-Jandal - King Faisal Road', phone: '+966-146-222222' },
        rating: '٤ نجوم',
        booking: true
      },
      {
        image: require('../images/الجوف/hotel2.jpg'),
        ar: { name: 'فندق سكاكا الدولي', description: 'فندق عصري مع خدمات متكاملة.', address: 'سكاكا - حي الجامعة', phone: '٠١٤٦٢٤٤٤٤٤' },
        en: { name: 'Sakaka International Hotel', description: 'A modern hotel with integrated services.', address: 'Sakaka - University District', phone: '+966-146-244444' },
        rating: '٤ نجوم',
        booking: true
      }
    ],

    restaurants: [
      {
        image: require('../images/الجوف/rest1.jpg'),
        ar: { name: 'مطعم الجوف التقليدي', description: 'مأكولات شعبية من منطقة الجوف.', address: 'سكاكا - حي الخالدية', phone: '٠١٤٦٢٥٥٥٥٥', cuisine: 'شعبي', hours: '١٠:٠٠ - ٢٢:٠٠' },
        en: { name: 'Al Jouf Traditional Restaurant', description: 'Local cuisine from the Al Jouf region.', address: 'Sakaka - Al-Khalidiah District', phone: '+966-146-255555', cuisine: 'Local', hours: '10:00 - 22:00' }
      },
      {
        image: require('../images/الجوف/rest2.jpg'),
        ar: { name: 'مطعم واحة الجوف', description: 'مطعم عائلي يقدم مأكولات متنوعة.', address: 'دومة الجندل - وسط المدينة', phone: '٠١٤٦٢٦٦٦٦٦', cuisine: 'متنوع', hours: '١١:٠٠ - ٢٣:٠٠' },
        en: { name: 'Al Jouf Oasis Restaurant', description: 'A family restaurant serving diverse dishes.', address: 'Dumat Al-Jandal - City Center', phone: '+966-146-266666', cuisine: 'Mixed', hours: '11:00 - 23:00' }
      }
    ],

    entertainment: [
    ]
  },

  'Tabuk': {
    ar: { name: 'تبوك', label: 'تبوك' },
    en: { name: 'Tabuk', label: 'Tabuk' },
    mainImage: require('../images/تبوك/1.jpg'),
    
    attractions: {
      items: [
        {
          image: require('../images/تبوك/1.jpg'),
          ar: { title: 'الرسوم الصخرية في أبا العجل', description: 'تُعد الرسوم الصخرية في موقع أبا العجل بجبال اللوز من أهم الشواهد الأثرية في منطقة تبوك، حيث تحتوي على نقوش ورسومات لحيوانات مثل الإبل والوعول تعود إلى عصور ما قبل التاريخ. تعكس هذه الرسوم أساليب الحياة القديمة وأنشطة الصيد والرعي، كما تدل على قدم الاستيطان البشري في شمال غرب الجزيرة العربية.' },
          en: { title: 'Rock Drawings at Aba Al-Ajal', description: 'Rock drawings at the Aba Al-Ajal site in the Aloz mountains are among the most important archaeological evidence in the Tabuk region, containing inscriptions and animal drawings such as camels and ibex dating back to prehistoric times. These drawings reflect ancient ways of life and hunting and herding activities, and indicate the early human settlement in northwestern Arabia.' }
        },
        {
          image: require('../images/تبوك/2.jpg'),
          ar: { title: 'قلعة تبوك', description: 'تقع قلعة تبوك في قلب المدينة، وتُعد من أبرز المعالم التاريخية في المنطقة. يعود تاريخ بنائها إلى العصر العثماني في القرن السادس عشر الميلادي، وشهدت إعادة ترميمات لاحقة. ارتبطت القلعة بطريق الحج الشامي، كما تُذكر في أحداث غزوة تبوك في صدر الإسلام، مما يمنحها أهمية دينية وتاريخية كبيرة.' },
          en: { title: 'Tabuk Castle', description: 'Located in the heart of the city, Tabuk Castle is one of the most prominent historical landmarks in the region. Its construction dates back to the Ottoman period in the 16th century AD, and it has undergone subsequent restoration. The castle is associated with the Shami pilgrimage route and is mentioned in the events of the Tabuk expedition in early Islam, giving it significant religious and historical importance.' }
        },
        {
          image: require('../images/تبوك/3.jpg'),
          ar: { title: 'محطة وادي الأخضر', description: 'تقع محطة وادي الأخضر على ضفاف الوادي الذي يحمل الاسم نفسه، وقد أُنشئت عام 1325هـ ضمن مشروع سكة حديد الحجاز. كانت المحطة تُستخدم لتزويد القطارات بالمياه وخدمة الحجاج والمسافرين، ولا تزال بقايا مبانيها شاهدة على الدور الحيوي الذي لعبته في تلك الفترة.' },
          en: { title: 'Wadi Al-Akhdar Station', description: 'Located on the banks of the valley bearing the same name, Wadi Al-Akhdar Station was established in 1325 AH as part of the Hijaz Railway project. The station was used to supply trains with water and serve pilgrims and travelers, and ruins of its buildings remain as evidence of the vital role it played during that period.' }
        },
        {
          image: require('../images/تبوك/4.jpg'),
          ar: { title: 'محطة خط حديد الحجاز', description: 'تُعد محطة خط حديد الحجاز في تبوك إحدى المحطات الرئيسية التي افتُتحت عام 1906م ضمن المشروع العثماني لربط دمشق بالمدينة المنورة. لعبت دورًا مهمًا في تسهيل رحلة الحج ونقل البضائع، وتضم مباني حجرية ومستودعات وقاطرات قديمة تُبرز الطابع المعماري لتلك الحقبة.' },
          en: { title: 'Hijaz Railway Station', description: `Tabuk's Hijaz Railway Station is one of the main stations inaugurated in 1906 as part of the Ottoman project to connect Damascus with Medina. It played an important role in facilitating pilgrimage journeys and transporting goods, and includes stone buildings, warehouses, and old locomotives that highlight the architectural style of that era.` }
        },
        {
          image: require('../images/تبوك/5.jpg'),
          ar: { title: 'قلعة المعظم', description: 'تقع قلعة المعظم جنوب شرق تبوك، وهي من القلاع العثمانية التي بُنيت لحماية قوافل الحجاج على طريق الحج الشامي. تضم القلعة بركة المعظم الشهيرة التي كانت تُستخدم لتجميع مياه الأمطار، ما يعكس أهمية إدارة الموارد المائية في البيئات الصحراوية.' },
          en: { title: 'Al-Muazzam Castle', description: 'Located southeast of Tabuk, Al-Muazzam Castle is one of the Ottoman fortresses built to protect pilgrim caravans on the Shami pilgrimage route. The castle includes the famous Al-Muazzam reservoir that was used to collect rainwater, reflecting the importance of water management in desert environments.' }
        },
        {
          image: require('../images/تبوك/6.jpg'),
          ar: { title: 'القرية الأثرية', description: 'القرية الأثرية في منطقة تبوك تعود إلى مطلع الألف الأول قبل الميلاد، وتحتوي على بقايا مبانٍ سكنية ومنشآت حجرية تدل على وجود مجتمع منظم ومستقر. تشير الاكتشافات الأثرية إلى نشاط تجاري وزراعي في المنطقة خلال تلك الفترات المبكرة.' },
          en: { title: 'Archaeological Village', description: 'The archaeological village in the Tabuk region dates back to the 1st millennium BC and contains remains of residential buildings and stone structures indicating the existence of an organized and settled community. Archaeological discoveries point to commercial and agricultural activity in the region during those early periods.' }
        }
      ]
    },

    hotels: [
      {
        image: require('../images/تبوك/hotel1.jpg'),
        ar: { name: 'فندق هيلتون تبوك', description: 'فندق 5 نجوم مع إطلالات رائعة على المدينة.', address: 'تبوك - طريق الملك عبدالله', phone: '٠١٤٤٢٢٢٢٢٢' },
        en: { name: 'Hilton Tabuk Hotel', description: 'A 5-star hotel with wonderful city views.', address: 'Tabuk - King Abdullah Road', phone: '+966-144-222222' },
        rating: '٥ نجوم',
        booking: true
      },
      {
        image: require('../images/تبوك/hotel2.jpg'),
        ar: { name: 'فندق سويس انترناشيونال', description: 'فندق حديث مع مرافق متكاملة.', address: 'تبوك - حي المهرجان', phone: '٠١٤٤٢٣٣٣٣٣' },
        en: { name: 'Swiss International Hotel', description: 'A modern hotel with integrated facilities.', address: 'Tabuk - Al-Moharjan District', phone: '+966-144-233333' },
        rating: '٤ نجوم',
        booking: true
      }
    ],

    restaurants: [
      {
        image: require('../images/تبوك/rest1.jpg'),
        ar: { name: 'مطعم تبوك التراثي', description: 'مأكولات تقليدية من شمال المملكة.', address: 'تبوك - حي العزيزية', phone: '٠١٤٤٢٥٥٥٥٥', cuisine: 'شمالي', hours: '١١:٣٠ - ٢٣:٠٠' },
        en: { name: 'Tabuk Heritage Restaurant', description: 'Traditional cuisine from northern Saudi Arabia.', address: 'Tabuk - Al-Aziziyah District', phone: '+966-144-255555', cuisine: 'Northern', hours: '11:30 - 23:00' }
      },
      {
        image: require('../images/تبوك/rest2.jpg'),
        ar: { name: 'مطعم الواحة', description: 'مطعم متخصص في المأكولات البحرية.', address: 'تبوك - طريق الملك خالد', phone: '٠١٤٤٢٦٦٦٦٦', cuisine: 'مأكولات بحرية', hours: '١٢:٠٠ - ٢٣:٣٠' },
        en: { name: 'Al-Waha Restaurant', description: 'A restaurant specializing in seafood.', address: 'Tabuk - King Khaled Road', phone: '+966-144-266666', cuisine: 'Seafood', hours: '12:00 - 23:30' }
      },
      {
        image: require('../images/تبوك/rest3.jpg'),
        ar: { name: 'مطعم واحة تيماء', description: 'مطعم عائلي يقدم المأكولات العربية.', address: 'تيماء - وسط البلد', phone: '٠١٤٤٣٥٥٥٥٥', cuisine: 'عربي', hours: '١٠:٠٠ - ٢٢:٠٠' },
        en: { name: 'Taima Oasis Restaurant', description: 'A family restaurant serving Arabic cuisine.', address: 'Taima - City Center', phone: '+966-144-355555', cuisine: 'Arabic', hours: '10:00 - 22:00' }
      }
    ],

    entertainment: [
      {
        image: require('../images/تبوك/rest1.jpg'),
        ar: { name: 'شاطئ خليج العقبة', description: 'شاطئ جميل مع مياه فيروزية وأنشطة مائية متنوعة.', address: 'تبوك - الساحل', phone: '٠١٤٤٢٧٠٠٠٠', type: 'شاطئ', hours: '٠٨:٠٠ - ٢٢:٠٠' },
        en: { name: 'Aqaba Gulf Beach', description: 'A beautiful beach with turquoise waters and various water activities.', address: 'Tabuk - Coastal Area', phone: '+966-144-270000', type: 'Beach', hours: '08:00 - 22:00' }
      }
    ]
  },

  'Wadi Dawsar': {
    ar: { name: 'وادي الدواسر', label: 'وادي الدواسر' },
    en: { name: 'Wadi Dawsar', label: 'Wadi Dawsar' },
    mainImage: require('../images/وادي_الدواسر/main.jpeg'),
    
    attractions: {
      items: [
        {
          image: require('../images/وادي_الدواسر/1.jpg'),
          ar: { title: 'قصر الملك عبدالعزيز', description: 'قصر الملك عبدالعزيز التاريخي في محافظة وادي الدواسر بُني عام 1355هـ تقريباً، ويعد من أهم المباني الحكومية القديمة في المنطقة. استخدمه الملك عبدالعزيز – رحمه الله – مقراً للإدارة والحكم أثناء زياراته للمنطقة بعد توحيد المملكة. يتميز القصر بطرازه النجدي التقليدي المبني من الطين واللبن، ويحتوي على ساحات داخلية وغرف استقبال ومجالس للضيوف، ويُعد اليوم معلماً سياحياً وتاريخياً بارزاً يجذب الزوار والمهتمين بالتاريخ السعودي.' },
          en: { title: 'King Abdulaziz Palace', description: `King Abdulaziz's historical palace in Wadi Dawsar was built around 1355 AH and is considered one of the most important ancient government buildings in the region. King Abdulaziz - may God rest his soul - used it as an administrative center during his visits to the region after the unification of the kingdom. The palace is distinguished by its traditional Najdi style built from mud and adobe, with inner courtyards, reception rooms, and guest halls. Today it is a prominent tourist and historical landmark attracting visitors interested in Saudi history.` }
        },
        {
          image: require('../images/وادي_الدواسر/2.jpg'),
          ar: { title: 'متحف وادي الدواسر', description: 'متحف وادي الدواسر من أبرز المعالم الثقافية في المحافظة، حيث يضم مجموعة كبيرة من المقتنيات التراثية التي توثق حياة سكان المنطقة قديماً، مثل أدوات الزراعة التقليدية وأدوات إعداد القهوة العربية والأسلحة القديمة والملابس الشعبية. يعرض المتحف أيضاً نماذج للحياة البدوية والريفية ويعطي الزائر تصوراً كاملاً عن طبيعة المعيشة في وادي الدواسر قبل ظهور الحياة الحديثة.' },
          en: { title: 'Wadi Dawsar Museum', description: 'Wadi Dawsar Museum is one of the most prominent cultural landmarks in the province, housing a large collection of heritage artifacts documenting the lives of inhabitants in the region in ancient times, such as traditional farming tools, Arabic coffee preparation equipment, ancient weapons, and folk clothing. The museum also displays models of Bedouin and rural life and provides visitors with a complete understanding of the nature of life in Wadi Dawsar before modern times.' }
        },
        {
          image: require('../images/وادي_الدواسر/3.jpg'),
          ar: { title: 'قصر بهجة', description: 'قصر بهجة الأثري يعد من المباني الطينية القديمة في وادي الدواسر ويعود تاريخه إلى أكثر من مئة عام. يتميز القصر بتصميمه المعماري النجدي الجنوبي، حيث الأبراج الدفاعية وفتحات التهوية والنوافذ الصغيرة التي كانت تساعد على تلطيف الجو داخل المبنى في الصيف. كان القصر يستخدم سكناً ومقراً للحماية والمراقبة، ويعد مثالاً واضحاً على العمارة التقليدية في جنوب نجد.' },
          en: { title: 'Bahja Palace', description: 'Bahja Palace is an ancient mud building in Wadi Dawsar dating back more than a hundred years. The palace is distinguished by its Southern Najdi architectural design with defensive towers, ventilation openings, and small windows that helped cool the building during summer. The palace was used as a residence and as a protection and surveillance headquarters, and is a clear example of traditional architecture in southern Najd.' }
        },
        {
          image: require('../images/وادي_الدواسر/4.jpg'),
          ar: { title: 'الرسوم الصخرية في جبل القارة', description: 'الرسوم الصخرية في جبال وادي الدواسر من أهم الشواهد الأثرية على وجود الإنسان القديم في المنطقة، حيث تحتوي الصخور على نقوش ورسومات لحيوانات مثل الجمال والوعول وأشكال بشرية تعود لآلاف السنين. هذه النقوش تدل على أن المنطقة كانت ممراً للقوافل التجارية ومكاناً للاستقرار البشري منذ عصور ما قبل الإسلام.' },
          en: { title: 'Rock Drawings on Qara Mountain', description: 'Rock drawings on the mountains of Wadi Dawsar are among the most important archaeological evidence of ancient humans in the region, containing inscriptions and animal drawings such as camels, ibex, and human figures dating back thousands of years. These inscriptions indicate that the region was a passage for trade caravans and a place of human settlement since pre-Islamic times.' }
        },
        {
          image: require('../images/وادي_الدواسر/5.jpg'),
          ar: { title: 'سوق الخميس التقليدي', description: 'سوق الخميس الشعبي في وادي الدواسر من أقدم الأسواق التقليدية في المحافظة، ويقام أسبوعياً منذ عقود طويلة. يجتمع فيه الأهالي لبيع وشراء المنتجات المحلية مثل التمور والسمن والعسل والحبوب والأدوات اليدوية. كما يشكل السوق مكاناً اجتماعياً مهماً لأهالي المنطقة، حيث يحافظ على العادات والتقاليد القديمة ويعكس روح الحياة التراثية في المجتمع المحلي.' },
          en: { title: 'Traditional Thursday Market', description: `The traditional Thursday market in Wadi Dawsar is one of the oldest markets in the province, held weekly for many decades. Locals gather to buy and sell local products such as dates, ghee, honey, grains, and handmade tools. The market also serves as an important social gathering place for the region's inhabitants, preserving old customs and traditions and reflecting the spirit of heritage-based living in the local community.` }
        }
      ]
    },

    hotels: [
      {
        image: require('../images/وادي_الدواسر/oriental.jpg'),
        ar: { name: 'فندق أورينتال باريس', description: 'فندق أنيق يوفر إقامة مريحة وخدمات راقية في وادي الدواسر.', address: 'وادي الدواسر - طريق الملك عبدالعزيز', phone: '٠١٧٧٨٨٨٨٨٨' },
        en: { name: 'Oriental Paris Hotel', description: 'An elegant hotel offering comfortable accommodation and premium services in Wadi Dawsar.', address: 'Wadi Dawsar - King Abdulaziz Road', phone: '+966-177-888888' },
        rating: '٤ نجوم',
        booking: true
      },
      {
        image: require('../images/وادي_الدواسر/boudl.jpg'),
        ar: { name: 'فندق بودل', description: 'فندق عصري يتميز بغرف واسعة وخدمات فندقية متكاملة.', address: 'وادي الدواسر - حي الخالدية', phone: '٠١٧٧٨٩٩٩٩٩' },
        en: { name: 'Boudl Hotel', description: 'A modern hotel characterized by spacious rooms and integrated hotel services.', address: 'Wadi Dawsar - Al-Khalidiah District', phone: '+966-177-899999' },
        rating: '٤ نجوم',
        booking: true
      },
      {
        image: require('../images/وادي_الدواسر/arjan.jpg'),
        ar: { name: 'فندق أرجان بارك', description: 'فندق هادئ مناسب للعائلات مع مرافق متكاملة.', address: 'وادي الدواسر - طريق الملك فهد', phone: '٠١٧٧٨٢٢٢٢٢' },
        en: { name: 'Arjaan Park Hotel', description: 'A quiet hotel suitable for families with integrated facilities.', address: 'Wadi Dawsar - King Fahd Road', phone: '+966-177-822222' },
        rating: '٣ نجوم',
        booking: true
      }
    ],

    restaurants: [
      {
        image: require('../images/وادي_الدواسر/rest1.jpg'),
        ar: { name: 'مطعم شوزان', description: 'مطعم يقدم تشكيلة متنوعة من الأطباق العربية والعالمية.', address: 'وادي الدواسر - وسط البلد', phone: '٠١٧٧٨٣٤٥٦٧', cuisine: 'عالمي', hours: '١١:٠٠ - ٢٣:٠٠' },
        en: { name: 'Shouzan Restaurant', description: 'A restaurant offering a diverse selection of Arab and international dishes.', address: 'Wadi Dawsar - City Center', phone: '+966-177-834567', cuisine: 'International', hours: '11:00 - 23:00' }
      },
      {
        image: require('../images/وادي_الدواسر/rest2.jpg'),
        ar: { name: 'مطعم سافران', description: 'مطعم راقٍ يقدم أطباق مميزة في أجواء عائلية هادئة.', address: 'وادي الدواسر - حي الفيصلية', phone: '٠١٧٧٨٤٥٦٧٨', cuisine: 'متنوع', hours: '١٢:٠٠ - ٢٣:٣٠' },
        en: { name: 'Saffron Restaurant', description: 'An upscale restaurant offering special dishes in a quiet family atmosphere.', address: 'Wadi Dawsar - Al-Faisaliyah District', phone: '+966-177-845678', cuisine: 'Mixed', hours: '12:00 - 23:30' }
      },
      {
        image: require('../images/وادي_الدواسر/rest3.jpg'),
        ar: { name: 'تسيتي فود وادي الدواسر', description: 'مطعم يقدم وجبات سريعة وأطباق متنوعة تناسب جميع الأذواق.', address: 'وادي الدواسر', phone: '٠٥٥١١١١١١١', cuisine: 'وجبات سريعة', hours: '١٠:٠٠ - ٢٢:٠٠' },
        en: { name: 'City Food Wadi Dawsar', description: 'A restaurant offering fast food and diverse dishes suitable for all tastes.', address: 'Wadi Dawsar', phone: '+966-55-11111111', cuisine: 'Fast Food', hours: '10:00 - 22:00' }
      },
      {
        image: require('../images/وادي_الدواسر/rest6.jpg'),
        ar: { name: 'لمة مشاوي وادي الدواسر', description: 'مطعم متخصص في المشويات والأطباق الشعبية.', address: 'وادي الدواسر', phone: '٠٥٥٤٤٤٤٤٤٤', cuisine: 'مشاوي', hours: '١١:٠٠ - ٢٣:٣٠' },
        en: { name: 'Lama Grills Wadi Dawsar', description: 'A restaurant specializing in grilled meats and popular dishes.', address: 'Wadi Dawsar', phone: '+966-55-44444444', cuisine: 'Grills', hours: '11:00 - 23:30' }
      },
      {
        image: require('../images/وادي_الدواسر/rest7.jpg'),
        ar: { name: 'كوجا مطعم برجر', description: 'مطعم برجر يقدم خيارات متنوعة بنكهات مميزة.', address: 'وادي الدواسر', phone: '٠٥٥٥٥٥٥٥٥٥', cuisine: 'برجر', hours: '٠٩:٣٠ - ٢٢:٣٠' },
        en: { name: 'Coja Burger Restaurant', description: 'A burger restaurant offering diverse options with distinctive flavors.', address: 'Wadi Dawsar', phone: '+966-55-55555555', cuisine: 'Burgers', hours: '09:30 - 22:30' }
      },
      {
        image: require('../images/وادي_الدواسر/rest8.jpg'),
        ar: { name: 'بيت المدورة', description: 'مطعم يقدم فطور صباحي متنوع وطازج.', address: 'وادي الدواسر', phone: '٠٥٥٦٦٦٦٦٦٦', cuisine: 'فطور صباحي', hours: '٠٦:٠٠ - ١٢:٠٠' },
        en: { name: 'Bayt Al-Mudawwara', description: 'A restaurant offering diverse and fresh breakfast options.', address: 'Wadi Dawsar', phone: '+966-55-66666666', cuisine: 'Breakfast', hours: '06:00 - 12:00' }
      },
      {
        image: require('../images/وادي_الدواسر/rest9.jpg'),
        ar: { name: 'كوفي ثري كبز', description: 'كافيه يقدم القهوة المختصة والمشروبات الساخنة.', address: 'الخماسين - وادي الدواسر', phone: '٠٥٥٧٧٧٧٧٧٧', cuisine: 'كافيه', hours: '٠٧:٠٠ - ٢١:٠٠' },
        en: { name: 'Coffee Three Cobs', description: 'A cafe serving specialty coffee and hot beverages.', address: 'Khamaseen - Wadi Dawsar', phone: '+966-55-77777777', cuisine: 'Cafe', hours: '07:00 - 21:00' }
      },
      {
        image: require('../images/وادي_الدواسر/rest10.jpg'),
        ar: { name: 'كوفي فوغ', description: 'كافيه عصري بأجواء هادئة ومميزة.', address: 'الخماسين - وادي الدواسر', phone: '٠٥٥٨٨٨٨٨٨٨', cuisine: 'كافيه', hours: '٠٨:٠٠ - ٢٠:٠٠' },
        en: { name: 'Coffee Fog', description: 'A modern cafe with a quiet and special atmosphere.', address: 'Khamaseen - Wadi Dawsar', phone: '+966-55-88888888', cuisine: 'Cafe', hours: '08:00 - 20:00' }
      },
      {
        image: require('../images/وادي_الدواسر/rest13.jpg'),
        ar: { name: 'كوفي ويلا', description: 'كافيه بجلسات مريحه يقدم القهوة المختصة والمشروبات المتنوعة في أجواء هادئة ومناسبة للعائلات.', address: 'الخماسين - وادي الدواسر', phone: '٠٥٦٢٢٢٢٢٢٢', cuisine: 'كافيه ومطعم', hours: '٠٧:٠٠ - ٢٢:٠٠' },
        en: { name: 'Coffee Wella', description: 'A cafe with comfortable seating offering specialty coffee and diverse beverages in a quiet family-friendly atmosphere.', address: 'Khamaseen - Wadi Dawsar', phone: '+966-56-22222222', cuisine: 'Cafe & Restaurant', hours: '07:00 - 22:00' }
      }
    ],

    entertainment: [
      {
        image: require('../images/وادي_الدواسر/rest15.jpg'),
        ar: { name: 'أكاديمية ويلا للفروسية', description: 'أكاديمية تضم كافيه ومطعم وتوفر تدريب الفروسية في أجواء ريفية مميزة ومناسبة للعائلات.', address: 'الخماسين - وادي الدواسر', phone: '٠٥٦٢٢٢٢٢٢٢', type: 'فروسية', hours: '٠٩:٠٠ - ١٨:٠٠' },
        en: { name: 'Wella Equestrian Academy', description: 'An equestrian academy with a cafe and restaurant offering horseback riding lessons in a special rural family-friendly atmosphere.', address: 'Khamaseen - Wadi Dawsar', phone: '+966-56-22222222', type: 'Equestrian', hours: '09:00 - 18:00' }
      },
      {
        image: require('../images/وادي_الدواسر/inter.jpeg'),
        ar: { name: 'وناسة ومرح للترفية', description: 'أكبر صالة ترفيهية في وادي الدواسر والسليل، مكان ممتاز للعائلات والأطفال.', address: 'وادي الدواسر', phone: '٠٥٣٨٢٩٠٤٦٠', type: 'صالة ترفيه', hours: '٠٩:٠٠ - ٢٣:٠٠' },
        en: { name: 'Wanasa wa Marah Entertainment', description: 'The largest entertainment center in Wadi Dawsar and Al-Selalah, an excellent place for families and children.', address: 'Wadi Dawsar', phone: '+966-53-8290460', type: 'Entertainment Hall', hours: '09:00 - 23:00' }
      }
    ]
  }
};

export default citiesDataBilingual;
