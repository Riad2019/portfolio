import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 h-[600px]
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] 
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-100 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        src="https://i.postimg.cc/bwrQkKrn/logo-alt-cube-100x100.png"
        className="rounded-full w-32 h-32 object-cover object-center
                xl:h-40 xl:w-40"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Intern of Binary Quest</h4>
        <p className="font-bold text-2xl mt-1">Binary Quest</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="https://i.postimg.cc/LsjPkfKd/next-js-seeklogo-com.png"
            alt="Picture of the nextjs language"
            className="rounded-full h-10 w-10"
            width={200}
            height={200}
          />
          <Image
            src="https://i.postimg.cc/DzDXKgrb/a704ae3242.png"
            alt="Picture of the apollo client"
            className="rounded-full h-10 w-10 "
            width={200}
            height={200}
          />
          <Image
            src="https://i.postimg.cc/sf5Zt5vv/javascript-39395.png"
            alt="Picture of the nextjs language"
            className="rounded-full h-10 w-10 "
            width={200}
            height={200}
          />
          <Image
            src="https://i.postimg.cc/8zXFhHnn/pngwing-com-1.png"
            alt="Picture of the nextjs language"
            className="rounded-full h-10 w-10 "
            width={200}
            height={200}
          />
          <Image
            src="https://i.postimg.cc/KYgYtyTR/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ae420f1-5052388715277494029344.png"
            alt="Picture of the nextjs language"
            className="rounded-full h-10 w-10 "
            width={200}
            height={200}
          />
          <Image
            src="https://i.postimg.cc/g09pFLw2/bootstrap-4-logo-png-transparent.png"
            alt="Picture of the nextjs language"
            className="rounded-full h-10 w-10 "
            width={200}
            height={200}
          />
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">Started work -ended work</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>sumary point</li>
          <li>sumary point</li>
          <li>sumary point</li>
          <li>sumary point</li>
          <li>sumary point</li>
          <li>sumary point</li>
        </ul>
      </div>
    </article>
  );
}
