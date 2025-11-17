import { useLanguage } from "@/contexts/LanguageContext";
import { NavLink } from "@/components/NavLink";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Facilities from "@/components/Facilities";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "8801911862666";
    const message = encodeURIComponent(
      t("whatsappMessage") || "Hello! I would like to book a turf."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/sabditurfzone", "_blank");
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Facilities />
      <Pricing />
      
      <section id="booking" className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t("bookYourTurf")}</h2>
            <p className="text-muted-foreground text-lg">
              {t("bookingDesc") || "Book your turf easily via WhatsApp or Facebook"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button
              onClick={handleWhatsAppClick}
              className="h-24 bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <MessageCircle className="h-8 w-8" />
              <span>{t("bookViaWhatsApp") || "Book via WhatsApp"}</span>
            </Button>

            <Button
              onClick={handleFacebookClick}
              className="h-24 bg-[#1877F2] hover:bg-[#166FE5] text-white text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <Facebook className="h-8 w-8" />
              <span>{t("bookViaFacebook") || "Book via Facebook"}</span>
            </Button>
          </div>
        </div>
      </section>

      <FAQ />
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

    </main>
  );
};

export default Index;
