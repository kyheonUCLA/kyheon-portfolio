"use client"

import React, { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useNavbarSectionInView } from "@/lib/hooks";
import { useProjectContext } from "@/context/ProjectContextProvider";

const Conclusion: FC = () => {
  const { project } = useProjectContext();
  const sectionHash = project.toc[project.toc.length - 1].hash;
  const { ref } = useNavbarSectionInView({sectionHash, threshold: 0.75});


  return ( 
    <motion.section ref={ref} className="max-w-sm md:max-w-2xl">
      <SectionHeading>{project.toc[project.toc.length - 1].name}</SectionHeading>
    </motion.section>
  )
}

export default Conclusion;