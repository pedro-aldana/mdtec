export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  videoUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Pagina web para una tienda de dotaciones",
    description:
      "Diseño y desarrollo de una página web moderna y funcional para una tienda de dotaciones, que permite a los clientes explorar productos, realizar pedidos en línea y contactar fácilmente con la empresa.",
    image: "/images/demo-inproseg.png",
    videoUrl: "https://www.youtube.com/embed/CAjZyCBvhKs?si=xP5lVOv39BYaXKsi",
    technologies: [
      "Next Js",
      "TypeScript",
      "Tailwind CSS",
      "PosgreSQL",
      "Strapi",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export default projects;
