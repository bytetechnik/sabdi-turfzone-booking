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
    premiumQuality: "Premium Quality",
    premiumQualityDesc: "High-grade artificial turf for the best playing experience",
    floodlights: "Floodlights",
    floodlightsDesc: "Professional lighting for evening and night matches",
    changingRooms: "Changing Rooms",
    changingRoomsDesc: "Clean and spacious facilities for teams",
    flexibleTiming: "Flexible Timing",
    flexibleTimingDesc: "Book slots from 6 AM to 10 PM every day",
    
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
  },
  bn: {
    // Hero
    heroTitle: "সাবদি টার্ফজোন",
    heroSubtitle: "ক্রিকেট এবং ফুটবলের জন্য প্রিমিয়াম টার্ফ মাঠ",
    bookNow: "এখনই বুক করুন",
    
    // Features
    whyChoose: "কেন সাবদি টার্ফজোন বেছে নেবেন?",
    whyChooseDesc: "শহরের সেরা ক্রীড়া সুবিধা উপভোগ করুন",
    premiumQuality: "প্রিমিয়াম মানের",
    premiumQualityDesc: "সর্বোত্তম খেলার অভিজ্ঞতার জন্য উচ্চমানের কৃত্রিম টার্ফ",
    floodlights: "ফ্লাডলাইট",
    floodlightsDesc: "সন্ধ্যা এবং রাতের ম্যাচের জন্য পেশাদার আলো",
    changingRooms: "চেঞ্জিং রুম",
    changingRoomsDesc: "দলগুলির জন্য পরিষ্কার এবং প্রশস্ত সুবিধা",
    flexibleTiming: "নমনীয় সময়",
    flexibleTimingDesc: "প্রতিদিন সকাল ৬টা থেকে রাত ১০টা পর্যন্ত বুক করুন",
    
    // Booking
    bookYourTurf: "আপনার টার্ফ বুক করুন",
    bookingDesc: "আপনার খেলা নির্বাচন করুন, একটি সময় স্লট চয়ন করুন এবং আপনার বুকিং সম্পূর্ণ করুন",
    step1: "ধাপ ১: আপনার খেলা নির্বাচন করুন",
    step2: "ধাপ ২: সময় স্লট নির্বাচন করুন",
    step3: "ধাপ ৩: বুকিং বিবরণ",
    cricket: "ক্রিকেট",
    cricketDesc: "মানসম্মত টার্ফ সহ পেশাদার ক্রিকেট পিচ",
    football: "ফুটবল",
    footballDesc: "প্রিমিয়াম পৃষ্ঠ সহ পূর্ণ আকারের ফুটবল মাঠ",
    selectTimeSlot: "সময় স্লট নির্বাচন করুন",
    completeBooking: "আপনার বুকিং সম্পূর্ণ করুন",
    fullName: "পুরো নাম",
    phoneNumber: "ফোন নম্বর",
    email: "ইমেইল",
    selectDate: "তারিখ নির্বাচন করুন",
    confirmBooking: "বুকিং নিশ্চিত করুন",
    
    // Contact
    getInTouch: "যোগাযোগ করুন",
    getInTouchDesc: "প্রশ্ন আছে? আমরা সাহায্য করতে এখানে আছি!",
    location: "অবস্থান",
    phone: "ফোন",
    hours: "সময়",
    everyDay: "প্রতিদিন",
    
    // Footer
    allRightsReserved: "সর্বস্বত্ব সংরক্ষিত",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
