import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-turf.jpg";
import cricketImage from "@/assets/cricket.jpg";
import footballImage from "@/assets/football.jpg";
import turfNight1 from "@/assets/turf-night-1.jpeg";
import turfNight2 from "@/assets/turf-night-2.jpeg";
import turfNight3 from "@/assets/turf-night-3.jpeg";
import turfNight4 from "@/assets/turf-night-4.jpeg";
import turfNight5 from "@/assets/turf-night-5.jpeg";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    { src: heroImage, alt: "Premium Turf Field" },
    { src: cricketImage, alt: "Cricket Turf" },
    { src: footballImage, alt: "Football Turf" },
    { src: turfNight1, alt: "Turf Field at Night - Illuminated View" },
    { src: turfNight2, alt: "Turf Field at Night - Group Activity" },
    { src: turfNight3, alt: "Turf Field at Night - Wide Angle View" },
    { src: turfNight4, alt: "Turf Field at Night - Enclosed Facility" },
    { src: turfNight5, alt: "Turf Field at Night - Evening Match" },
  ];

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1;
      setSelectedImageIndex(newIndex);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0;
      setSelectedImageIndex(newIndex);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (selectedImageIndex !== null) {
          const newIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : images.length - 1;
          setSelectedImageIndex(newIndex);
        }
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        if (selectedImageIndex !== null) {
          const newIndex = selectedImageIndex < images.length - 1 ? selectedImageIndex + 1 : 0;
          setSelectedImageIndex(newIndex);
        }
      } else if (e.key === "Escape") {
        closeImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedImageIndex, images.length]);

  const currentImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

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
                onClick={() => openImage(index)}
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

      {/* Full Screen Image Viewer */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none [&>button]:hidden">
          {currentImage && (
            <div className="relative w-full h-full flex items-center justify-center min-h-[80vh]">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
                onClick={closeImage}
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Previous Button */}
              {images.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 z-50 text-white hover:bg-white/20 rounded-full"
                  onClick={goToPrevious}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
              )}

              {/* Next Button */}
              {images.length > 1 && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 z-50 text-white hover:bg-white/20 rounded-full"
                  onClick={goToNext}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>
              )}

              {/* Image */}
              <div className="w-full h-full flex items-center justify-center p-4">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold">{currentImage.alt}</p>
                {images.length > 1 && (
                  <p className="text-xs text-white/70 mt-1">
                    {selectedImageIndex! + 1} / {images.length}
                  </p>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
