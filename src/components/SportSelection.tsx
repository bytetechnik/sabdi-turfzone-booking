import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import cricketImage from "@/assets/cricket.jpg";
import footballImage from "@/assets/football.jpg";

interface SportSelectionProps {
  selectedSport: string | null;
  onSelectSport: (sport: string) => void;
}

const SportSelection = ({ selectedSport, onSelectSport }: SportSelectionProps) => {
  const { t } = useLanguage();
  
  const sports = [
    {
      id: "cricket",
      name: t("cricket"),
      image: cricketImage,
      description: t("cricketDesc"),
    },
    {
      id: "football",
      name: t("football"),
      image: footballImage,
      description: t("footballDesc"),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      {sports.map((sport) => (
        <Card
          key={sport.id}
          className={`cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-xl ${
            selectedSport === sport.id
              ? "ring-4 ring-primary shadow-xl scale-105"
              : "hover:scale-102"
          }`}
          onClick={() => onSelectSport(sport.id)}
        >
          <div className="relative h-64 overflow-hidden">
            <img
              src={sport.image}
              alt={sport.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-3xl font-bold text-white mb-2">{sport.name}</h3>
              <p className="text-white/90">{sport.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SportSelection;
