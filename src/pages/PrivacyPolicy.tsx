import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import { NavLink } from "@/components/NavLink";

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-8 text-foreground">{t("privacyPolicy")}</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information Collection</h2>
              <p>We collect information you provide when booking our turf facilities, including your name, contact details, and booking preferences.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Use of Information</h2>
              <p>Your information is used to process bookings, communicate with you about your reservations, and improve our services.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Protection</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access or disclosure.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p>If you have any questions about our privacy policy, please contact us at sabditurfzone@gmail.com</p>
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

export default PrivacyPolicy;
