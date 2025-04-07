"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterState {
  char: string;
  isMatrix: boolean;
  isSpace: boolean;
  isComplete: boolean;
}

interface MatrixTextProps {
  text?: string;
  className?: string;
  containerClassName?: string;
  letterClassName?: string;
  initialDelay?: number;
  letterAnimationDuration?: number;
  letterInterval?: number;
  matrixChars?: string[];
  matrixColor?: string;
  fontSize?:
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  onComplete?: () => void;
}

const DEFAULT_MATRIX_CHARS = ["0", "1"];
const DEFAULT_MATRIX_COLOR = "#0af60a";

export const MatrixText = ({
  text = "HelloWorld!",
  className = "",
  containerClassName = "",
  letterClassName = "",
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
  matrixChars = DEFAULT_MATRIX_CHARS,
  matrixColor = DEFAULT_MATRIX_COLOR,
  fontSize = "4xl",
  onComplete,
}: MatrixTextProps) => {
  const [letters, setLetters] = useState<LetterState[]>(() =>
    text.split("").map((char) => ({
      char,
      isMatrix: false,
      isSpace: char === " ",
      isComplete: false,
    }))
  );

  const [hasCompleted, setHasCompleted] = useState(false);

  const fontSizeClasses = {
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const getRandomChar = useCallback(
    () => matrixChars[Math.floor(Math.random() * matrixChars.length)],
    [matrixChars]
  );

  const animateLetter = useCallback(
    (index: number) => {
      if (index >= text.length || hasCompleted) return;

      requestAnimationFrame(() => {
        setLetters((prev) => {
          const newLetters = [...prev];
          if (!newLetters[index].isSpace) {
            newLetters[index] = {
              ...newLetters[index],
              char: getRandomChar(),
              isMatrix: true,
            };
          }
          return newLetters;
        });

        setTimeout(() => {
          setLetters((prev) => {
            const newLetters = [...prev];
            newLetters[index] = {
              ...newLetters[index],
              char: text[index],
              isMatrix: false,
              isComplete: true,
            };
            return newLetters;
          });

          if (index === text.length - 1) {
            setHasCompleted(true);
            onComplete?.();
          }
        }, letterAnimationDuration);
      });
    },
    [text, letterAnimationDuration, getRandomChar, onComplete, hasCompleted]
  );

  useEffect(() => {
    if (hasCompleted) return;

    const timer = setTimeout(() => {
      let currentIndex = 0;

      const animate = () => {
        if (currentIndex >= text.length || hasCompleted) return;
        animateLetter(currentIndex);
        currentIndex++;
        setTimeout(animate, letterInterval);
      };

      animate();
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [text, initialDelay, letterInterval, animateLetter, hasCompleted]);

  const motionVariants = useMemo(
    () => ({
      matrix: {
        color: matrixColor,
        textShadow: `0 2px 4px ${matrixColor}80`,
      },
      normal: {
        color: "inherit",
        textShadow: "none",
      },
    }),
    [matrixColor]
  );

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        containerClassName,
        className
      )}
      aria-label="Matrix text animation"
    >
      <div className={cn("flex items-center justify-center")}>
        <div className="flex flex-wrap items-center justify-center">
          {letters.map((letter, index) => (
            <motion.div
              key={`${index}-${letter.char}`}
              className={cn(
                "font-mono w-[1ch] text-center overflow-hidden",
                fontSizeClasses[fontSize],
                letterClassName
              )}
              animate={letter.isMatrix ? "matrix" : "normal"}
              variants={motionVariants}
              transition={{
                duration: 0.1,
                ease: "easeInOut",
              }}
              style={{
                display: "inline-block",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {letter.isSpace ? "\u00A0" : letter.char}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
