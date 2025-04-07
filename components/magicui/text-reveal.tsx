"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ComponentPropsWithoutRef, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]">
        <span
          ref={targetRef}
          className="flex flex-wrap p-5 text-3xl font-bold text-right md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // Interpolar color de gris a blanco
  const color = useTransform(progress, range, ["#4d4c4c", "#FFFFFF"]);

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      {/* Texto en gris inicial (sin animación) */}
      <span className="absolute text-gray-500 opacity-40">{children}</span>

      {/* Texto animado de gris a blanco */}
      <motion.span style={{ color }} className="relative">
        {children}
      </motion.span>
    </span>
  );
};
