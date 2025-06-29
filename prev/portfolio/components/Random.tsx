// RandomPlace.tsx
import React, { useState, useEffect, ReactNode } from "react";

interface RandomPosition {
  top: number;
  left: number;
}

interface RandomPlaceProps {
  children: ReactNode;
  onPositionChange?: (position: RandomPosition) => void;
}

const RandomPlace: React.FC<RandomPlaceProps> = ({
  children,
  onPositionChange,
}) => {
  const [position, setPosition] = useState<RandomPosition>(() => {
    const top = Math.random() * (window.innerHeight - 100);
    const left = Math.random() * (window.innerWidth - 100);
    return { top, left };
  });

  useEffect(() => {
    if (onPositionChange) {
      onPositionChange(position);
    }
  }, [position, onPositionChange]);

  useEffect(() => {
    const handleResize = () => {
      const top = Math.random() * (window.innerHeight - 100);
      const left = Math.random() * (window.innerWidth - 100);
      setPosition({ top, left });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {children}
    </div>
  );
};

export default RandomPlace;
