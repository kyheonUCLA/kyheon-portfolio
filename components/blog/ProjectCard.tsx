"use client";

import React, { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { allProjectsData } from "@/lib/data";


type ProjectCardProps = (typeof allProjectsData)[number]["card"];

const ProjectCard: FC<ProjectCardProps> = ({ title, description, tags, imageURL, pageURL}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div ref={ref} className="mb-3 sm:mb-8 last:mb-0" style={{ scale: scaleProgress, opacity: opacityProgress }}>
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="first-letter:pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold cursor-pointer hover:text-gray-600 mt-3">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {
              tags.map((tag, idx) => (
              <li key={idx} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">
                {tag}
              </li>
              ))
            }
          </ul>
        </div>
        <Image src={imageURL} alt={title} quality={95} className="absolute hidden sm:block top-[-1.85rem] right-[-2.25rem] w-[28.25rem] 
        rounded-lg border border-black/10 shadow-2xl scale-[0.7] group-hover:scale-[0.75] transition"/>
      </section>
    </motion.div>
  )
}

export default ProjectCard