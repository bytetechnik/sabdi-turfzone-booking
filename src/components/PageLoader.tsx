import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { useLoading } from "@/contexts/LoadingContext";

const PageLoader = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show logo centered for a moment
    const showTimer = setTimeout(() => {
      // Start both logo animation and background fade-out simultaneously
      setIsAnimating(true);
      setIsFadingOut(true);
    }, 1000);

    // Hide loader after both animations complete (1000ms start + 1500ms transition = 2500ms)
    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{
        backgroundColor: "#000000",
        clipPath: isFadingOut ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
        transition: "clip-path 1.5s ease-in-out",
      }}
    >
      <img
        src={logo}
        alt="Sabdi TurfZone"
        className={`object-contain absolute transition-all duration-[1500ms] ${
          isAnimating 
            ? "h-20 w-20 md:h-24 md:w-24 top-0" 
            : "h-32 w-32 md:h-40 md:w-40 top-1/2 left-1/2 animate-pulse"
        }`}
        style={{
          left: isAnimating 
            ? "max(1rem, calc((100vw - min(100vw, 80rem)) / 2 + 1rem))"
            : "50%",
          transform: isAnimating 
            ? "translate(0, 0)" 
            : "translate(-50%, -50%)",
          transformOrigin: "center center",
          transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />
    </div>
  );
};

export default PageLoader;

