import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";
import { TeamMember } from "@/data/us";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

type TeamMemberCardProps = { member: TeamMember; index: number };

export default function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  return (
    <motion.div key={index} variants={fadeIn}>
      <Card className="overflow-hidden h-full bg-black/25 backdrop-blur-sm border-muted hover:border-gray-400/50 transition-all duration-300">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-contain object-center transition-transform duration-500 hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-1 text-white">
            {member.name}
          </h3>
          <p className="text-sm text-gray-300 mb-3">{member.role}</p>
          <p className=" mb-4 text-gray-400">{member.bio}</p>
          <div className="flex gap-3">
            <a
              href={member.social.twitter}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href={member.social.linkedin}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={member.social.github}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
