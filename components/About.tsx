import { motion } from "framer-motion";
import React from "react";

type Props = {};

export default function About({}: Props) {
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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        src="https://i.postimg.cc/3xB0r7ZT/279314299-2323122744505168-358736466133317700-n.jpg"
        className="-mb-20 md:mb-0 rounded-full md:rounded-lg flex-shrink-0 w-56 h-56 object-cover 
        md:h-95 md:w-64 xl:h[600px] xl:w-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          Background
        </h4>
        <p className="text-base">
          A highly motivated and energetic person who has a great passion for
          working with technology. I would like to use my skills for
          professional growth, which will help me contribute towards the
          organizations objectives within the time frame. I am interested in Web
          development and would like to learn more about it.
        </p>
      </div>
    </motion.div>
  );
}
