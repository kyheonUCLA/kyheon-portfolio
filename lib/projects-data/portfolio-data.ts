import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BsMoon } from "react-icons/bs";

import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import chebyshev from "@/public/chebyshev-assets/mechanism-corrected.png";
import handaid from "@/public/handaid-assets/matlab-animation-tnb.gif";
import odyssey from "@/public/odysseyai-assets/odysseyai.png";

const mainLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

const featuredProjectsData = [
  {
    title: "HandAid",
    description:
      "A 4 Degrees of Freedom robot arm to help hospitalized patients feed themselves.",
    tags: ["SOLIDWORKS", "MATLAB", "Dynamixel SDK", "Julia"],
    imageUrl: handaid,
  },
  {
    title: "Odyssey AI",
    description:
      "A storytelling app that immortalizes your adventures using midjourney and GPT-3",
    tags: ["Flask", "AWS", "Firebase", "Tailwind", "Python"],
    imageUrl: odyssey,
  },
  {
    title: "Chebyshev Mechanism",
    description:
      "The design and analysis of a sliding surface",
    tags: ["MATLAB", "Julia", "SOLIDWORKS", "Tailwind", "Framer"],
    imageUrl: chebyshev,
  },
] as const;

const skillsData = {
  software: [
  "HTML",
  "CSS",
  "Typescript",
  "Express",
  "React",
  "Next.js",
  "Node.js",
  "Firebase",
  "Chrome Extension",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  ],
  mechanical: [
    "SOLIDWORKS",
    "Autodesk Inventor",
    "MATLAB",
    "Simulink",
    "Multisim",
    "Arduino",
    "Raspberry Pi",
    "Julia",
    "Studio 5000",
  ]
} as const;


const experiencesData = [
  {
    title: "EnviroCare International",
    location: "American Canyon, CA",
    description:
      "I interned as a junior controls and automation engineer at a pollution control company.",
    icon: React.createElement(BsMoon),
    date: "2020",
  },
  {
    title: "ASME X1 Robotics",
    location: "UCLA, CA",
    description:
      "I worked on 2 big robotic projects, BruinBot and Boelt and learned cloud computing, serverless development, and computer vision.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Graduation",
    location: "UCLA, CA",
    description:
      "Graduated from UCLA with a B.S. in Mechanical Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

const portfolioData = {
  featured: featuredProjectsData, 
  skills: skillsData, 
  links: mainLinks, 
  experience: experiencesData
} as const;

export { portfolioData };