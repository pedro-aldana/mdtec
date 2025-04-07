import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Play } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type HeroVideoDialogProps = {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  animationStyle?: "from-center" | "fade";
  className?: string;
  onOpenChange?: (open: boolean) => void;
};

export default function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",

  className = "",
  onOpenChange,
}: HeroVideoDialogProps) {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    onOpenChange?.(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button className={`relative w-full h-full ${className}`}>
          <Image
            src={thumbnailSrc}
            alt={thumbnailAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <Play className="text-white w-12 h-12" />
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full p-0 overflow-hidden aspect-video">
        {/* Title requerido para accesibilidad */}
        <DialogTitle asChild>
          <VisuallyHidden>Reproductor de video del proyecto</VisuallyHidden>
        </DialogTitle>
        <iframe
          src={videoSrc}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </DialogContent>
    </Dialog>
  );
}
