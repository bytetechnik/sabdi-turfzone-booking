import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { useLoading } from "@/contexts/LoadingContext";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const { isLoading } = useLoading();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: t("home") },
    { to: "/pricing", label: t("pricing") },
    { to: "/gallery", label: t("gallery") },
    { to: "/contact", label: t("contactUs") },
  ];

  const handleBookingClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    setIsOpen(false);
    
    // If we're not on the home page, navigate first
    if (window.location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        const bookingSection = document.getElementById("booking");
        if (bookingSection) {
          bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // We're already on home page, just scroll
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_24px_-8px_rgba(139,92,246,0.3)]">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Gradient Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        <div className="flex items-center justify-between h-20">
          {/* Logo - Home Link */}
          <NavLink 
            to="/" 
            className={`flex items-center transition-all duration-300 hover:opacity-80 ${isLoading ? "opacity-0" : "opacity-100"}`}
            title={t("home")}
          >
            <img src={logo} alt="Sabdi TurfZone" className="h-20 w-20 md:h-24 md:w-24 object-contain cursor-pointer" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home */}
            <NavLink
              to="/"
              className="text-white/80 hover:text-white transition-colors font-medium"
              activeClassName="text-primary font-bold"
            >
              {t("home")}
            </NavLink>
            
            {/* About Us Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-white/80 hover:text-white transition-colors font-medium flex items-center gap-1">
                  {t("aboutUs")}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/95 backdrop-blur-md border border-white/20 text-white">
                <DropdownMenuItem 
                  onClick={() => navigate("/about")}
                  className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  {t("aboutUs")}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => navigate("/amenities")}
                  className="text-white/80 hover:text-white hover:bg-white/10 cursor-pointer"
                >
                  {t("amenities")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Pricing, Gallery, Contact */}
            {navItems.slice(1).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="text-white/80 hover:text-white transition-colors font-medium"
                activeClassName="text-primary font-bold"
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Booking CTA */}
            <Button
              onClick={handleBookingClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t("bookYourTurf")}
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
              {/* Home */}
              <NavLink
                to="/"
                className="text-white/80 hover:text-white hover:bg-white/5 transition-all font-medium px-4 py-3 rounded-lg"
                activeClassName="text-primary font-bold bg-primary/10 border border-primary/20"
                onClick={() => setIsOpen(false)}
              >
                {t("home")}
              </NavLink>
              
              {/* About Us */}
              <NavLink
                to="/about"
                className="text-white/80 hover:text-white hover:bg-white/5 transition-all font-medium px-4 py-3 rounded-lg"
                activeClassName="text-primary font-bold bg-primary/10 border border-primary/20"
                onClick={() => setIsOpen(false)}
              >
                {t("aboutUs")}
              </NavLink>
              
              {/* Amenities & Facilities */}
              <NavLink
                to="/amenities"
                className="text-white/80 hover:text-white hover:bg-white/5 transition-all font-medium px-4 py-3 rounded-lg"
                activeClassName="text-primary font-bold bg-primary/10 border border-primary/20"
                onClick={() => setIsOpen(false)}
              >
                {t("amenities")}
              </NavLink>
              
              {/* Pricing, Gallery, Contact */}
              {navItems.slice(1).map((item) => (
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
              
              {/* Booking CTA - Mobile */}
              <Button
                onClick={handleBookingClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg mx-4"
              >
                {t("bookYourTurf")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
