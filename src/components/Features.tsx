import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Zap, Users, Clock, Square, Award, Layers } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState, useCallback } from "react";

const Features = () => {
  const { t } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  
  const features = [
    {
      icon: Square,
      title: t("playgroundSize"),
      description: t("playgroundSizeDesc"),
    },
    {
      icon: Award,
      title: t("fifaCertified"),
      description: t("fifaCertifiedDesc"),
    },
    {
      icon: Layers,
      title: t("fifaQualityTurf"),
      description: t("fifaQualityTurfDesc"),
    },
    {
      icon: Shield,
      title: t("premiumQuality"),
      description: t("premiumQualityDesc"),
    },
    {
      icon: Zap,
      title: t("floodlights"),
      description: t("floodlightsDesc"),
    },
    {
      icon: Users,
      title: t("changingRooms"),
      description: t("changingRoomsDesc"),
    },
    {
      icon: Clock,
      title: t("flexibleTiming"),
      description: t("flexibleTimingDesc"),
    },
  ];

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality with smooth transitions
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [api, scrollNext]);

  return (
    <section className="py-20 bg-muted/50 overflow-hidden">
      <div className="w-full">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl font-bold mb-4 text-foreground">{t("whyChoose")}</h2>
          <p className="text-muted-foreground text-lg">
            {t("whyChooseDesc")}
          </p>
        </div>

        <div className="relative w-full px-8 md:px-12 lg:px-16 xl:px-20">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {features.map((feature, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-500 ease-in-out hover:scale-105 bg-card h-full mr-4">
                    <feature.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2 text-card-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index + 1 === current
                    ? "w-8 bg-primary"
                    : "w-2 bg-primary/50 hover:bg-primary/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
