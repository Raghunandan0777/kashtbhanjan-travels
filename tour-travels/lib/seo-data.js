// Base production domain configuration
export const BASE_URL = "https://shreekashtbhanjantravels.com";

export const SEO_DATA = {
  home: {
    slug: "",
    title: "Shree Kashtbhanjan Travels | Best Taxi, Tour & Travel Service in Surat",
    description: "Looking for a reliable taxi service in Surat? Shree Kashtbhanjan Travels offers 24/7 outstation cabs, airport transfers, tempo traveller rentals, and custom tour packages. Clean fleet & professional drivers. Book instantly on WhatsApp!",
    keywords: "Shree Kashtbhanjan Travels, Kashtbhanjan Travels, taxi service Surat, airport transfer Surat, outstation cab Surat, tempo traveller Surat, corporate travel Surat, tour packages, WhatsApp booking",
    canonical: `${BASE_URL}/`,
    heroBadge: "Premium Travel Services",
    heroHeading: "Travel in Comfort. Arrive in Style.",
    heroSubheading: "Premium taxi, airport transfer, corporate travel, and tour packages available 24/7. Experience luxury at every mile.",
    defaultPickup: "Surat",
    defaultDestination: "",
    defaultVehicle: "",
    faqs: [
      {
        question: "How do I book a ride with Shree Kashtbhanjan Travels?",
        answer: "Booking a ride is quick and simple! You can use our website booking form which automatically redirects you to WhatsApp with all details, or you can call us directly at +91 79907 62538."
      },
      {
        question: "What types of vehicles are available in your fleet?",
        answer: "Our modern fleet includes compact premium sedans (Swift Dzire), spacious multi-utility vehicles (Maruti Ertiga, Kia Carens), luxury MPVs (Toyota Innova Crysta), and large group vehicles like Tempo Travellers (12+ seats)."
      },
      {
        question: "Do you offer services 24/7?",
        answer: "Yes, our services are available 24/7. Whether you need a midnight airport transfer or an early morning outstation journey, our drivers and support team are always available."
      },
      {
        question: "Are toll charges and state taxes included in the fare?",
        answer: "Depending on your plan, we offer both all-inclusive quotes (including driver allowance, toll, and state taxes) and basic packages. Feel free to discuss your preference with our booking coordinator on WhatsApp."
      }
    ],
    reviews: [
      {
        name: "Rajesh Kumar",
        location: "Delhi",
        rating: 5,
        text: "Excellent service, clean vehicle, professional driver. Highly recommended! The Innova Crysta was in immaculate condition and the driver was extremely courteous.",
        initials: "RK"
      },
      {
        name: "Priya Sharma",
        location: "Mumbai",
        rating: 5,
        text: "Booked a tour to Gujarat and it was an unforgettable experience. The vehicle was comfortable and the driver knew all the best routes. Will definitely use Kashtbhanjan Travels again!",
        initials: "PS"
      },
      {
        name: "Amit Patel",
        location: "Surat",
        rating: 5,
        text: "Used Kashtbhanjan Travels for my airport transfer and was impressed with the punctuality and professionalism. The car was spotlessly clean and the ride was smooth. Five stars!",
        initials: "AP"
      }
    ]
  },
  "taxi-service-surat": {
    slug: "taxi-service-surat",
    title: "Best Taxi Service in Surat | Professional 24/7 Cab Hire",
    description: "Book premium local taxi and cab service in Surat, Gujarat. Clean cars, certified professional drivers, and transparent pricing. 24/7 availability for city rides and local travel. Instant WhatsApp booking!",
    keywords: "taxi service surat, cab service surat, local cab booking surat, book taxi surat, local taxi hire, surat travels",
    canonical: `${BASE_URL}/taxi-service-surat`,
    heroBadge: "Local Taxi Service",
    heroHeading: "Reliable Local Taxi & Cab Service in Surat",
    heroSubheading: "Navigate Surat in comfort. Clean premium vehicles, expert local chauffeurs, and prompt pick-ups for all your local travel needs.",
    defaultPickup: "Surat",
    defaultDestination: "Surat Local Sightseeing",
    defaultVehicle: "Sedan",
    faqs: [
      {
        question: "Can I book a taxi for a full day in Surat?",
        answer: "Yes, we offer flexible local packages including half-day (4 Hours / 40 KM) and full-day (8 Hours / 80 KM or 12 Hours / 120 KM) rentals for local city sightseeing, shopping, or business visits."
      },
      {
        question: "How quickly can a taxi arrive for local pickup in Surat?",
        answer: "For immediate bookings, we usually arrange a taxi within 15 to 30 minutes in most areas of Surat. However, we highly recommend booking at least 2 hours in advance to guarantee availability."
      },
      {
        question: "Are your local cabs sanitised and clean?",
        answer: "Absolutely. We pride ourselves on hygiene. Every vehicle is thoroughly washed, sanitised, and vacuumed before and after every booking."
      }
    ],
    reviews: [
      {
        name: "Karan Mehta",
        location: "Surat",
        rating: 5,
        text: "Excellent local cab service. The Dzire arrived early, driver was polite, and knew the Varachha routes perfectly. Very affordable local tour.",
        initials: "KM"
      },
      {
        name: "Sunita Patel",
        location: "Surat",
        rating: 5,
        text: "Booked a cab for family shopping in Adajan and VIP Road. Safe driving and very convenient. Highly recommend Shree Kashtbhanjan Travels.",
        initials: "SP"
      }
    ]
  },
  "airport-transfer-surat": {
    slug: "airport-transfer-surat",
    title: "Surat Airport Cab Service | Premium Airport Transfers",
    description: "On-time airport pick & drop cab service between Surat Airport, Mumbai Airport (BOM), Ahmedabad Airport (AMD), and Surat city. 24/7 premium vehicles and professional service. Book on WhatsApp!",
    keywords: "airport transfer surat, surat airport cab, mumbai airport to surat taxi, ahmedabad airport to surat cab, airport pick drop surat",
    canonical: `${BASE_URL}/airport-transfer-surat`,
    heroBadge: "Airport Transfers",
    heroHeading: "On-Time Airport Cabs & Transfers in Surat",
    heroSubheading: "Never miss a flight. Guaranteed punctual pickups, flight tracking, and comfortable airport transfers to Surat, Mumbai, or Ahmedabad airports.",
    defaultPickup: "Surat Airport (STV)",
    defaultDestination: "Surat",
    defaultVehicle: "Innova Crysta",
    faqs: [
      {
        question: "Which airports do you cover for transfers?",
        answer: "We provide daily airport transfers covering Surat Airport (STV), Mumbai International Airport (BOM), and Ahmedabad International Airport (AMD)."
      },
      {
        question: "What happens if my flight is delayed?",
        answer: "Don't worry! We track your flight details. Your driver will adjust the pickup time according to your actual flight arrival, ensuring you have a hassle-free trip without extra waiting fees."
      },
      {
        question: "Do you offer early morning or midnight airport drops?",
        answer: "Yes, our airport transfer service runs 24 hours a day. We ensure high-security night drives with verified and reliable chauffeurs."
      }
    ],
    reviews: [
      {
        name: "Rahul Desai",
        location: "Surat",
        rating: 5,
        text: "Booked Mumbai Airport to Surat transfer. Driver was waiting with a placard, Innova Crysta was super clean, and the highway drive was extremely smooth. Fantastic airport drop!",
        initials: "RD"
      },
      {
        name: "Neha G.",
        location: "Mumbai",
        rating: 5,
        text: "Punctual, safe, and professional. Shree Kashtbhanjan is my go-to for Surat Airport pickups. Their drivers are polite and helpful with luggage.",
        initials: "NG"
      }
    ]
  },
  "outstation-taxi-surat": {
    slug: "outstation-taxi-surat",
    title: "Outstation Cab Booking in Surat | One-Way & Round-Trip",
    description: "Book premium outstation cabs in Surat. Affordable one-way drops and comfortable round-trip holiday tours. Meticulously maintained Ertiga, Innova Crysta, or Sedans. Professional highway drivers. Book on WhatsApp!",
    keywords: "outstation cab surat, outstation taxi surat, hire outstation car surat, one way cab surat, round trip cab surat",
    canonical: `${BASE_URL}/outstation-taxi-surat`,
    heroBadge: "Outstation Cabs",
    heroHeading: "Premium Outstation Taxi & Cab Booking in Surat",
    heroSubheading: "Explore any destination with peace of mind. Experienced highway drivers, clean reliable vehicles, and transparent outstation billing.",
    defaultPickup: "Surat",
    defaultDestination: "Mumbai / Ahmedabad / Vadodara",
    defaultVehicle: "SUV",
    faqs: [
      {
        question: "What is the difference between one-way and round-trip billing?",
        answer: "For one-way drops, you only pay for the distance travelled from Surat to your destination (all-inclusive fixed fare). For round-trips, charges are calculated per kilometer, covering the return trip, plus a minimal driver allowance per day."
      },
      {
        question: "Are interstate permits and toll fees included?",
        answer: "We offer all-inclusive fares that cover toll taxes, state border permits, and driver allowance, meaning you will not face any hidden charges during your trip."
      },
      {
        question: "Can I book outstation cabs for multi-day tours?",
        answer: "Yes, you can hire our vehicles for customized multi-day tours across Gujarat, Maharashtra, Rajasthan, or Madhya Pradesh. We'll outline a detailed itinerary and rate structure for you."
      }
    ],
    reviews: [
      {
        name: "Vikram Shah",
        location: "Vadodara",
        rating: 5,
        text: "We booked an Ertiga for a 4-day trip to Saputara. The driver was highly familiar with hilly terrains and drove very safely. The pricing was transparent and reasonable.",
        initials: "VS"
      },
      {
        name: "Anjali Joshi",
        location: "Surat",
        rating: 5,
        text: "Outstanding service. The one-way taxi from Surat to Pune was booked last-minute, yet they delivered a great sedan with a very respectful driver.",
        initials: "AJ"
      }
    ]
  },
  "tempo-traveller-rental-surat": {
    slug: "tempo-traveller-rental-surat",
    title: "Tempo Traveller on Rent in Surat | 12 to 20 Seater Hire",
    description: "Rent luxury Tempo Travellers in Surat for family trips, weddings, corporate excursions, and group picnics. Available in 12, 14, 17, and 20 seater AC layouts. Book on WhatsApp for best group rates!",
    keywords: "tempo traveller rental surat, tempo traveller on rent surat, 12 seater tempo traveller surat, 17 seater tempo traveller surat, hire tempo traveller surat",
    canonical: `${BASE_URL}/tempo-traveller-rental-surat`,
    heroBadge: "Tempo Traveller Hire",
    heroHeading: "Luxury Tempo Traveller Rentals in Surat",
    heroSubheading: "Travel together, bond together. Premium AC tempo travellers with pushback seats, ample luggage space, and top-tier sound systems for group excursions.",
    defaultPickup: "Surat",
    defaultDestination: "Outstation Group Tour",
    defaultVehicle: "Tempo Traveller",
    faqs: [
      {
        question: "What seating capacities do you offer for Tempo Travellers?",
        answer: "We offer Tempo Travellers with seating capacities of 12, 14, 17, 20, and 26 seats. All vehicles are equipped with powerful air conditioning and comfortable pushback seats."
      },
      {
        question: "Are your Tempo Travellers suitable for long-distance mountain journeys?",
        answer: "Yes, our Tempo Travellers are regularly serviced and maintained. They are fully equipped for long-distance highway routes as well as hilly areas like Saputara, Mount Abu, and Rajasthan."
      },
      {
        question: "Is there a music system and TV inside the Tempo Traveller?",
        answer: "Yes, all our luxury Tempo Travellers come with premium audio systems, LCD screens, and Bluetooth connectivity to keep your group entertained throughout the journey."
      }
    ],
    reviews: [
      {
        name: "Mehta Family",
        location: "Surat",
        rating: 5,
        text: "Rented a 17-seater Tempo Traveller for a family trip to Diu & Somnath. Extremely clean vehicle, pushback seats were very comfortable for elders, and the driver was friendly. 10/10!",
        initials: "MF"
      },
      {
        name: "Corporate Admin",
        location: "Surat",
        rating: 5,
        text: "Booked a 14-seater for a corporate team outing from Surat to Daman. Seamless process, punctual service, and invoice was provided promptly. Great professional service.",
        initials: "CA"
      }
    ]
  },
  "surat-to-ahmedabad-taxi": {
    slug: "surat-to-ahmedabad-taxi",
    title: "Surat to Ahmedabad Taxi | One-Way & Round-Trip Cabs",
    description: "Premium Surat to Ahmedabad cab service. Highly reliable 24/7 highway taxis, well-maintained cars, and professional chauffeurs. Quick WhatsApp booking and transparent pricing. Book now!",
    keywords: "surat to ahmedabad taxi, surat to ahmedabad cab, one way taxi surat to ahmedabad, cab fare surat to ahmedabad",
    canonical: `${BASE_URL}/surat-to-ahmedabad-taxi`,
    heroBadge: "Intercity Highway Cabs",
    heroHeading: "Premium Surat to Ahmedabad Taxi Service",
    heroSubheading: "Travel the NE1 Expressway in luxury. Comfortable sedans, spacious Ertigas, and premium Innova Crystas with experienced intercity drivers.",
    defaultPickup: "Surat",
    defaultDestination: "Ahmedabad",
    defaultVehicle: "Sedan",
    faqs: [
      {
        question: "What is the distance and travel time from Surat to Ahmedabad?",
        answer: "The travel distance is approximately 265 km via National Highway 48 and the NE1 Expressway. The travel time is roughly 4.5 to 5 hours, depending on traffic."
      },
      {
        question: "Can I book a one-way taxi from Surat to Ahmedabad?",
        answer: "Yes, we offer fixed-rate one-way drop taxis from Surat to Ahmedabad (including airport drop-offs). You only pay for the distance travelled, with no return-trip fee."
      },
      {
        question: "Where do you pick up and drop off in Ahmedabad?",
        answer: "We offer door-to-door services. We can pick you up from any location in Surat (city, railway station, or airport) and drop you off anywhere in Ahmedabad, including Gandhinagar, SG Highway, and Ahmedabad Airport (AMD)."
      }
    ],
    reviews: [
      {
        name: "Siddharth Jain",
        location: "Ahmedabad",
        rating: 5,
        text: "Punctual and professional. Booked a one-way cab to Ahmedabad Airport. The driver drove perfectly on the expressway, and we reached well in time. Highly recommended.",
        initials: "SJ"
      },
      {
        name: "Mona Shah",
        location: "Surat",
        rating: 5,
        text: "Our family regularly books Shree Kashtbhanjan for Surat-Ahmedabad travels. Their Innova is always spotless, and driver quality is superior. Worth every rupee.",
        initials: "MS"
      }
    ]
  },
  "surat-to-mumbai-taxi": {
    slug: "surat-to-mumbai-taxi",
    title: "Surat to Mumbai Taxi | One-Way Cabs & Airport Drops",
    description: "Book premium Surat to Mumbai taxi service for one-way drops, round-trips, or Mumbai Airport (BOM) transfers. 24/7 reliable premium cabs, expert chauffeurs, and smooth drives. Book on WhatsApp!",
    keywords: "surat to mumbai taxi, surat to mumbai cab, one way taxi surat to mumbai, mumbai airport to surat cab",
    canonical: `${BASE_URL}/surat-to-mumbai-taxi`,
    heroBadge: "Intercity Highway Cabs",
    heroHeading: "Surat to Mumbai Taxi & Airport Transfers",
    heroSubheading: "Direct, comfortable, and safe taxi service from Surat to Mumbai. Avoid train hassles; travel door-to-door with professional drivers.",
    defaultPickup: "Surat",
    defaultDestination: "Mumbai Airport (BOM)",
    defaultVehicle: "Innova Crysta",
    faqs: [
      {
        question: "What is the distance and average travel time from Surat to Mumbai?",
        answer: "The distance from Surat to Mumbai is about 280 km. It takes roughly 5.5 to 6 hours via National Highway 48. We ensure comfortable pitstops at quality highway restaurants."
      },
      {
        question: "Do you specialize in Mumbai Airport drop-off taxi service?",
        answer: "Yes, Mumbai Airport drops (Chhatrapati Shivaji Maharaj International Airport - BOM) are our specialty. Our drivers are highly experienced with Mumbai routes, traffic, and terminal guidelines, ensuring on-time drop-offs 24/7."
      },
      {
        question: "Is the toll tax included in the Surat to Mumbai cab fare?",
        answer: "Yes, we provide all-inclusive package fares that cover all toll booths on the highway (including the Bandra-Worli Sea Link if applicable), leaving you with a completely hands-off travel experience."
      }
    ],
    reviews: [
      {
        name: "Deepak Patel",
        location: "Surat",
        rating: 5,
        text: "Excellent experience. Took a morning taxi from Surat to Mumbai Airport. The driver was knowledgeable, vehicle was premium and clean, and driving was safe on NH48. Best service in town.",
        initials: "DP"
      },
      {
        name: "Rhea Chawla",
        location: "Mumbai",
        rating: 5,
        text: "I always hire Shree Kashtbhanjan Travels when visiting family in Surat. Standard of service is exceptional, billing is transparent, and WhatsApp replies are instant.",
        initials: "RC"
      }
    ]
  },
  "surat-to-vadodara-taxi": {
    slug: "surat-to-vadodara-taxi",
    title: "Surat to Vadodara Taxi | One-Way & Round-Trip Cabs",
    description: "Premium Surat to Vadodara taxi service. Safe highway travel, clean vehicles (Swift Dzire, Ertiga, Innova), and professional drivers at best rates. Convenient 24/7 WhatsApp booking. Book today!",
    keywords: "surat to vadodara taxi, surat to vadodara cab, one way taxi surat to vadodara, surat vadodara car hire",
    canonical: `${BASE_URL}/surat-to-vadodara-taxi`,
    heroBadge: "Intercity Highway Cabs",
    heroHeading: "Affordable Surat to Vadodara Cabs & Taxis",
    heroSubheading: "Hassle-free 2.5-hour highway drive. Clean premium fleet, professional local drivers, and door-to-door pickup & drop service.",
    defaultPickup: "Surat",
    defaultDestination: "Vadodara",
    defaultVehicle: "Sedan",
    faqs: [
      {
        question: "What is the distance and travel duration from Surat to Vadodara?",
        answer: "The highway distance from Surat to Vadodara is approximately 150 km via NH 48. The travel time is roughly 2.5 to 3 hours, offering a quick and comfortable road trip."
      },
      {
        question: "Is a one-way outstation cab available from Surat to Vadodara?",
        answer: "Yes, we offer regular one-way taxi drops from Surat to Vadodara. You will only pay the flat one-way fare, saving you up to 50% compared to traditional round-trip taxi hires."
      },
      {
        question: "Can I book a cab for a round-trip from Surat to Vadodara on the same day?",
        answer: "Certainly. We offer specialized same-day return packages from Surat to Vadodara which include wait times, giving you full access to the car for your business or personal meetings in Vadodara."
      }
    ],
    reviews: [
      {
        name: "Pratik Sanghavi",
        location: "Vadodara",
        rating: 5,
        text: "Very reliable service. Booked a same-day round trip for a business meeting in Alkapuri, Vadodara. Driver was highly professional and the Ertiga was extremely comfortable. Highly recommend!",
        initials: "PS"
      },
      {
        name: "Meera Mehta",
        location: "Surat",
        rating: 5,
        text: "Clean car, well-mannered driver, and very easy booking via WhatsApp. Best highway travel experience between Surat and Vadodara.",
        initials: "MM"
      }
    ]
  }
};
