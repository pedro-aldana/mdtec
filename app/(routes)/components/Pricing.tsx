"use client";

import type React from "react";
import type { ReactNode, CSSProperties } from "react";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const DarkPricing = () => {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-zinc-200 selection:bg-zinc-600">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Precios
          </h2>
          <p className="text-center text-base text-zinc-400 md:text-lg">
            Use it for free for yourself, upgrade when your team needs advanced
            control.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PriceCard
            tier="Landing Page Profesional"
            price="$130 USD"
            bestFor="Emprendedores, pequeñas empresas y freelancers que necesitan una página de alto impacto"
            CTA={
              <GhostButton className="w-full">
                Quiero mi Landing Page
              </GhostButton>
            }
            benefits={[
              {
                text: "Diseño moderno y responsive (adaptable a móviles)",
                checked: true,
              },
              {
                text: "Optimizada para conversiones (CTA efectivos)",
                checked: true,
              },
              {
                text: "Integración con redes sociales y analytics",
                checked: true,
              },
              { text: "Formulario de contacto funcional", checked: true },
              { text: "Hosting Gratuito", checked: true },
            ]}
          />
          <PriceCard
            tier="Sitio Web Profesional (4 páginas)"
            price="$300 USD"
            bestFor="Pequeñas empresas, freelancers o proyectos que necesitan presencia online"
            CTA={
              <GhostButton className="w-full bg-zinc-50 text-zinc-950 hover:bg-zinc-200 hover:text-zinc-900">
                ¡Quiero mi Sitio Web!
              </GhostButton>
            }
            benefits={[
              {
                text: "4 páginas 100% personalizadas (sin plantillas genéricas)",
                checked: true,
              },
              {
                text: "SEO básico incluido (para aparecer en Google)",
                checked: true,
              },
              {
                text: " Galería de imágenes o portafolio (opcional)",
                checked: true,
              },
              { text: "Soporte prioritario por WhatsApp", checked: true },
              {
                text: "Mantenimiento mensual (consulta por costos adicionales)",
                checked: false,
              },
            ]}
          />
          <PriceCard
            tier="Solución Premium Personalizada"
            price="$Customizado"
            bestFor="proyectos complejos que requieren soluciones personalizadas"
            CTA={
              <GhostButton className="w-full">¡Cotizar Proyecto!</GhostButton>
            }
            benefits={[{ text: "totalmente personalizado", checked: true }]}
          />
        </div>
      </div>
    </section>
  );
};

const PriceCard = ({ tier, price, bestFor, CTA, benefits }: PriceCardProps) => {
  return (
    <Card>
      <div className="flex flex-col items-center border-b border-zinc-700 pb-6">
        <span className="mb-6 inline-block text-zinc-50">{tier}</span>
        <span className="mb-3 inline-block text-4xl font-medium ">{price}</span>
        <span className="bg-gradient-to-br from-zinc-200 to-zinc-500 bg-clip-text text-center text-transparent">
          {bestFor}
        </span>
      </div>

      <div className="space-y-4 py-9">
        {benefits.map((b, i) => (
          <Benefit {...b} key={i} />
        ))}
      </div>

      {CTA}
    </Card>
  );
};

const Benefit = ({ text, checked }: BenefitType) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-blue-600 text-sm text-zinc-50">
          <Check className="h-3 w-3" />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-zinc-800 text-sm text-zinc-400">
          <X className="h-3 w-3" />
        </span>
      )}
      <span className="text-sm text-zinc-300">{text}</span>
    </div>
  );
};

const Card = ({ className, children, style = {} }: CardProps) => {
  return (
    <motion.div
      initial={{
        filter: "blur(2px)",
      }}
      whileInView={{
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.25,
      }}
      style={style}
      className={cn(
        "relative h-full w-full overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-950/50 to-zinc-900/80 p-6",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const GhostButton = ({ children, className, ...rest }: GhostButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-md px-4 py-2 text-lg text-zinc-100 transition-all hover:scale-[1.02] hover:bg-zinc-800 hover:text-zinc-50 active:scale-[0.98]",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

type PriceCardProps = {
  tier: string;
  price: string;
  bestFor: string;
  CTA: ReactNode;
  benefits: BenefitType[];
};

type CardProps = {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
};

type BenefitType = {
  text: string;
  checked: boolean;
};

type GhostButtonProps = {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
