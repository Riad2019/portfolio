import React from "react";
import { motion } from "framer-motion";
import AllSkill from "./AllSkill";
import { Skill as SkillType } from "../typings";
type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
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
        {skills?.slice(0, skills.length / 2).map((skill, idx) => (
          <AllSkill key={idx} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill, idx) => (
          <AllSkill key={idx} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}
