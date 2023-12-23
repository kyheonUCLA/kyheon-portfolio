"use client"

import React, { useRef, FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useActivePageContext } from "@/context/ActivePageContextProvider";

// Static Data Imports
import { portfolioData } from "@/lib/projects-data/portfolio-data";


const FeaturedProjects: FC = () => {
  const { ref } = useSectionInView({sectionName: "Projects", threshold: 0.5});
  const { setActiveSection }= useActiveSectionContext();
  const { setActivePage } = useActivePageContext();
  
  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          portfolioData.featured.map((project, idx) => (
            <React.Fragment key={idx}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center">
        <Link href="/projects" onClick={() => {
          setActiveSection('Projects');
          setActivePage('projects');
        }}
          className="group bg-gray-800 text-white px-7 py-3 flex mt-8 text-center
          items-center gap-2 rounded-full hover:bg-gray-950 focus:scale-105 hover:scale-105 
          active:scale-105 cursor-pointer border border-black/10 outline-none transition">More Projects 
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /> 
        </Link>
      </motion.div>
    </section>
  )
}

type ProjectProps = (typeof portfolioData.featured)[number]

const Project = ({ title, description, tags, imageUrl} : ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }}
    className="group mb-3 sm:mb-8 last:mb-0">
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  )
}

export default FeaturedProjects