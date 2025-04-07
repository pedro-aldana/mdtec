import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CompanyValue } from "@/data/us";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

type ValuesCardProps = { value: CompanyValue; index: number };

export default function ValuesCard({ value, index }: ValuesCardProps) {
  return (
    <motion.div key={index} variants={fadeIn}>
      <Card className="h-full bg-black/25 backdrop-blur-sm border-muted hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-sky-700 rounded-xl">{value.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {value.title}
              </h3>
              <p className=" text-gray-300">{value.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
