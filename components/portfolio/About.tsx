"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import { useHeaderSectionInView } from "@/lib/hooks";

const About: FC = () => {
  const { ref } = useHeaderSectionInView({sectionName: "About", threshold: 0.75});

  return (
    <motion.section id="about" ref={ref} className="mb-28 max-w-[45rem] text-center leading-8 
    sm:mb-40 scroll-mt-28" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.175 }}>
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I decided to pursue my
        passion for programming. I taught myself modern web development and frontend design.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I&apos;m also
        learning how to play the guitar.
      </p>
    </motion.section>
  )
}

export default About