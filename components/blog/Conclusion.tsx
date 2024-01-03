"use client"

import React, { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useNavbarSectionInView } from "@/lib/hooks";
import { useProjectContext } from "@/context/ProjectContextProvider";

const Conclusion: FC = () => {
  const { project } = useProjectContext();
  const sectionName = project.toc[project.toc.length - 1].name;
  const { ref } = useNavbarSectionInView({sectionName: sectionName, threshold: 0.75});


  return ( 
    <motion.section ref={ref} className="max-w-sm md:max-w-2xl">
      <SectionHeading>{sectionName}</SectionHeading>
    </motion.section>
  )
}

export default Conclusion;