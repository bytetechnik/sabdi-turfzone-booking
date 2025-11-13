import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

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
              <p>If you have any questions about our privacy policy, please contact us at info@sabditurfzone.com</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
