"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { projectCardData } from "@/lib/projects-data/projectData";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Link from "next/link";

const fadeInAnimationVariants = {
  initial: { 
    opacity: 0, y: 100
  },
  animate: (idx:number = 0) => ({
    opacity: 1, y: 0, 
    transition: { delay: 0.01 * idx, type: 'spring', stiffness: 100, damping: 20 }
  })
} 

const ProjectGrid: FC = () => {

  return (
    <section className="">
      <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <SectionHeading>More Projects</SectionHeading>
      </motion.div>
      <div>
        {
          projectCardData.map((project, idx) => (
            <React.Fragment key={idx}>
              <ProjectCard {...project} idx={idx} />
              </React.Fragment>
          ))
        }
      </div>
    </section>
  )
}

type ProjectCardProps = (typeof projectCardData)[number] & { idx?: number };

const ProjectCard: FC<ProjectCardProps> = ({ title, description, tags, imageURL, pageURL, idx}) => {

  return (
    <motion.div className="mb-3 sm:mb-8" variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
    viewport={{ once: true }} custom={idx}>
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