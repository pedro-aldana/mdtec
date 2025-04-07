import React from "react";
import { TextReveal } from "@/components/magicui/text-reveal";

export default function Text() {
  return (
    <div className="container mx-auto px-4 pt-8  text-white -mt-60  md:-mt-12">
      <TextReveal className=" bg-clip-text text-transparent bg-gradient-to-r from-white to-sky-800">
        En MDTec, transformamos ideas en soluciones digitales a medida. Nos
        especializamos en diseñar y desarrollar proyectos innovadores que
        impulsan a emprendedores y empresas a destacar en el mundo digital.
        Nuestro compromiso es ayudarte a crecer con tecnología creativa,
        funcional y adaptada a tus necesidades.
      </TextReveal>
    </div>
  );
}
