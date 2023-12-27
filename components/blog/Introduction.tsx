"use client"

import React, { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useNavbarSectionInView } from "@/lib/hooks";
import { useProjectContext } from "@/context/ProjectContextProvider";

const Introduction: FC = () => {
  const { project } = useProjectContext();
  const sectionName = project.toc[0].name;
  const { ref } = useNavbarSectionInView({sectionName: sectionName, threshold: 0.90});

  return ( 
    <motion.section ref={ref} className="max-w-sm md:max-w-2xl">
      <SectionHeading>{sectionName}</SectionHeading>
      <p>Kane conceived Batman in early 1939 to capitalize on the popularity of DC's Superman; although Kane frequently claimed sole creation credit, Finger substantially developed the concept from a generic superhero into something more bat-like. The character received his own spin-off publication, Batman, in 1940. Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice. Unlike most superheroes, Batman does not possess any superpowers, instead relying on his intellect, fighting skills, and wealth.</p>
    </motion.section>
  )
}

export default Introduction;