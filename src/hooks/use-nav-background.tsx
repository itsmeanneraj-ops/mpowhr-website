import { useState, useEffect } from "react";

export const useNavBackground = () => {
  const [isInImagineSection, setIsInImagineSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const imagineSection = document.getElementById("imagine-section");
      if (!imagineSection) return;

      const rect = imagineSection.getBoundingClientRect();
      const navHeight = 80; // Approximate navigation height

      // Check if the section is in view considering the navigation height
      const isVisible = rect.top <= navHeight && rect.bottom >= navHeight;

      setIsInImagineSection(isVisible);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Check initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isInImagineSection };
};
