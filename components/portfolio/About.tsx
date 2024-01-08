"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useHeaderSectionInView, useParseToHTML } from "@/lib/hooks";

const About: FC = () => {
  const { ref } = useHeaderSectionInView({sectionName: "About", threshold: 0.75});
  const aboutme1 = "After graduating from UCLA with a degree in *Mechanical Engineering*, I decided to pursue my passion for programming. I taught myself modern web development and frontend design.";
  const aboutme2 = "My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. I am always looking to learn new technologies.";
  const aboutme3 = "When I'm not coding, I enjoy playing video games, watching movies, and playing with my dog. I also enjoy learning new things. I am currently learning about history and philosophy. I'm also learning how to play the guitar.";
  
  return (
    <motion.section id="about" ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 
    sm:mb-40 scroll-mt-28" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.175 }}>
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        {useParseToHTML(aboutme1)}
        {useParseToHTML(aboutme2)}
      </p>
      <p>
       {useParseToHTML(aboutme3)}
      </p>
    </motion.section>
  )
}

export default About