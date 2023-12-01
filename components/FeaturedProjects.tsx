"use client"

import React, { useRef, FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { featuredProjectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

const FeaturedProjects: FC = () => {
  const { ref } = useSectionInView({sectionName: "Projects", threshold: 0.5});
  const { setActiveSection }= useActiveSectionContext();

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          featuredProjectsData.map((project, idx) => (
            <React.Fragment key={idx}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
      <motion.div className="flex flex-col sm:flex-row items-center justify-center">
        <Link href="/projects" onClick={() => setActiveSection('Projects')}
          className="group bg-gray-800 text-white px-7 py-3 flex mt-8 text-center
          items-center gap-2 rounded-full hover:bg-gray-950 focus:scale-105 hover:scale-105 
          active:scale-105 cursor-pointer border border-black/10 outline-none transition">More Projects 
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /> 
        </Link>
      </motion.div>
    </section>
  )
}

type ProjectProps = (typeof featuredProjectsData)[number]

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
      <section className="relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg
        overflow-hidden sm:pr-8 sm:h-[20rem] group-even:pl-6 hover:bg-gray-200 transition">
        <div className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-auto gap-2">
            {
              tags.map((tag, idx)=> (
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
              rounded-full" key={idx}>{tag}</li>
              ))
            }
          </ul>
        </div>
        <Image src={imageUrl} alt={title} quality={95} className="absolute top-8 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:scale-105
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition
        group-even:group-hover:rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3"/>
      </section>
    </motion.div>
  )
}

export default FeaturedProjects