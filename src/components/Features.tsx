import { Card } from "@/components/ui/card";
import { Shield, Zap, Users, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "High-grade artificial turf for the best playing experience",
    },
    {
      icon: Zap,
      title: "Floodlights",
      description: "Professional lighting for evening and night matches",
    },
    {
      icon: Users,
      title: "Changing Rooms",
      description: "Clean and spacious facilities for teams",
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Book slots from 6 AM to 10 PM every day",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Sabdi TurfZone?</h2>
          <p className="text-muted-foreground text-lg">
            Experience the best sports facilities in the city
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-card-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
