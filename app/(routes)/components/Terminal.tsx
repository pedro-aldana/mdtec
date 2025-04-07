"use client";

import { useEffect, useState, useMemo } from "react";

interface TerminalProps {
  text: string;
  typingSpeed?: number;
  className?: string;
  showPrompt?: boolean;
  cursor?: string;
  blinkCursor?: boolean;
  onComplete?: () => void;
}

export function Terminal({
  text,
  typingSpeed = 70,
  className = "",
  showPrompt = true,
  cursor = "|",
  blinkCursor = true,
  onComplete,
}: TerminalProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingActive, setIsTypingActive] = useState(true);

  useEffect(() => {
    if (currentIndex >= text.length) {
      setIsTypingActive(false);
      onComplete?.();
      return;
    }

    const typingTimeout = setTimeout(() => {
      setDisplayedText(text.substring(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentIndex, text, typingSpeed, onComplete]);

  const cursorElement = useMemo(
    () => (
      <span className={`terminal-cursor ${blinkCursor ? "blink" : ""}`}>
        {cursor}
      </span>
    ),
    [blinkCursor, cursor]
  );

  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red" />
        <div className="terminal-button terminal-button-yellow" />
        <div className="terminal-button terminal-button-green" />
        <div className="terminal-title">terminal</div>
      </div>
      <div className="terminal-content">
        {showPrompt && <span className="text-primary">$ </span>}
        <span>{displayedText}</span>
        {isTypingActive && cursorElement}
      </div>
    </div>
  );
}
