import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { BsMoon } from "react-icons/bs";

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
    name: "Blog",
    hash: "#blog",
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
    "PLC",
  ]
} as const;


const experiencesData = [
  {
    title: "EnviroCare International",
    location: "American Canyon, CA",
    description:
      "Junior controls and automation engineer at a pollution control company",
    icon: React.createElement(BsMoon),
    date: "2020",
  },
  {
    title: "ASME X1 Robotics",
    location: "UCLA, CA",
    description:
      "Fullstack engineer working on computer vision, cloud computing, and quadruped robot kinematics",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Graduation",
    location: "UCLA, CA",
    description:
      "Graduated from UCLA with a B.S. in Mechanical Engineering specializing in control theory, computer science and robotics",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Freezer Engineering",
    location: "Denver, CO",
    description:
      "Automation & Controls engineer at a consulting firm for the Oil and Gas industry",
    icon: React.createElement(CgWorkAlt),
    date: "2024-2025",
  },
] as const;

const portfolioData = {
  featured: featuredProjectsData, 
  skills: skillsData, 
  links: mainLinks, 
  experience: experiencesData
} as const;

export { portfolioData };