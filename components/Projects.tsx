import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
      className="min-h-screen overflow-hidden flex flex-col md:text-left text-center relative
    xl:flex-row xl:px-10 justify-center xl:space-y-0 max-w-full mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl p-1">
        projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-scroll snap-x snap-mandatory z-20 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40 s"
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              src="https://i.postimg.cc/DzDXKgrb/a704ae3242.png"
              alt="Picture of the author"
              // className="relative h-102 w-32 max-auto object-cover"
              // width={200}
              // height={200}
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className=" decoration-[#F7AB0A]/50">
                  Case Study {idx + 1} of {projects.length}: Burj Al Arab Hotel
                </span>
                System
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
