"use client";

import React, { useState } from "react";
import { CoverParticles } from "@/components/cover-particles";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Terminal } from "./Terminal";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [introComplete, setIntroComplete] = useState(false);
  return (
    <main className="container mx-auto px-4 pt-8">
      <CoverParticles />
      <div className="relative mx-auto max-w-6xl rounded-3xl border border-gray-800  p-8">
        <div className="absolute left-8 top-4 flex gap-2">
          <div className="h-4 w-4 rounded-full bg-gray-800"></div>
          <div className="h-4 w-4 rounded-full bg-gray-500"></div>
          <div className="h-4 w-4 rounded-full bg-gray-500"></div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-xl pt-8">
            <h1 className="text-6xl font-bold leading-tight md:text-6xl lg:text-7xl">
              <TypingAnimation className="text-5xl   bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-800">
                Impulsamos el crecimiento Digital
              </TypingAnimation>
            </h1>
            {/* <p className="mt-6 text-lg text-gray-300">
              MDTEC es una Startup especializada en el desarrollo de productos
              digitales y aplicaciones web, brindando soluciones innovadoras
              para empresas y emprendedores.
            </p> */}
          </div>

          <div className="w-full max-w-md">
            <Terminal
              text="Hola Mundo! Soy MDTEC, una startup dedicada a la creación de productos digitales. ¿En qué puedo ayudarte hoy?"
              typingSpeed={40}
              className="max-w-3xl mx-auto"
              onComplete={() => setIntroComplete(true)}
            />

            {introComplete && (
              <div className="mt-8 flex justify-center">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-sky-800 hover:bg-primary/20 text-white px-4 py-2 rounded-md transition-colors border border-primary/30"
                >
                  Ver mas sobre los servicios <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
