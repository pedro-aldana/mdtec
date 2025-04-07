"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, Paintbrush, Code, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import TransitionPage from "@/components/transition-page";

const services = [
  {
    id: "photography",
    title: "Fotografía de productos",
    description:
      "Fotografía profesional de producto que resalta tus productos de la mejor manera. Perfecta para comercio electrónico y materiales de marketing.",
    icon: Camera,
    color: "bg-rose-100 text-rose-700",
    hoverColor: "group-hover:bg-rose-700 group-hover:text-rose-100",
  },
  {
    id: "design",
    title: "Diseño gráfico",
    description:
      "Servicios creativos de diseño gráfico para branding, materiales de marketing, redes sociales y más. Destaca con imágenes únicas.",
    icon: Paintbrush,
    color: "bg-amber-100 text-amber-700",
    hoverColor: "group-hover:bg-amber-700 group-hover:text-amber-100",
  },
  {
    id: "software",
    title: "Desarrollo de software",
    description:
      "Soluciones de software personalizadas, adaptadas a las necesidades de su negocio. Desde aplicaciones de escritorio hasta aplicaciones móviles y sistemas empresariales.",
    icon: Code,
    color: "bg-emerald-100 text-emerald-700",
    hoverColor: "group-hover:bg-emerald-700 group-hover:text-emerald-100",
  },
  {
    id: "web",
    title: "Desarrollo web",
    description:
      "Sitios web y aplicaciones web modernos y responsivos, diseñados con las últimas tecnologías. Optimizados para SEO y de alto rendimiento.",
    icon: Globe,
    color: "bg-sky-100 text-sky-700",
    hoverColor: "group-hover:bg-sky-700 group-hover:text-sky-100",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      <TransitionPage />
      <div className="w-full bg-black py-20">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-700">
              Nuestros servicios
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Soluciones creativas y técnicas integrales para ayudar a su
              negocio a prosperar en el panorama digital.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-lg",
                  activeService === service.id
                    ? "ring-2 ring-offset-2 ring-gray-900"
                    : ""
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() =>
                  setActiveService(
                    service.id === activeService ? null : service.id
                  )
                }
              >
                <div className="space-y-4">
                  <div
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300",
                      service.color,
                      service.hoverColor
                    )}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-900 to-gray-700"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeService === service.id ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Process */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Nuestro proceso
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {["Descubrimiento", "Planificación", "Ejecución", "Entrega"].map(
                (step, index) => (
                  <motion.div
                    key={step}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="relative mx-auto mb-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-900 mx-auto">
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      {index < 3 && (
                        <div
                          className="absolute top-8 left-full h-0.5 w-full -translate-y-1/2 bg-gray-200 hidden md:block"
                          style={{ width: "calc(100% - 4rem)", left: "4rem" }}
                        />
                      )}
                    </div>
                    <h4 className="font-bold">{step}</h4>
                    <p className="text-sm text-gray-300 mt-2">
                      {index === 0 && "Entendiendo sus necesidades y objetivos"}
                      {index === 1 &&
                        "Creación de una hoja de ruta estratégica"}
                      {index === 2 && "Dando vida a tu visión"}
                      {index === 3 &&
                        "Refinando y entregando el producto final"}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="bg-black rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-center mb-6">
                Contáctanos
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <Input id="name" placeholder="Tu nombre" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Tu Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    className="flex h-10 w-full rounded-md border border-input bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto"
                    className="min-h-32"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-sky-800 hover:bg-sky-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensaje
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
