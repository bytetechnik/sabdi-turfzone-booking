import { useLanguage } from "@/contexts/LanguageContext";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

const ContactPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
