import React, { useState, useEffect, useRef, useCallback } from "react";
import { MovingText, MovingTextProvider } from "./MovingText_2";
import RandomPlace from "@/app/skills/components/RandomPlace";

const TARGET_WORDS = [
  { text: "Portfolio", size: "p-10 text-8xl font-bold" },
  { text: "about", size: "text-4xl" },
  { text: "works", size: "text-4xl" },
  { text: "skills", size: "text-4xl" },
];

interface Position {
  x: number;
  y: number;
  width: number;
  height: number;
}

const TextPuzzle = () => {
  const [completedWords, setCompletedWords] = useState(new Set<string>());
  const targetRefs = useRef<Array<React.RefObject<HTMLParagraphElement>>>(
    TARGET_WORDS.map(() => React.createRef<HTMLParagraphElement>())
  );

  const checkPosition = useCallback((index: number, position: Position) => {
    const targetRect =
      targetRefs.current[index].current?.getBoundingClientRect();
    if (!targetRect) return;

    const targetX = targetRect.x + targetRect.width / 2;
    const targetY = targetRect.y + targetRect.height / 2;

    const tolerancePosition =
      Math.max(targetRect.width, targetRect.height) * 0.4;
    const toleranceSize = 0.4; // 20% tolerance for size

    const isPositionCorrect =
      Math.abs(position.x - targetX) < tolerancePosition &&
      Math.abs(position.y - targetY) < tolerancePosition;

    const isSizeCorrect =
      Math.abs(position.width - targetRect.width) / targetRect.width <
        toleranceSize &&
      Math.abs(position.height - targetRect.height) / targetRect.height <
        toleranceSize;

    if (isPositionCorrect && isSizeCorrect) {
      setCompletedWords((prev) => new Set(prev).add(TARGET_WORDS[index].text));
    }
  }, []);

  const handlePositionUpdate = useCallback(
    (target: string, position: Position) => {
      const index = TARGET_WORDS.findIndex((word) => word.text === target);
      if (index !== -1) {
        checkPosition(index, position);
      }
    },
    [checkPosition]
  );

  return (
    <MovingTextProvider>
      <div className="relative w-screen h-screen overflow-hidden">
        {/* 目標位置の灰色の文字 */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-12 text-gray-300 pointer-events-none">
          {TARGET_WORDS.map((word, index) => (
            <p
              key={word.text}
              ref={targetRefs.current[index]}
              className={`${word.size} ${
                completedWords.has(word.text)
                  ? "text-black pointer-events-auto"
                  : ""
              }`}
            >
              {completedWords.has(word.text) ? (
                <a href={`/${word.text.toLowerCase()}`}>{word.text}</a>
              ) : (
                word.text
              )}
            </p>
          ))}
        </div>

        {/* Movable words */}
        {TARGET_WORDS.map(
          (word) =>
            !completedWords.has(word.text) && (
              <RandomPlace key={word.text}>
                <MovingText
                  target={word.text}
                  show={true}
                  onPositionUpdate={(position) =>
                    handlePositionUpdate(word.text, position)
                  }
                />
              </RandomPlace>
            )
        )}
      </div>
    </MovingTextProvider>
  );
};

export default TextPuzzle;
