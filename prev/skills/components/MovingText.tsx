"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";
import Moveable from "react-moveable";
import keycon from "keycon";

declare global {
  interface Window {
    keycon: typeof keycon;
  }
}

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface PositionInfo {
  target: string;
  position: Position;
}

interface MovingTextContextType {
  addPosition: (info: PositionInfo) => void;
  removePosition: (target: string) => void;
  updatePosition: (info: PositionInfo) => void;
  getPositions: () => PositionInfo[];
}

const MovingTextContext = createContext<MovingTextContextType | null>(null);

export function MovingTextProvider({ children }: { children: ReactNode }) {
  const positionsRef = useRef<PositionInfo[]>([]);

  const addPosition = useCallback((info: PositionInfo) => {
    positionsRef.current = positionsRef.current.filter(
      (p) => p.target !== info.target
    );
    positionsRef.current.push(info);
  }, []);

  const removePosition = useCallback((target: string) => {
    positionsRef.current = positionsRef.current.filter(
      (p) => p.target !== target
    );
  }, []);

  const updatePosition = useCallback((info: PositionInfo) => {
    const index = positionsRef.current.findIndex(
      (p) => p.target === info.target
    );
    if (index !== -1) {
      positionsRef.current[index] = info;
    } else {
      positionsRef.current.push(info);
    }
  }, []);

  const getPositions = useCallback(() => {
    return [...positionsRef.current];
  }, []);

  const value = {
    addPosition,
    removePosition,
    updatePosition,
    getPositions,
  };

  return (
    <MovingTextContext.Provider value={value}>
      {children}
      <PositionDisplay />
    </MovingTextContext.Provider>
  );
}

function PositionDisplay() {
  const context = useContext(MovingTextContext);
  const [positions, setPositions] = useState<PositionInfo[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (context) {
        setPositions(context.getPositions());
      }
    }, 100); // Update every 100ms

    return () => clearInterval(intervalId);
  }, [context]);

  return (
    <div className="fixed bottom-4 left-4 flex flex-col space-y-2 bg-black bg-opacity-75 p-2 rounded z-50">
      {positions.map((info, index) => (
        <div key={index} className="text-white text-xs">
          {info.target}: X: {info.position.x}, Y: {info.position.y}, Size:{" "}
          {info.position.width} x {info.position.height}
        </div>
      ))}
    </div>
  );
}

interface MovingTextProps {
  target: string;
  className?: string;
  show?: boolean;
}

export function MovingText({ target, show }: MovingTextProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isShiftKeyPressed, setIsShiftKeyPressed] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const context = useContext(MovingTextContext);

  const updatePositionInfo = useCallback(() => {
    if (targetRef.current && show && context) {
      const rect = targetRef.current.getBoundingClientRect();
      const position = {
        x: Math.round(rect.left),
        y: Math.round(rect.top),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
      context.updatePosition({ target, position });
    }
  }, [show, target, context]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.keycon = keycon;
      keycon.setGlobal();

      const handleKeyDown = (e: KeyboardEvent) =>
        setIsShiftKeyPressed(e.shiftKey);
      const handleKeyUp = (e: KeyboardEvent) =>
        setIsShiftKeyPressed(e.shiftKey);

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      const handleClickOutside = (e: MouseEvent) => {
        if (
          targetRef.current &&
          !targetRef.current.contains(e.target as Node)
        ) {
          setIsActive(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  useEffect(() => {
    if (show && context) {
      updatePositionInfo();
      context.addPosition({
        target,
        position: { x: 0, y: 0, width: 0, height: 0 },
      });
    } else if (context) {
      context.removePosition(target);
    }
    return () => {
      if (show && context) {
        context.removePosition(target);
      }
    };
  }, [show, target, context, updatePositionInfo]);

  useEffect(() => {
    const handleResize = () => {
      if (show) {
        updatePositionInfo();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [show, updatePositionInfo]);

  const Content = () => (
    <span className="transform transition-transform duration-300 hover:underline cursor-move">
      {target}
    </span>
  );

  return (
    <div className="relative">
      <div
        ref={targetRef}
        className={`absolute inline-block ${target} target scalable`}
        onClick={() => setIsActive(true)}
      >
        <Content />
      </div>
      <Moveable
        target={targetRef}
        scalable={isActive}
        keepRatio={true}
        draggable={true}
        snappable={true}
        hideDefaultLines={!isActive}
        origin={false}
        onScaleStart={(e) => {
          e.setFixedDirection([0, 0]);
        }}
        onDrag={(e) => {
          if (e.target instanceof HTMLElement) {
            e.target.style.transform = e.transform;
            updatePositionInfo();
          }
        }}
        onBeforeScale={(e) => {
          if (isShiftKeyPressed) {
            e.setFixedDirection([-1, -1]);
          } else {
            e.setFixedDirection([0, 0]);
          }
        }}
        onScale={(e) => {
          if (e.target instanceof HTMLElement) {
            e.target.style.transform = e.drag.transform;
            updatePositionInfo();
          }
        }}
        padding={{
          left: 10,
          right: 10,
          top: 10,
          bottom: 10,
        }}
      />
    </div>
  );
}

export default MovingText;
