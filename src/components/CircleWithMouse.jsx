import React, { useEffect, useRef } from "react";
import "../Style/circleWithBall.css";

const CircleWithMouse = () => {
  const circleRef = useRef(null); // Reference for the circle
  const ballRef = useRef(null); // Reference for the ball

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
  
      const circle = circleRef.current;
      circle.style.transform = `translate(${mouseX - 50}px, ${mouseY - 50}px)`;
  
      const ball = ballRef.current;
      ball.style.transform = `translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px)`;
    };
  
    document.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  

  return (
    <div ref={circleRef} id="circle">
      <div ref={ballRef} id="ball"></div>
    </div>
  );
};

export default CircleWithMouse;
