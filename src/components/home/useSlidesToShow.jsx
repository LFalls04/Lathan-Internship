import { useState, useEffect } from "react";

const useSlidesToShow = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width >= 1120) {
        setSlidesToShow(4);
      } else if (width >= 768) {
        setSlidesToShow(3);
      } else if (width >= 550) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    // Initialize and listen for window resize
    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return slidesToShow;
};

export default useSlidesToShow;
