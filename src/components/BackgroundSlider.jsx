import React, { useState, useEffect } from "react";
import "../Style/pages.css";

const BackgroundSlider = ({ images, duration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);

    return () => clearInterval(interval);
  }, [images, duration]);

  return (
    <div
      className="background-slider"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    ></div>
  );
};

export default BackgroundSlider;
