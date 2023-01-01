import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://assets.fontsinuse.com/static/use-media-items/17/16215/upto-700xauto/56702c8b/js.webp"
        className="rounded-full w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 border object-cover border-gray-500 filter group-hover:grayscale 
        transition duration-300 ease-in-out"
      />
    </div>
  );
}
