"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Link from "next/link";

// Static Data Imports
import { allProjectsData } from "@/lib/data";
import type { PageName } from "@/lib/types";

const ProjectGrid: FC = () => {
  return (
    <section className="">
      <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <SectionHeading>More Projects</SectionHeading>
      </motion.div>
      <div>
        {
          allProjectsData.map((project, idx) => (
            <React.Fragment key={idx}>
              <ProjectCard {...project.card} page={project.page} />
            </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

type ProjectCardProps = (typeof allProjectsData)[number]["card"] & { page: PageName };

const ProjectCard: FC<ProjectCardProps> = ({ title, description, tags, imageURL, pageURL, page}) => {
  return (
    <motion.div className="mb-3 sm:mb-8" initial="initial" whileInView="animate"
    viewport={{ once: true }}>
      <section className="relative group bg-gray-100 max-w-[52rem] border border-black/5 rounded-lg
         sm:pr-8 sm:h-[20rem] hover:bg-gray-200">
        <div className="t-4 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full">
          <Link className="text-2xl font-semibold cursor-pointer hover:text-gray-600"
          href={pageURL}>
            {title}
          </Link>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-auto gap-2">
            {
              tags.map((tag, idx) => (
              <li key={idx} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider 
              text-white rounded-full">{tag}</li>
              ))
            }
          </ul>
        </div>
        <Image src={imageURL} alt={title} quality={95} className="absolute top-[-1.85rem] right-[-2.25rem] w-[28.25rem] 
        rounded-lg border border-black/10 shadow-2xl scale-[0.7] group-hover:scale-[0.75] transition"/>
      </section>
    </motion.div>
  )
}

export default ProjectGrid