"use client";

import { AnimatePresence, motion } from "framer-motion";
import { transitionVariantsPage } from "@/utils/motion-transition";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const TransitionPage = () => {
  const [step, setStep] = useState<"typing" | "slide" | "done">("typing");

  useEffect(() => {
    const typingDuration = 1200; // antes 2500
    const slideDelay = 200; // antes 500
    const slideDuration = 600; // antes 800

    const timers = [
      setTimeout(() => setStep("slide"), typingDuration + slideDelay),
      setTimeout(
        () => setStep("done"),
        typingDuration + slideDelay + slideDuration
      ),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (step === "done") return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="transition-wrapper"
        className="fixed inset-0 z-[9999] bg-[#262726] flex justify-center items-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {step === "typing" && (
          <TypeAnimation
            sequence={["MDTEC CODE...", 1000]}
            wrapper="span"
            speed={50}
            className="text-white text-xl md:text-3xl font-mono"
            cursor={true}
            repeat={0}
          />
        )}

        {step === "slide" && (
          <motion.div
            className="absolute top-0 bottom-0 left-0 right-0 bg-[#070707]"
            variants={transitionVariantsPage}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionPage;
