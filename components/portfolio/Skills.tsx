"use client";

import React, { FC } from "react";
import SectionHeading from "../SectionHeading";
import { portfolioData } from "@/lib/projects-data/portfolio-data";
import { useHeaderSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionDivider from "../SectionDivider";

const fadeInAnimationVariants = {
  initial: { 
    opacity: 0, y: 100
  },
  animate: (idx:number) => ({
    opacity: 1, y: 0, 
    transition: { delay: 0.05 * idx }
  })
} 


const Skills: FC = () => {
  const { ref } = useHeaderSectionInView({ sectionName: "Skills", threshold: 0.25 });

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-950">
        {
          portfolioData.skills.software.map((skill, idx) => (
            <motion.li variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
            viewport={{ once: true }} custom={idx}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" 
             key={idx}>{skill}</motion.li>
          ))
        }
      </ul>
      <ul className="mt-20 flex flex-wrap justify-center gap-2 text-lg text-gray-950">
        {
          portfolioData.skills.mechanical.map((skill, idx) => (
            <motion.li variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
            viewport={{ once: true }} custom={idx}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" 
             key={idx}>{skill}</motion.li>
          ))
        }
      </ul>
      <ul className="mt-20 flex flex-wrap justify-center gap-2 text-lg text-gray-950">
        {
          portfolioData.skills.automation.map((skill, idx) => (
            <motion.li variants={fadeInAnimationVariants} initial="initial" whileInView="animate"
            viewport={{ once: true }} custom={idx}
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" 
             key={idx}>{skill}</motion.li>
          ))
        }
      </ul>
    </section>
  )
}

export default Skills