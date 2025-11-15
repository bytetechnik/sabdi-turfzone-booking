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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              info@sabditurfzone.com<br />
              booking@sabditurfzone.com
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <Clock className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold mb-2 text-card-foreground">{t("hours")}</h3>
            <p className="text-muted-foreground">
              {t("everyDay")}<br />
              6:00 AM - 10:00 PM
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
