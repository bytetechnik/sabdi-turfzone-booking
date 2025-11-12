import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
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

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">{t("heroTitle")}</h3>
          <p className="text-primary-foreground/90">
            © 2024 {t("heroTitle")}. {t("allRightsReserved")}.
          </p>
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
