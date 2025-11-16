import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";

const LanguageButton = () => {
  const { t, language, setLanguage } = useLanguage();
  
  const handleLanguageToggle = () => {
    setLanguage(language === "en" ? "bn" : "en");
  };

  return (
    <Button
      onClick={handleLanguageToggle}
      className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl p-0 flex items-center justify-center group transition-all duration-300 hover:scale-110"
      aria-label="Toggle Language"
    >
      <Languages className="h-7 w-7 text-white" />
      <span className="absolute right-16 bg-background text-foreground px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">
        {language === "en" ? "বাংলা" : "English"}
      </span>
    </Button>
  );
};

export default LanguageButton;

