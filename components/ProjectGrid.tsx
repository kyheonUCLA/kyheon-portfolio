"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { projectCardData } from "@/lib/projects-data/projectData";
import SectionHeading from "./SectionHeading";
import Image from "next/image";


const ProjectGrid: FC = () => {
  return (
    <section className="">
      <SectionHeading>More Projects</SectionHeading>
      <div>
        {
          projectCardData.map((project, idx) => (
            <React.Fragment key={idx}>
              <ProjectCard {...project} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

type ProjectCardProps = (typeof projectCardData)[number];

const ProjectCard: FC<ProjectCardProps> = ({ title, description, tags, imageURL}) => {

  return (
    <motion.div className="mb-3 sm:mb-8">
      <section className="relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg
        overflow-hidden sm:pr-8 sm:h-[20rem]">
        <div className="t-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        </div>
        <Image src={imageURL} alt={title} quality={95} className="absolute top-4 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl"/>
      </section>
    </motion.div>
  )
}

export default ProjectGrid