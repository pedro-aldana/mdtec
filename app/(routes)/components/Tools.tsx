import { CheckCircle } from "lucide-react";
import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Tools() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="container mx-auto px-4 pt-8 bg-black text-white -mb-14">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-800 ">
                Trabajamos con <br />
                las mejores <br />
                herramientas
              </h1>
            </div>

            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-sky-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg space-grotesk">
                      Lenguajes de Programación Potentes y Versátiles
                    </h3>
                    <p className="text-gray-400 mt-2">
                      Usamos Python, JavaScript, TypeScript y más para construir
                      aplicaciones eficientes y escalables.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-sky-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Bases de Datos Robustas y Seguras
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-sky-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">
                      Herramientas de Diseño para Experiencias Únicas
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center">
            <div className="text-gray-400 mb-8 max-w-md">
              Con automatización inteligente y seguridad de primer nivel, es la
              solución perfecta para los equipos que buscan trabajar de forma
              más inteligente.
            </div>

            <div className="relative flex size-full items-center justify-center overflow-hidden">
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
