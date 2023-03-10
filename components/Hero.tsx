import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import my from "../public/my.jpg";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  pageInfo: PageInfo[];
};

export default function Hero({ pageInfo }: Props) {
  const page = pageInfo[0];

  const [text] = useTypewriter({
    words: [
      `Hi, The Name's ${page?.name}`,
      "Guy-who-loves-Coffee.js",
      "<ButLovesToCodeMore/>",
    ],
    loop: true,
    delaySpeed: 2000,
    onLoopDone: () => console.log(`loop completed `),
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />

      <Image
        src={urlFor(page?.heroImage).url()}
        alt="Picture of the author"
        className="relative rounded-full h-32 w-32 max-auto object-cover"
        width={200}
        height={200}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {page.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="z-40 py-2">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skill">
            <button className="heroButton">Skill</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
