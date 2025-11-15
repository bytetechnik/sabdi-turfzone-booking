import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Camera, 
  Package, 
  ParkingCircle, 
  Building2, 
  Bath, 
  Shirt, 
  CircleDot, 
  Lock, 
  Droplets, 
  Bus, 
  Heart 
} from "lucide-react";

const Facilities = () => {
  const { t } = useLanguage();
  
  const facilities = [
    {
      icon: Camera,
      title: t("cctvMonitoring"),
      description: t("cctvMonitoringDesc"),
    },
    {
      icon: Package,
      title: t("footballGlovesProvided"),
      description: t("footballGlovesProvidedDesc"),
    },
    {
      icon: ParkingCircle,
      title: t("freeParking"),
      description: t("freeParkingDesc"),
    },
    {
      icon: Building2,
      title: t("dugoutFacilities"),
      description: t("dugoutFacilitiesDesc"),
    },
    {
      icon: Bath,
      title: t("washroom"),
      description: t("washroomDesc"),
    },
    {
      icon: Shirt,
      title: t("changingRoom"),
      description: t("changingRoomDesc"),
    },
    {
      icon: CircleDot,
      title: t("prayerRoom"),
      description: t("prayerRoomDesc"),
    },
    {
      icon: Lock,
      title: t("lockerRoom"),
      description: t("lockerRoomDesc"),
    },
    {
      icon: Droplets,
      title: t("waterSalinePerSlot"),
      description: t("waterSalinePerSlotDesc"),
    },
    {
      icon: Bus,
      title: t("transportFacilities"),
      description: t("transportFacilitiesDesc"),
    },
    {
      icon: Heart,
      title: t("medicalFacilities"),
      description: t("medicalFacilitiesDesc"),
    },
  ];

  return (
    <section id="facilities" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t("facilitiesTitle")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("facilitiesDesc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <facility.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-card-foreground">{facility.title}</h3>
              <p className="text-muted-foreground">{facility.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;

