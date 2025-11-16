import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "bn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero
    heroTitle: "Sabdi TurfZone",
    heroSubtitle: "Premium Turf Fields for Cricket & Football",
    bookNow: "Book Your Slot Now",
    
    // Features
    whyChoose: "Why Choose Sabdi TurfZone?",
    whyChooseDesc: "Experience the best sports facilities in the city",
    playgroundSize: "9000 Square Feet Playground",
    playgroundSizeDesc: "Spacious 9000 square feet playground for maximum playing area",
    fifaCertified: "FIFA Santandar Certified Turf",
    fifaCertifiedDesc: "FIFA Santandar certified turf meeting international standards",
    fifaQualityTurf: "FIFA Quality Santandar 50mm Turf",
    fifaQualityTurfDesc: "Premium 50mm FIFA Quality Santandar certified turf surface",
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "High-grade artificial turf for the best playing experience",
    floodlights: "Floodlights",
    floodlightsDesc: "Professional lighting for evening and night matches",
    changingRooms: "Changing Rooms",
    changingRoomsDesc: "Clean and spacious facilities for teams",
    flexibleTiming: "Flexible Timing",
    flexibleTimingDesc: "Book slots from 6 AM to 3 AM every day",
    
    // Booking
    bookYourTurf: "Book Your Turf",
    bookingDesc: "Select your sport, choose a time slot, and complete your booking",
    step1: "Step 1: Choose Your Sport",
    step2: "Step 2: Select Time Slot",
    step3: "Step 3: Booking Details",
    cricket: "Cricket",
    cricketDesc: "Professional cricket pitch with quality turf",
    football: "Football",
    footballDesc: "Full-size football field with premium surface",
    selectTimeSlot: "Select Time Slot",
    completeBooking: "Complete Your Booking",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    email: "Email",
    selectDate: "Select Date",
    confirmBooking: "Confirm Booking",
    
    // Contact
    getInTouch: "Get In Touch",
    getInTouchDesc: "Have questions? We're here to help!",
    location: "Location",
    phone: "Phone",
    hours: "Hours",
    everyDay: "Every Day",
    
    // Footer
    allRightsReserved: "All rights reserved",
    
    // Navigation
    aboutUs: "About Us",
    amenities: "Amenities & Facilities",
    gallery: "Gallery",
    contactUs: "Contact Us",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    home: "Home",
    pricing: "Pricing",
    facilities: "Facilities",
    more: "More",
    
    // About
    aboutUsDesc: "Learn more about Sabdi TurfZone and our commitment to providing the best sports facilities.",
    ourStory: "Our Story",
    ourStoryDesc: "Sabdi TurfZone was established in 2025 with a vision to provide world-class sports facilities to our community. Located at Nirpodi Purbopara near Bridge, Sabdi, Bondorm Narayonganj, we offer premium turf fields for cricket and football enthusiasts.",
    ourMission: "Our Mission",
    ourMissionDesc: "To create an inclusive sports environment where athletes of all levels can train, compete, and excel. We are committed to maintaining the highest standards of facility management and customer service.",
    whyChooseUs: "Why Choose Us",
    whyChooseUsDesc: "Professional-grade turf surfaces, flexible booking hours, competitive pricing, and excellent customer support make us the top choice for sports enthusiasts.",
    
    // Amenities
    amenitiesDesc: "We offer comprehensive facilities to ensure your comfort and convenience.",
    parking: "Parking Space",
    parkingDesc: "Ample parking space available for all visitors with easy access to the turf.",
    lighting: "Floodlights",
    lightingDesc: "Professional-grade floodlighting system for evening and night matches.",
    restrooms: "Clean Restrooms",
    restroomsDesc: "Well-maintained restroom facilities for your convenience.",
    drinkingWater: "Drinking Water",
    drinkingWaterDesc: "Clean drinking water facilities available throughout the premises.",
    firstAid: "First Aid",
    firstAidDesc: "Basic first aid facilities and emergency support available on-site.",
    
    // Facilities
    facilitiesTitle: "Our Facilities",
    facilitiesDesc: "We provide world-class facilities to enhance your sports experience.",
    cctvMonitoring: "CCTV Monitoring",
    cctvMonitoringDesc: "Always monitored via CCTV for your safety and security.",
    footballGlovesProvided: "Football & Gloves Provided",
    footballGlovesProvidedDesc: "Football and gloves are provided for your convenience.",
    freeParking: "Free Parking",
    freeParkingDesc: "Complimentary parking space available for all visitors.",
    dugoutFacilities: "Dugout Facilities",
    dugoutFacilitiesDesc: "Professional dugout facilities for teams during matches.",
    washroom: "Washroom",
    washroomDesc: "Clean and well-maintained washroom facilities.",
    changingRoom: "Changing Room",
    changingRoomDesc: "Spacious changing rooms for teams and players.",
    prayerRoom: "Prayer Room",
    prayerRoomDesc: "Dedicated prayer room facility for your convenience.",
    lockerRoom: "Locker Room",
    lockerRoomDesc: "Secure locker room facilities for storing your belongings.",
    waterSalinePerSlot: "Water & Saline Per Slot",
    waterSalinePerSlotDesc: "4 liters of water and saline provided with each booking slot.",
    transportFacilities: "Transport Facilities",
    transportFacilitiesDesc: "Transport facilities available for your convenience.",
    medicalFacilities: "Medical Facilities",
    medicalFacilitiesDesc: "On-site medical facilities and first aid support available.",
    
    // Gallery
    galleryDesc: "Explore our premium turf facilities through our photo gallery.",
    viewAllPhotos: "View All Photos",
    
    // Pricing
    pricingTitle: "Pricing",
    pricingDesc: "Transparent pricing for all time slots. Book your preferred time and enjoy premium facilities.",
    morningSlot: "Morning",
    morningTime: "6:00 AM - 1:30 PM",
    afternoonEveningSlot: "Afternoon-Evening",
    afternoonEveningTime: "3:00 PM - 6:00 PM",
    nightSlot: "Night",
    nightTime: "6:00 PM - 12:00 AM",
    midnightSlot: "Mid Night",
    midnightTime: "12:00 AM - 3:00 AM",
    sundayThursday: "Sunday - Thursday",
    fridaySaturday: "Friday - Saturday",
    perSlot: "Per Slot",
    timeSlot: "Time Slot",
    
    // WhatsApp
    bookViaWhatsApp: "Book via WhatsApp",
    whatsappMessage: "Hello! I would like to book a turf slot at Sabdi TurfZone. Could you please provide more information?",
    
    // FAQ
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Find answers to common questions about booking and using our facilities",
    faqBookingQuestion: "How do I book a turf slot?",
    faqBookingAnswer: "You can book a slot through our website by selecting your sport (Cricket or Football), choosing a date and time slot, and filling in your contact details. Alternatively, you can contact us directly via WhatsApp or phone for quick booking assistance and personalized service.",
    faqPricingQuestion: "What are the pricing rates?",
    faqPricingAnswer: "Our pricing varies by time slot and day. Morning slots: ৳2,000 (weekdays) / ৳2,500 (weekends). Afternoon-Evening slots: ৳2,500 (weekdays) / ৳3,000 (weekends). Night slots: ৳3,000 (weekdays) / ৳3,500 (weekends). Midnight slots: ৳2,500 (weekdays) / ৳3,000 (weekends). All rates are per slot. The same pricing applies to both cricket and football. Contact us for current pricing and special packages.",
    faqCancellationQuestion: "What is the cancellation policy?",
    faqCancellationAnswer: "Cancellations made 24 hours before the booking time are eligible for a full refund. Cancellations made less than 24 hours in advance may incur a cancellation fee. No refund for no-shows.",
    faqTimingQuestion: "What are the operating hours?",
    faqTimingAnswer: "We are open every day from 6:00 AM to 3:00 AM. You can book slots within these timings. Our time slots are: Morning (6:00 AM - 1:30 PM), Afternoon-Evening (3:00 PM - 6:00 PM), Night (6:00 PM - 12:00 AM), and Midnight (12:00 AM - 3:00 AM). All slots are subject to availability.",
    faqPaymentQuestion: "What payment methods do you accept?",
    faqPaymentAnswer: "We accept cash, bKash, Nagad, Rocket, and bank transfers. Advance payment is typically required to confirm your booking. Payment details and instructions will be shared upon booking confirmation. For your convenience, you can also pay on-site, but advance booking confirmation is recommended.",
    faqRulesQuestion: "What are the facility rules?",
    faqRulesAnswer: "Proper sports footwear required. No spikes allowed on turf. Respect other players and facility property. No smoking or alcohol on premises. Follow staff instructions at all times. Damage to facility will be charged.",
    faqEquipmentQuestion: "Do you provide sports equipment?",
    faqEquipmentAnswer: "We provide football and gloves for your convenience. Basic equipment like balls and cones are also available. However, we recommend bringing your own equipment for the best experience. Additional sports gear can be arranged on request with prior notice.",
    faqWeatherQuestion: "What happens in bad weather?",
    faqWeatherAnswer: "In case of heavy rain or severe weather conditions, bookings may be rescheduled or refunded at no extra charge. We will notify you as soon as possible if weather conditions affect your booking. Our turf has excellent drainage, so light rain typically doesn't affect play. Please contact us if you have concerns about weather conditions.",
    
    // Privacy Policy
    privacyPolicyTitle: "Privacy Policy",
    informationCollection: "Information Collection",
    informationCollectionDesc: "We collect information you provide when booking our turf facilities, including your name, contact details, and booking preferences.",
    useOfInformation: "Use of Information",
    useOfInformationDesc: "Your information is used to process bookings, communicate with you about your reservations, and improve our services.",
    dataProtection: "Data Protection",
    dataProtectionDesc: "We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.",
    contactPrivacy: "Contact Us",
    contactPrivacyDesc: "If you have any questions about our privacy policy, please contact us at sabditurfzone@gmail.com",
    
    // Terms & Conditions
    termsConditionsTitle: "Terms & Conditions",
    bookingTerms: "Booking Terms",
    bookingTermsDesc: "All bookings are subject to availability. A confirmed booking guarantees your time slot for the specified date and time.",
    cancellationPolicy: "Cancellation Policy",
    cancellationPolicyDesc: "Cancellations must be made at least 24 hours in advance for a full refund. Late cancellations may incur charges.",
    facilityRules: "Facility Rules",
    facilityRulesDesc: "Users must respect the facility and other players. Appropriate sports attire and footwear are required. Any damage to the facility will be charged to the booking party.",
    liability: "Liability",
    liabilityDesc: "Sabdi TurfZone is not responsible for any injuries sustained while using our facilities. Users participate at their own risk.",
  },
  bn: {
    // Hero
    heroTitle: "সাবদি টার্ফজোন",
    heroSubtitle: "ক্রিকেট এবং ফুটবলের জন্য প্রিমিয়াম টার্ফ মাঠ",
    bookNow: "এখনই বুক করুন",
    
    // Features
    whyChoose: "কেন সাবদি টার্ফজোন বেছে নেবেন?",
    whyChooseDesc: "শহরের সেরা ক্রীড়া সুবিধা উপভোগ করুন",
    playgroundSize: "৯০০০ বর্গফুট খেলার মাঠ",
    playgroundSizeDesc: "সর্বোচ্চ খেলার এলাকার জন্য প্রশস্ত ৯০০০ বর্গফুট খেলার মাঠ",
    fifaCertified: "ফিফা সান্তান্দার সার্টিফাইড টার্ফ",
    fifaCertifiedDesc: "আন্তর্জাতিক মান পূরণকারী ফিফা সান্তান্দার সার্টিফাইড টার্ফ",
    fifaQualityTurf: "ফিফা কোয়ালিটি সান্তান্দার ৫০মিমি টার্ফ",
    fifaQualityTurfDesc: "প্রিমিয়াম ৫০মিমি ফিফা কোয়ালিটি সান্তান্দার সার্টিফাইড টার্ফ পৃষ্ঠ",
    premiumQuality: "প্রিমিয়াম মানের",
    premiumQualityDesc: "সর্বোত্তম খেলার অভিজ্ঞতার জন্য উচ্চমানের কৃত্রিম টার্ফ",
    floodlights: "ফ্লাডলাইট",
    floodlightsDesc: "সন্ধ্যা এবং রাতের ম্যাচের জন্য পেশাদার আলো",
    changingRooms: "চেঞ্জিং রুম",
    changingRoomsDesc: "দলগুলির জন্য পরিষ্কার এবং প্রশস্ত সুবিধা",
    flexibleTiming: "নমনীয় সময়",
    flexibleTimingDesc: "প্রতিদিন সকাল ৬টা থেকে রাত ৩টা পর্যন্ত বুক করুন",
    
    // Booking
    bookYourTurf: "আপনার টার্ফ বুক করুন",
    bookingDesc: "আপনার খেলা নির্বাচন করুন, একটি সময় স্লট চয়ন করুন এবং আপনার বুকিং সম্পূর্ণ করুন",
    step1: "ধাপ ১: আপনার খেলা নির্বাচন করুন",
    step2: "ধাপ ২: সময় স্লট নির্বাচন করুন",
    step3: "ধাপ ৩: বুকিং বিবরণ",
    cricket: "ক্রিকেট",
    cricketDesc: "মানসম্মত টার্ফ সহ পেশাদার ক্রিকেট পিচ",
    football: "ফুটবল",
    footballDesc: "সম্পূর্ণ আকারের ফুটবল মাঠ প্রিমিয়াম পৃষ্ঠ সহ",
    selectTimeSlot: "সময় স্লট নির্বাচন করুন",
    completeBooking: "আপনার বুকিং সম্পূর্ণ করুন",
    fullName: "সম্পূর্ণ নাম",
    phoneNumber: "ফোন নম্বর",
    email: "ইমেইল",
    selectDate: "তারিখ নির্বাচন করুন",
    confirmBooking: "বুকিং নিশ্চিত করুন",
    
    // Contact
    getInTouch: "যোগাযোগ করুন",
    getInTouchDesc: "প্রশ্ন আছে? আমরা সাহায্য করতে এখানে আছি!",
    location: "অবস্থান",
    phone: "ফোন",
    hours: "সময়সূচী",
    everyDay: "প্রতিদিন",
    
    // Footer
    allRightsReserved: "সমস্ত অধিকার সংরক্ষিত",
    
    // Navigation
    aboutUs: "আমাদের সম্পর্কে",
    amenities: "সুযোগ-সুবিধা",
    gallery: "গ্যালারি",
    contactUs: "যোগাযোগ করুন",
    privacyPolicy: "গোপনীয়তা নীতি",
    termsConditions: "শর্তাবলী",
    home: "হোম",
    pricing: "মূল্য",
    facilities: "সুবিধা",
    more: "আরও",
    
    // About
    aboutUsDesc: "সাবদি টার্ফজোন সম্পর্কে জানুন এবং সেরা ক্রীড়া সুবিধা প্রদানের জন্য আমাদের প্রতিশ্রুতি।",
    ourStory: "আমাদের গল্প",
    ourStoryDesc: "সাবদি টার্ফজোন ২০২৫ সালে প্রতিষ্ঠিত হয়েছিল আমাদের সম্প্রদায়কে বিশ্বমানের ক্রীড়া সুবিধা প্রদানের লক্ষ্যে। নিরপদি পূর্বপাড়া ব্রিজের কাছে, সাবদি, বন্দর নারায়ণগঞ্জে অবস্থিত, আমরা ক্রিকেট এবং ফুটবল উত্সাহীদের জন্য প্রিমিয়াম টার্ফ মাঠ সরবরাহ করি।",
    ourMission: "আমাদের লক্ষ্য",
    ourMissionDesc: "একটি অন্তর্ভুক্তিমূলক ক্রীড়া পরিবেশ তৈরি করা যেখানে সমস্ত স্তরের ক্রীড়াবিদরা প্রশিক্ষণ, প্রতিযোগিতা এবং উৎকর্ষ অর্জন করতে পারে। আমরা সুবিধা ব্যবস্থাপনা এবং গ্রাহক সেবার সর্বোচ্চ মান বজায় রাখতে প্রতিশ্রুতিবদ্ধ।",
    whyChooseUs: "কেন আমাদের চয়ন করবেন",
    whyChooseUsDesc: "পেশাদার-গ্রেড টার্ফ পৃষ্ঠ, নমনীয় বুকিং সময়, প্রতিযোগিতামূলক মূল্য এবং চমৎকার গ্রাহক সহায়তা আমাদের ক্রীড়া উত্সাহীদের জন্য শীর্ষ পছন্দ করে তোলে।",
    
    // Amenities
    amenitiesDesc: "আমরা আপনার আরাম এবং সুবিধা নিশ্চিত করতে ব্যাপক সুবিধা প্রদান করি।",
    parking: "পার্কিং স্পেস",
    parkingDesc: "টার্ফে সহজ প্রবেশাধিকার সহ সমস্ত দর্শকদের জন্য পর্যাপ্ত পার্কিং স্থান উপলব্ধ।",
    lighting: "ফ্লাডলাইট",
    lightingDesc: "সন্ধ্যা এবং রাতের ম্যাচের জন্য পেশাদার-গ্রেড ফ্লাডলাইটিং সিস্টেম।",
    restrooms: "পরিষ্কার টয়লেট",
    restroomsDesc: "আপনার সুবিধার জন্য সুরক্ষিত টয়লেট সুবিধা।",
    drinkingWater: "পানীয় জল",
    drinkingWaterDesc: "প্রাঙ্গণ জুড়ে পরিষ্কার পানীয় জল সুবিধা উপলব্ধ।",
    firstAid: "প্রাথমিক চিকিৎসা",
    firstAidDesc: "সাইটে মৌলিক প্রাথমিক চিকিৎসা সুবিধা এবং জরুরি সহায়তা উপলব্ধ।",
    
    // Facilities
    facilitiesTitle: "আমাদের সুবিধা",
    facilitiesDesc: "আমরা আপনার ক্রীড়া অভিজ্ঞতা বাড়াতে বিশ্বমানের সুবিধা প্রদান করি।",
    cctvMonitoring: "সিসিটিভি মনিটরিং",
    cctvMonitoringDesc: "আপনার নিরাপত্তা এবং সুরক্ষার জন্য সর্বদা সিসিটিভির মাধ্যমে পর্যবেক্ষণ করা হয়।",
    footballGlovesProvided: "ফুটবল ও গ্লাভস প্রদান",
    footballGlovesProvidedDesc: "আপনার সুবিধার জন্য ফুটবল এবং গ্লাভস প্রদান করা হয়।",
    freeParking: "বিনামূল্যে পার্কিং",
    freeParkingDesc: "সমস্ত দর্শকদের জন্য বিনামূল্যে পার্কিং স্থান উপলব্ধ।",
    dugoutFacilities: "ডাগআউট সুবিধা",
    dugoutFacilitiesDesc: "ম্যাচ চলাকালীন দলগুলির জন্য পেশাদার ডাগআউট সুবিধা।",
    washroom: "ওয়াশরুম",
    washroomDesc: "পরিষ্কার এবং সুসজ্জিত ওয়াশরুম সুবিধা।",
    changingRoom: "চেঞ্জিং রুম",
    changingRoomDesc: "দল এবং খেলোয়াড়দের জন্য প্রশস্ত চেঞ্জিং রুম।",
    prayerRoom: "প্রার্থনা কক্ষ",
    prayerRoomDesc: "আপনার সুবিধার জন্য নিবেদিত প্রার্থনা কক্ষ সুবিধা।",
    lockerRoom: "লকার রুম",
    lockerRoomDesc: "আপনার জিনিসপত্র সংরক্ষণের জন্য নিরাপদ লকার রুম সুবিধা।",
    waterSalinePerSlot: "প্রতি স্লটে জল ও স্যালাইন",
    waterSalinePerSlotDesc: "প্রতিটি বুকিং স্লটের সাথে ৪ লিটার জল এবং স্যালাইন প্রদান করা হয়।",
    transportFacilities: "পরিবহন সুবিধা",
    transportFacilitiesDesc: "আপনার সুবিধার জন্য পরিবহন সুবিধা উপলব্ধ।",
    medicalFacilities: "চিকিৎসা সুবিধা",
    medicalFacilitiesDesc: "সাইটে চিকিৎসা সুবিধা এবং প্রাথমিক চিকিৎসা সহায়তা উপলব্ধ।",
    
    // Gallery
    galleryDesc: "আমাদের ফটো গ্যালারির মাধ্যমে আমাদের প্রিমিয়াম টার্ফ সুবিধা দেখুন।",
    viewAllPhotos: "সব ফটো দেখুন",
    
    // Pricing
    pricingTitle: "মূল্য",
    pricingDesc: "সমস্ত সময় স্লটের জন্য স্বচ্ছ মূল্য। আপনার পছন্দের সময় বুক করুন এবং প্রিমিয়াম সুবিধা উপভোগ করুন।",
    morningSlot: "সকাল",
    morningTime: "সকাল ৬:০০ - দুপুর ১:৩০",
    afternoonEveningSlot: "বিকাল-সন্ধ্যা",
    afternoonEveningTime: "বিকাল ৩:০০ - সন্ধ্যা ৬:০০",
    nightSlot: "রাত",
    nightTime: "সন্ধ্যা ৬:০০ - রাত ১২:০০",
    midnightSlot: "মধ্যরাত",
    midnightTime: "রাত ১২:০০ - ভোর ৩:০০",
    sundayThursday: "রবিবার - বৃহস্পতিবার",
    fridaySaturday: "শুক্রবার - শনিবার",
    perSlot: "প্রতি স্লট",
    timeSlot: "সময় স্লট",
    
    // WhatsApp
    bookViaWhatsApp: "হোয়াটসঅ্যাপের মাধ্যমে বুক করুন",
    whatsappMessage: "হ্যালো! আমি সাবদি টার্ফজোনে একটি টার্ফ স্লট বুক করতে চাই। আপনি কি আরও তথ্য প্রদান করতে পারেন?",
    
    // FAQ
    faqTitle: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
    faqDesc: "বুকিং এবং আমাদের সুবিধা ব্যবহার সম্পর্কে সাধারণ প্রশ্নের উত্তর খুঁজুন",
    faqBookingQuestion: "আমি কীভাবে টার্ফ স্লট বুক করব?",
    faqBookingAnswer: "আপনি আমাদের ওয়েবসাইটের মাধ্যমে আপনার খেলা (ক্রিকেট বা ফুটবল) নির্বাচন করে, একটি তারিখ এবং সময় স্লট চয়ন করে এবং আপনার যোগাযোগের বিবরণ পূরণ করে একটি স্লট বুক করতে পারেন। বিকল্পভাবে, দ্রুত বুকিং সহায়তা এবং ব্যক্তিগত সেবার জন্য আপনি সরাসরি হোয়াটসঅ্যাপ বা ফোনের মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারেন।",
    faqPricingQuestion: "মূল্য হার কত?",
    faqPricingAnswer: "আমাদের মূল্য সময় স্লট এবং দিন অনুযায়ী পরিবর্তিত হয়। সকালের স্লট: ৳২,০০০ (সপ্তাহের দিন) / ৳২,৫০০ (সপ্তাহান্ত)। বিকাল-সন্ধ্যার স্লট: ৳২,৫০০ (সপ্তাহের দিন) / ৳৩,০০০ (সপ্তাহান্ত)। রাতের স্লট: ৳৩,০০০ (সপ্তাহের দিন) / ৳৩,৫০০ (সপ্তাহান্ত)। মধ্যরাতের স্লট: ৳২,৫০০ (সপ্তাহের দিন) / ৳৩,০০০ (সপ্তাহান্ত)। সমস্ত হার প্রতি স্লটের জন্য। ক্রিকেট এবং ফুটবল উভয়ের জন্য একই মূল্য প্রযোজ্য। বর্তমান মূল্য এবং বিশেষ প্যাকেজের জন্য আমাদের সাথে যোগাযোগ করুন।",
    faqCancellationQuestion: "বাতিলকরণ নীতি কী?",
    faqCancellationAnswer: "বুকিং সময়ের ২৪ ঘণ্টা আগে করা বাতিলকরণ সম্পূর্ণ রিফান্ডের জন্য যোগ্য। ২৪ ঘণ্টারও কম সময়ে করা বাতিলকরণে বাতিলকরণ ফি লাগতে পারে। না-আসার জন্য কোনও রিফান্ড নেই।",
    faqTimingQuestion: "পরিচালন সময় কী?",
    faqTimingAnswer: "আমরা প্রতিদিন সকাল ৬:০০ টা থেকে রাত ৩:০০ টা পর্যন্ত খোলা থাকি। আপনি এই সময়ের মধ্যে স্লট বুক করতে পারেন। আমাদের সময় স্লটগুলি হল: সকাল (সকাল ৬:০০ - দুপুর ১:৩০), বিকাল-সন্ধ্যা (বিকাল ৩:০০ - সন্ধ্যা ৬:০০), রাত (সন্ধ্যা ৬:০০ - রাত ১২:০০), এবং মধ্যরাত (রাত ১২:০০ - ভোর ৩:০০)। সমস্ত স্লট প্রাপ্যতা সাপেক্ষে।",
    faqPaymentQuestion: "আপনারা কোন পেমেন্ট পদ্ধতি গ্রহণ করেন?",
    faqPaymentAnswer: "আমরা ক্যাশ, বিকাশ, নগদ, রকেট এবং ব্যাংক স্থানান্তর গ্রহণ করি। আপনার বুকিং নিশ্চিত করতে সাধারণত অগ্রিম পেমেন্ট প্রয়োজন। বুকিং নিশ্চিতকরণের পরে পেমেন্টের বিবরণ এবং নির্দেশাবলী শেয়ার করা হবে। আপনার সুবিধার জন্য, আপনি সাইটেও পেমেন্ট করতে পারেন, তবে অগ্রিম বুকিং নিশ্চিতকরণ সুপারিশ করা হয়।",
    faqRulesQuestion: "সুবিধা নিয়মাবলী কী?",
    faqRulesAnswer: "সঠিক ক্রীড়া পাদুকা প্রয়োজন। টার্ফে কোনো স্পাইক অনুমোদিত নয়। অন্যান্য খেলোয়াড় এবং সুবিধা সম্পত্তি সম্মান করুন। প্রাঙ্গণে ধূমপান বা অ্যালকোহল নেই। সর্বদা স্টাফ নির্দেশাবলী অনুসরণ করুন। সুবিধার ক্ষতি চার্জ করা হবে।",
    faqEquipmentQuestion: "আপনারা কি ক্রীড়া সরঞ্জাম সরবরাহ করেন?",
    faqEquipmentAnswer: "আমরা আপনার সুবিধার জন্য ফুটবল এবং গ্লাভস প্রদান করি। বল এবং শঙ্কুর মতো মৌলিক সরঞ্জামও উপলব্ধ। তবে, আমরা সেরা অভিজ্ঞতার জন্য আপনার নিজস্ব সরঞ্জাম আনার পরামর্শ দিই। পূর্ব বিজ্ঞপ্তির সাথে অনুরোধে অতিরিক্ত ক্রীড়া সরঞ্জাম ব্যবস্থা করা যেতে পারে।",
    faqWeatherQuestion: "খারাপ আবহাওয়ায় কী ঘটে?",
    faqWeatherAnswer: "ভারী বৃষ্টি বা গুরুতর আবহাওয়া পরিস্থিতিতে, বুকিং অতিরিক্ত চার্জ ছাড়াই পুনঃনির্ধারিত বা রিফান্ড করা যেতে পারে। আবহাওয়া পরিস্থিতি আপনার বুকিংকে প্রভাবিত করলে আমরা যত তাড়াতাড়ি সম্ভব আপনাকে অবহিত করব। আমাদের টার্ফে চমৎকার নিষ্কাশন রয়েছে, তাই হালকা বৃষ্টি সাধারণত খেলাকে প্রভাবিত করে না। আবহাওয়া পরিস্থিতি সম্পর্কে আপনার কোনও উদ্বেগ থাকলে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।",
    
    // Privacy Policy
    privacyPolicyTitle: "গোপনীয়তা নীতি",
    informationCollection: "তথ্য সংগ্রহ",
    informationCollectionDesc: "আমরা আপনার টার্ফ সুবিধা বুকিং করার সময় আপনার নাম, যোগাযোগের বিবরণ এবং বুকিং পছন্দ সহ আপনার প্রদত্ত তথ্য সংগ্রহ করি।",
    useOfInformation: "তথ্যের ব্যবহার",
    useOfInformationDesc: "আপনার তথ্য বুকিং প্রক্রিয়া করতে, আপনার রিজার্ভেশন সম্পর্কে আপনার সাথে যোগাযোগ করতে এবং আমাদের সেবা উন্নত করতে ব্যবহৃত হয়।",
    dataProtection: "ডেটা সুরক্ষা",
    dataProtectionDesc: "আমরা অননুমোদিত প্রবেশ বা প্রকাশের বিরুদ্ধে আপনার ব্যক্তিগত তথ্য রক্ষা করতে উপযুক্ত নিরাপত্তা ব্যবস্থা বাস্তবায়ন করি।",
    contactPrivacy: "আমাদের সাথে যোগাযোগ করুন",
    contactPrivacyDesc: "আমাদের গোপনীয়তা নীতি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, অনুগ্রহ করে sabditurfzone@gmail.com এ আমাদের সাথে যোগাযোগ করুন",
    
    // Terms & Conditions
    termsConditionsTitle: "শর্তাবলী",
    bookingTerms: "বুকিং শর্তাবলী",
    bookingTermsDesc: "সমস্ত বুকিং প্রাপ্যতা সাপেক্ষে। একটি নিশ্চিত বুকিং নির্দিষ্ট তারিখ এবং সময়ের জন্য আপনার সময় স্লট গ্যারান্টি দেয়।",
    cancellationPolicy: "বাতিলকরণ নীতি",
    cancellationPolicyDesc: "সম্পূর্ণ রিফান্ডের জন্য কমপক্ষে ২৪ ঘণ্টা আগে বাতিলকরণ করতে হবে। দেরিতে বাতিলকরণে চার্জ লাগতে পারে।",
    facilityRules: "সুবিধা নিয়মাবলী",
    facilityRulesDesc: "ব্যবহারকারীদের অবশ্যই সুবিধা এবং অন্যান্য খেলোয়াড়দের সম্মান করতে হবে। উপযুক্ত ক্রীড়া পোশাক এবং পাদুকা প্রয়োজন। সুবিধার যেকোনো ক্ষতি বুকিং পক্ষের কাছে চার্জ করা হবে।",
    liability: "দায়বদ্ধতা",
    liabilityDesc: "সাবদি টার্ফজোন আমাদের সুবিধা ব্যবহারের সময় যেকোনো আঘাতের জন্য দায়ী নয়। ব্যবহারকারীরা নিজের ঝুঁকিতে অংশগ্রহণ করেন।",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
