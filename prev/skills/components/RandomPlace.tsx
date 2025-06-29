// app/components/RandomPlace.tsx
import React, { useState, useEffect, ReactNode } from "react";

interface RandomPlaceProps {
  children: ReactNode;
}

const RandomPlace: React.FC<RandomPlaceProps> = ({ children }) => {
  const [position, setPosition] = useState({ top: 0, left: 0, size: 50 });

  useEffect(() => {
    const updatePosition = () => {
      const top = Math.random() * (window.innerHeight - 100);
      const left = Math.random() * (window.innerWidth - 100);
      const size = Math.floor(Math.random() * (200 - 50)) + 50;
      setPosition({ top, left, size });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        fontSize: `${position.size}px`,
      }}
    >
      {children}
    </div>
  );
};

export default RandomPlace;
