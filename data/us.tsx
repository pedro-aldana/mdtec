import { ReactNode } from "react";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
// Definición de tipos
export type SocialLinks = {
  linkedin: string;
  github: string;
  twitter?: string; // Opcional para futura expansión
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
};

export type CompanyValue = {
  title: string;
  description: string;
  icon: ReactNode; // Usamos ReactNode que acepta elementos JSX
};

// Datos del equipo
export const teamMembers: TeamMember[] = [
  {
    name: "Pedro Aldana",
    role: "Software developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Desarrolla, prueba y mantiene software para resolver necesidades tecnológicas específicas.",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Camilo Zambrano",
    role: "Graphic Designer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Diseña contenido visual atractivo para comunicar ideas y mensajes eficaces.",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    name: "Adrian Urrutia",
    role: "Marketing",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Promociona productos o servicios para atraer, retener y fidelizar clientes.",
    social: {
      linkedin: "#",
      github: "#",
    },
  },
];

// Valores de la compañía
export const values: CompanyValue[] = [
  {
    title: "Innovación",
    description:
      "Constantemente superamos los límites y exploramos nuevas posibilidades.",
    icon: <Lightbulb className="h-8 w-8 text-white" />,
  },
  {
    title: "Integridad",
    description:
      "Defendemos los más altos estándares de honestidad y transparencia.",
    icon: <Target className="h-8 w-8 text-white" />,
  },
  {
    title: "Colaboración",
    description:
      "Creemos que las grandes ideas surgen de perspectivas diversas que trabajan juntas.",
    icon: <Users className="h-8 w-8 text-white" />,
  },
  {
    title: "Empatía",
    description:
      "Diseñamos con un profundo conocimiento de las necesidades y desafíos de nuestros usuarios.",
    icon: <Heart className="h-8 w-8 text-white" />,
  },
];

// Exportación principal
// Assigning the object to a variable before exporting
const data = {
  teamMembers,
  values,
};

export default data;
