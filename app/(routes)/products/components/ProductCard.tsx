// components/ProductCard.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BiLogoWhatsapp } from "react-icons/bi";
import { Product } from "@/data/products";

type ProductCardProps = { product: Product; index: number };

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      layout
      key={product.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { delay: index * 0.05 },
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5 }}
      className=" rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border-1 border-gray-400/40"
    >
      <div className="relative h-64 overflow-hidden ">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-sky-800 text-white capitalize">
          {product.category}
        </span>
        <h3 className="text-lg font-semibold my-2">{product.name}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
          <Button size="sm" className="flex items-center gap-1">
            <BiLogoWhatsapp className="h-4 w-4" />
            <span>Adquirir</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
