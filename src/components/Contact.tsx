import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t("getInTouch")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("getInTouchDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <MapPin className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">{t("location")}</h3>
            <p className="text-muted-foreground">
              Nirpodi Purbopara near Bridge<br />
              Sabdi, Bondorm Narayonganj
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <Phone className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">{t("phone")}</h3>
            <p className="text-muted-foreground">
              +880 1911862666
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <Mail className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">{t("email")}</h3>
            <p className="text-muted-foreground">
              sabditurfzone@gmail.com
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">{t("hours")}</h3>
            <p className="text-muted-foreground">
              {t("everyDay")}<br />
              6:00 AM - 3:00 AM
            </p>
          </Card>
        </div>

        {/* Google Maps Embed */}
        <div className="w-full rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4337.210855557411!2d90.54415619999999!3d23.5900765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b3004b9ccb6d%3A0x6f5bb6a591bc4b3f!2ssabdi%20turf%20zone!5e1!3m2!1sen!2sde!4v1763318080764!5m2!1sen!2sde"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
