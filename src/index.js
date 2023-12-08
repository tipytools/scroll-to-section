import { useEffect } from "react";

const useScrollToSection = (sectionID) => {
  useEffect(() => {
    const scrollToSection = () => {
      const targetElement = document.getElementById(sectionID);

      if (targetElement) {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        targetElement.scrollIntoView({
          behavior: isMobile ? "auto" : "smooth",
        });
      }
    };

    scrollToSection();
  }, [sectionID]);
};

export default useScrollToSection;
