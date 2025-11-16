import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import LanguageButton from "@/components/LanguageButton";
import PageLoader from "@/components/PageLoader";
import Index from "./pages/Index";
import About from "./pages/About";
import Amenities from "./pages/Amenities";
import Gallery from "./pages/Gallery";
import ContactPage from "./pages/ContactPage";
import Pricing from "./pages/Pricing";
import Facilities from "./pages/Facilities";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <LoadingProvider>
        <TooltipProvider>
        <PageLoader />
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* Global Floating Buttons */}
        <WhatsAppButton />
        <LanguageButton />
      </BrowserRouter>
    </TooltipProvider>
    </LoadingProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
