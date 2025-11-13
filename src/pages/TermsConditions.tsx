import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";

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
    </div>
  );
};

export default TermsConditions;
