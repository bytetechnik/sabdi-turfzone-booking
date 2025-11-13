import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-turf.jpg";
import cricketImage from "@/assets/cricket.jpg";
import footballImage from "@/assets/football.jpg";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: heroImage, alt: "Premium Turf Field" },
    { image: cricketImage, alt: "Cricket Turf" },
    { image: footballImage, alt: "Football Turf" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110 animate-subtle-zoom"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          </div>
        ))}
        
        {/* Modern Gradient Overlay with Mesh Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-primary/95 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] z-10" />
      </div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-8 bg-primary-foreground" 
                : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto";
        {/* Decorative Element */}
        <div className="w-20 h-1 bg-accent mx-auto mb-8 animate-expand" />
        
        <h1 className="text-6xl md:text-8xl font-black text-primary-foreground mb-6 animate-fade-in tracking-tight">
          {t("heroTitle")}
        </h1>
        
        <p className="text-xl md:text-3xl text-primary-foreground/95 mb-12 animate-fade-in-delay font-light tracking-wide">
          {t("heroSubtitle")}
        </p>
        
        <Button 
          size="lg" 
          onClick={scrollToBooking}
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-7 text-xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 rounded-full group"
        >
          {t("bookNow")}
          <ChevronDown className="ml-2 h-5 w-5 animate-bounce group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }
        
        @keyframes subtle-zoom {
          0%, 100% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.3s both;
        }
        
        .animate-expand {
          animation: expand 1s ease-out 0.5s both;
        }
        
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
