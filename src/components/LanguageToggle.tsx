import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "bn" : "en")}
      className="fixed top-24 right-4 z-40 bg-black/80 backdrop-blur-md border border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-lg text-white"
    >
      <Languages className="mr-2 h-4 w-4" />
      {language === "en" ? "বাংলা" : "English"}
    </Button>
  );
};

export default LanguageToggle;
