import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Link from "next/link";
import { PageInfo, Experience, Skill, Social, Project } from "../typings";
import { GetStaticProps } from "next";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSkills } from "../utils/fetchSkill";
import { fetchSocial } from "../utils/fetchSocial";
import { fetchProject } from "../utils/fetchProject";

type Props = {
  pageInfo: PageInfo[];
  experiances: Experience[];
  skills: Skill[];
  socials: Social[];
  projects: Project[];
};

export default function Home({
  pageInfo,
  experiances,
  skills,
  socials,
  projects,
}: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/40"
    >
      <Head>
        <title>Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiances={experiances} />
      </section>
      {/* Skills */}
      <section id="skill" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              src="https://i.postimg.cc/d0SpxwBB/my.jpg"
              alt="Picture of the author"
              className="rounded-full h-10 w-10 filter grayscale hover:grayscale-0"
              width={200}
              height={200}
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const experiances: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();
  const projects: Project[] = await fetchProject();

  return {
    props: {
      pageInfo,
      experiances,
      skills,
      socials,
      projects,
    },
  };
};
