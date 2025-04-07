"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import TeamMemberCard from "./components/TeamMemberCard";
import { teamMembers } from "@/data/us";
import { values } from "@/data/us";
import ValuesCard from "./components/ValuesCard";
import TransitionPage from "@/components/transition-page";
// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("team");

  return (
    <>
      <TransitionPage />
      <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-700"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Nosotros
            </motion.h1>
            <motion.div
              className="h-1 w-20 bg-secondary mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8 }}
            />
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Tenemos la misión de transformar la forma en que las personas
              interactúan con la tecnología, creando experiencias intuitivas que
              empoderan y deleitan.
            </motion.p>
          </div>

          <Tabs
            defaultValue="team"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex justify-center mb-12 ">
              <TabsList className="grid grid-cols-3 w-full max-w-md bg-sky-700 ">
                <TabsTrigger
                  value="team"
                  className="flex items-center gap-2 data-[state=active]:bg-sky-800"
                >
                  <Users className="h-4 w-4 text-white" />
                  <span className="text-white">Nuestro Equipo</span>
                </TabsTrigger>
                <TabsTrigger
                  value="mission"
                  className="flex items-center gap-2 data-[state=active]:bg-sky-800"
                >
                  <Target className="h-4 w-4 text-white" />
                  <span className="text-white">Mision & Vision</span>
                </TabsTrigger>
                <TabsTrigger
                  value="values"
                  className="flex items-center gap-2 data-[state=active]:bg-sky-800"
                >
                  <Heart className="h-4 w-4 text-white" />
                  <span className="text-white">Valores</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="team" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {teamMembers.map((member, index) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    index={index}
                  />
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="mission" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  className="bg-black/25 backdrop-blur-sm rounded-2xl p-8 border border-muted"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nuestra misión</h3>
                  <p className="text-muted-foreground mb-6">
                    Nuestra misión es desarrollar soluciones tecnológicas
                    innovadoras y de alto rendimiento, ayudando a empresas y
                    emprendedores a optimizar sus procesos, mejorar su presencia
                    digital y alcanzar sus objetivos a través de software
                    eficiente, escalable y personalizado.
                  </p>
                  <motion.div
                    className="h-1 w-16 bg-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />
                </motion.div>

                <motion.div
                  className="bg-black/25 backdrop-blur-sm rounded-2xl p-8 border border-muted"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-6">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Nuestra visión</h3>
                  <p className="text-muted-foreground mb-6">
                    Ser una empresa líder en el desarrollo de software,
                    reconocida por nuestra calidad, creatividad y compromiso con
                    la excelencia. Buscamos transformar el mundo digital con
                    soluciones tecnológicas que impulsen el crecimiento y la
                    evolución de negocios a nivel global.
                  </p>
                  <motion.div
                    className="h-1 w-16 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: 64 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  />
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="values" className="mt-0">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {values.map((value, index) => (
                  <ValuesCard key={value.title} value={value} index={index} />
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </>
  );
}
