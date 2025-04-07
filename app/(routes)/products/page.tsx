"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import products from "@/data/products";
import { CATEGORIES } from "@/data/products";
import ProductCard from "./components/ProductCard";
import TransitionPage from "@/components/transition-page";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <>
      <TransitionPage />
      <section className=" py-12 px-4 md:px-6 lg:px-8 ">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-700">
              Nuestros Productos
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Mejora tu experiencia de programación con nuestra colección
              seleccionada de productos de programación, productos digitales y
              recursos de diseño.
            </p>
          </motion.div>
          {/* Category Filter */}
          <Tabs
            defaultValue="all"
            className="mb-8 "
            onValueChange={setSelectedCategory}
          >
            <TabsList className="mx-auto ">
              {CATEGORIES.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
