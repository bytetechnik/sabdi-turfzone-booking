import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-turf.jpg";
import cricketImage from "@/assets/cricket.jpg";
import footballImage from "@/assets/football.jpg";

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: heroImage, alt: "Premium Turf Field" },
    { src: cricketImage, alt: "Cricket Turf" },
    { src: footballImage, alt: "Football Turf" },
    { src: heroImage, alt: "Night View" },
    { src: cricketImage, alt: "Practice Session" },
    { src: footballImage, alt: "Match Day" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">{t("gallery")}</h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              {t("galleryDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-semibold">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
