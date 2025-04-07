/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <header className="container mx-auto px-4 py-6 relative z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-40">
            <img
              src="/images/mdt.png"
              alt="Logo"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </Link>

        {/* Botón de menú hamburguesa */}
        <button
          className="md:hidden focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Fondo oscuro cuando el menú está abierto */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Menú de navegación */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-6 z-50"
            >
              {/* Botón para cerrar menú */}
              <button
                className="absolute top-6 right-6 text-white"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar menú"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <ul className="space-y-6 text-center">
                <li>
                  <Link
                    href="/products"
                    className="text-xl font-medium hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Producto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-xl font-medium hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Proyectos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-xl font-medium hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/us"
                    className="text-xl font-medium hover:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Nosotros
                  </Link>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Menú de navegación en desktop */}
        <nav className="hidden md:block">
          <ul className="flex space-x-12">
            <li>
              <Link
                href="/products"
                className="text-xl font-medium hover:text-gray-300"
              >
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="text-xl font-medium hover:text-gray-300"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-xl font-medium hover:text-gray-300"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/us"
                className="text-xl font-medium hover:text-gray-300"
              >
                Nosotros
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
