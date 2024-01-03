"use client"

import React, { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useNavbarSectionInView } from "@/lib/hooks";
import { useProjectContext } from "@/context/ProjectContextProvider";

const Introduction: FC = () => {
  const { project } = useProjectContext();
  const sectionHash = project.toc[0].hash;
  const { ref } = useNavbarSectionInView({sectionHash, threshold: 0.90});

  return ( 
    <motion.section ref={ref} className="max-w-sm md:max-w-2xl">
      <SectionHeading>{sectionHash}</SectionHeading>
    </motion.section>
  )
}

export default Introduction;