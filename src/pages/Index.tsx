import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { NavLink } from "@/components/NavLink";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SportSelection from "@/components/SportSelection";
import TimeSlotPicker from "@/components/TimeSlotPicker";
import BookingForm from "@/components/BookingForm";
import Contact from "@/components/Contact";
import LanguageToggle from "@/components/LanguageToggle";

const Index = () => {
  const { t } = useLanguage();
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <Navbar />
      <LanguageToggle />
      <Hero />
      <Features />
      
      <section id="booking" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t("bookYourTurf")}</h2>
            <p className="text-muted-foreground text-lg">
              {t("bookingDesc")}
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t("step1")}</h3>
              <SportSelection
                selectedSport={selectedSport}
                onSelectSport={setSelectedSport}
              />
            </div>

            {selectedSport && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{t("step2")}</h3>
                <TimeSlotPicker
                  selectedSlot={selectedSlot}
                  onSelectSlot={setSelectedSlot}
                />
              </div>
            )}

            {selectedSport && selectedSlot && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{t("step3")}</h3>
                <BookingForm
                  selectedSport={selectedSport}
                  selectedSlot={selectedSlot}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <Contact />

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t("heroTitle")}</h3>
              <p className="text-primary-foreground/90">
                Nirpodi Purbopara near Bridge, Sabdi, Bondorm Narayonganj
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">{t("contactUs")}</h4>
              <p className="text-primary-foreground/90 mb-2">+91 98765 43210</p>
              <p className="text-primary-foreground/90">info@sabditurfzone.com</p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="flex flex-col gap-2">
                <NavLink to="/privacy-policy" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  {t("privacyPolicy")}
                </NavLink>
                <NavLink to="/terms-conditions" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  {t("termsConditions")}
                </NavLink>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/90">
              © 2025 {t("heroTitle")}. {t("allRightsReserved")}.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </main>
  );
};

export default Index;
