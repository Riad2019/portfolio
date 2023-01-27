import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

export default function AllSkill({ skill, directionLeft }: Props) {
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
        src={urlFor(skill?.image).url()}
        className="rounded-full w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 border object-cover border-gray-500 filter group-hover:grayscale 
        transition duration-300 ease-in-out"
      />
    </div>
  );
}
