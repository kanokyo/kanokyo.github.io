import React, { useState, useCallback, ReactNode } from "react";

interface MousePressingProps {
  children: ReactNode;
  pressedContent: ReactNode;
  className?: string;
  pressedClassName?: string;
  onLongPress?: () => void;
  longPressDelay?: number;
}

const MousePressing: React.FC<MousePressingProps> = ({
  children,
  pressedContent,
  className = "",
  pressedClassName = "pressed",
  onLongPress,
  longPressDelay = 1000,
}) => {
  const [pressing, setPressing] = useState(false);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startPressing = useCallback(() => {
    setPressing(true);
    timerRef.current = setTimeout(() => {
      if (onLongPress) {
        onLongPress();
      }
    }, longPressDelay);
  }, [onLongPress, longPressDelay]);

  const stopPressing = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setPressing(false);
  }, []);

  return (
    <div
      className={`${className} ${pressing ? pressedClassName : ""}`}
      onMouseDown={startPressing}
      onMouseUp={stopPressing}
      onMouseLeave={stopPressing}
      onTouchStart={startPressing}
      onTouchEnd={stopPressing}
    >
      {pressing ? pressedContent : children}
    </div>
  );
};

export default MousePressing;
