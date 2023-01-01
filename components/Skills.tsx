import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="min-h-screen flex flex-col md:text-left text-center relative
     xl:flex-row xl:px-10 justify-center xl:space-y-0 max-w-[2000px] mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Skill
      </h3>
      <h3 className="absolute top-36 uppercase text-gray-500 tracking-[3px] text-sm">
        Hover Over a skill cucurrency profieciency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
