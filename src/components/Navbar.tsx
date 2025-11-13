import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: t("home") },
    { to: "/about", label: t("aboutUs") },
    { to: "/amenities", label: t("amenities") },
    { to: "/gallery", label: t("gallery") },
    { to: "/contact", label: t("contactUs") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_-8px_rgba(139,92,246,0.3)]">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Gradient Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Sabdi TurfZone" className="h-14 w-14 object-contain" />
            <span className="text-xl font-bold text-white hidden sm:block">
              Sabdi TurfZone
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-white/80 hover:text-white transition-colors font-medium"
                activeClassName="text-primary font-bold"
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Language Toggle - Desktop */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "en" ? "bn" : "en")}
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-white"
            >
              <Languages className="mr-2 h-4 w-4" />
              {language === "en" ? "বাংলা" : "English"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 bg-black/95 backdrop-blur-lg shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="text-white/80 hover:text-white hover:bg-white/5 transition-all font-medium px-4 py-3 rounded-lg"
                  activeClassName="text-primary font-bold bg-primary/10 border border-primary/20"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              
              {/* Language Toggle - Mobile */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "bn" : "en")}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all text-white mx-4"
              >
                <Languages className="mr-2 h-4 w-4" />
                {language === "en" ? "বাংলা" : "English"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
