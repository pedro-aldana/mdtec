import { ReactElement } from "react";
import { Camera, Paintbrush, Code, Globe, LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ReactElement | LucideIcon; // Más específico
  color: string;
  hoverColor: string;
};

const services: Service[] = [
  {
    id: "photography",
    title: "Product Photography",
    description:
      "Professional product photography that highlights your products in the best light. Perfect for e-commerce and marketing materials.",
    icon: Camera,
    color: "bg-rose-100 text-rose-700",
    hoverColor: "group-hover:bg-rose-700 group-hover:text-rose-100",
  },
  {
    id: "design",
    title: "Graphic Design",
    description:
      "Creative graphic design services for branding, marketing materials, social media, and more. Stand out with unique visuals.",
    icon: Paintbrush,
    color: "bg-amber-100 text-amber-700",
    hoverColor: "group-hover:bg-amber-700 group-hover:text-amber-100",
  },
  {
    id: "software",
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. From desktop applications to mobile apps and enterprise systems.",
    icon: Code,
    color: "bg-emerald-100 text-emerald-700",
    hoverColor: "group-hover:bg-emerald-700 group-hover:text-emerald-100",
  },
  {
    id: "web",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with the latest technologies. SEO-friendly and optimized for performance.",
    icon: Globe,
    color: "bg-sky-100 text-sky-700",
    hoverColor: "group-hover:bg-sky-700 group-hover:text-sky-100",
  },
];

export default services;
