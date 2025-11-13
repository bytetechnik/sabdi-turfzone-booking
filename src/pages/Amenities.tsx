import { useLanguage } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Shirt, ParkingCircle, Lightbulb, Droplets, Heart, Bath } from "lucide-react";
import Navbar from "@/components/Navbar";

const Amenities = () => {
  const { t } = useLanguage();

  const amenities = [
    {
      icon: Shirt,
      title: t("changingRooms"),
      description: t("changingRoomsDesc"),
    },
    {
      icon: ParkingCircle,
      title: t("parking"),
      description: t("parkingDesc"),
    },
    {
      icon: Lightbulb,
      title: t("lighting"),
      description: t("lightingDesc"),
    },
    {
      icon: Bath,
      title: t("restrooms"),
      description: t("restroomsDesc"),
    },
    {
      icon: Droplets,
      title: t("drinkingWater"),
      description: t("drinkingWaterDesc"),
    },
    {
      icon: Heart,
      title: t("firstAid"),
      description: t("firstAidDesc"),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("amenities")}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("amenitiesDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <amenity.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">{amenity.title}</h3>
                <p className="text-muted-foreground">{amenity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Amenities;
