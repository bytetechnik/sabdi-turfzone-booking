import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "8801911862666"; // WhatsApp number
    const message = encodeURIComponent(
      t("whatsappMessage")
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-2xl p-0 flex items-center justify-center group transition-all duration-300 hover:scale-110"
      aria-label="Book via WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" />
      <span className="absolute right-16 bg-background text-foreground px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-semibold">
        {t("bookViaWhatsApp")}
      </span>
    </Button>
  );
};

export default WhatsAppButton;
