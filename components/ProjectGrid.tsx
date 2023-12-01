"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { projectCardData } from "@/lib/projects-data/projectData";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import { useRouter } from "next/router";

const ProjectGrid: FC = () => {
  //const path = useRouter().asPath;
  //console.log(path);

  return (
    <section className="">
      <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <SectionHeading>More Projects</SectionHeading>
      </motion.div>
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
    <div className="mb-3 sm:mb-8">
      <section className="relative group bg-gray-100 max-w-[52rem] border border-black/5 rounded-lg
        overflow-hidden sm:pr-8 sm:h-[20rem] hover:bg-gray-200">
        <div className="t-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        </div>
        <Image src={imageURL} alt={title} quality={95} className="absolute top-0 right-[-5rem] w-[28.25rem] 
        rounded-t-lg shadow-2xl scale-75 group-hover:scale-[0.80] transition"/>
      </section>
    </div>
  )
}

export default ProjectGrid