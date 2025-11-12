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
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg"
    >
      <Languages className="mr-2 h-4 w-4" />
      {language === "en" ? "বাংলা" : "English"}
    </Button>
  );
};

export default LanguageToggle;
