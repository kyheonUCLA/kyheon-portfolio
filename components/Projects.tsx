
import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Image from "next/image";

const Projects = () => {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, idx) => (
            <React.Fragment key={idx}>
              <Project {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

type ProjectProps = (typeof projectsData)[number]

const Project = ({ title, description, tags, imageUrl} : ProjectProps) => {
  return (
    <section className="group relative bg-gray-100 max-w-[42rem] border border-black/5 
      overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition">
      <div className="pt-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]">
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
  )
}

export default Projects