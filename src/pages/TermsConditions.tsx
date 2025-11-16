import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";

const TermsConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-foreground">{t("termsConditions")}</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Booking Terms</h2>
              <p>All bookings are subject to availability. A confirmed booking guarantees your time slot for the specified date and time.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Cancellation Policy</h2>
              <p>Cancellations must be made at least 24 hours in advance for a full refund. Late cancellations may incur charges.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Facility Rules</h2>
              <p>Users must respect the facility and other players. Appropriate sports attire and footwear are required. Any damage to the facility will be charged to the booking party.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Liability</h2>
              <p>Sabdi TurfZone is not responsible for any injuries sustained while using our facilities. Users participate at their own risk.</p>
            </section>
          </div>
        </div>
      </main>

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
              <p className="text-primary-foreground/90 mb-2">+880 1911 862 666</p>
              <p className="text-primary-foreground/90">sabditurfzone@gmail.com</p>
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
          
          <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/90">
              © 2025 {t("heroTitle")}. {t("allRightsReserved")}.
            </p>
            <p className="text-primary-foreground/80 text-sm">
              Developed By <a href="https://bytetechnik.de" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors underline">ByteTechnik.de</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsConditions;
