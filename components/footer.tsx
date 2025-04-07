"use client";

import type React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  return (
    <footer className=" relative overflow-hidden bg-black text-zinc-200 selection:bg-zinc-600">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
                MDTEC
              </h2>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-xs"
            >
              Construimos hoy las soluciones del futuro. Creamos software
              innovador que transforma los negocios.
            </motion.p>
            <motion.div variants={itemVariants} className="flex space-x-4 pt-2">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-cyan-500 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            <motion.h3
              variants={itemVariants}
              className="text-lg font-semibold"
            >
              Quick Links
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-2">
              <motion.li variants={itemVariants}>
                <Link
                  href="/us"
                  className="text-gray-400 hover:text-white flex items-center group"
                >
                  <span>Nosotros</span>
                  <ArrowRight
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white flex items-center group"
                >
                  <span>Servicios</span>
                  <ArrowRight
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white flex items-center group"
                >
                  <span>Proyectos</span>
                  <ArrowRight
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </motion.li>
              <motion.li variants={itemVariants}>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white flex items-center group"
                >
                  <span>Productos</span>
                  <ArrowRight
                    size={14}
                    className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-4"
          >
            <motion.h3
              variants={itemVariants}
              className="text-lg font-semibold"
            >
              Contacto
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-3">
              <motion.li variants={itemVariants} className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-purple-500 mt-0.5" />
                <a
                  href="mailto:hello@futuretech.com"
                  className="text-gray-400 hover:text-white"
                >
                  hello@mdtec.com
                </a>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-cyan-500 mt-0.5" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white"
                >
                  +57 3112435231
                </a>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-pink-500 mt-0.5" />
                <address className="text-gray-400 not-italic">
                  Pozo 7
                  <br />
                  La casa del flaco
                </address>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-800" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500"
        >
          <p>
            © {new Date().getFullYear()} MDTEC. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-gray-300">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated background gradient */}
      <motion.div
        className="h-1 w-full bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </footer>
  );
}
