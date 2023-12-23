"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi"
import pic2 from '@/public/portfolio-assets/pic2.png'
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";

const Intro = () => {
  const sampleImg = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100";
  const buttonStyles = "cursor-pointer border border-black/10 outline-none transition";
  const githubURL = "https://github.com/kyheonUCLA";
  const linkedInURL= "https://www.linkedin.com/in/ky-heon-96a4b11b7";

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView({sectionName: "Home", threshold: 0.8});

  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:bmb-0 scroll-mt-96">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: 0.2 }}>
            <Image src={pic2} width="192" height="192" quality="95" priority={true} alt="portfolio picture"
              className="h-44 w-44 rounded-full border-[0.35rem] border-gray-200 shadow-xl"/>
          </motion.div>
        </div>
        
      </div>

      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <span className="font-bold">Hello, I'm Ky.</span> I'm a{" "}
        <span className="font-bold">self taught developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is the MERN{" "}
        <span className="italic">{"("}MongoDB, Express, React, Node{")"}</span>{" "}techstack.
        <span className="">{" "}I built this website using Next.js </span>
      </motion.h1>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0 , opacity: 1 }} transition={{ delay: 0.1 }}>
        <Link href="#contact" onClick={() => {
          setActiveSection("Contact"); 
          setTimeOfLastClick(Date.now()); }}
        className={`group bg-gray-800 text-white px-7 py-3 flex items-center gap-2 rounded-full
         hover:bg-gray-900 focus:scale-105 hover:scale-105 active:scale-105 ${buttonStyles}`}>Contact me here 
        <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /> 
        </Link>

        <a className={`group bg-white text-gray-950 px-7 py-3 flex items-center gap-2 
        rounded-full hover:bg-gray-200 focus:scale-105 hover:scale-105 active:scale-105
        hover:text-color-950 dark:bg-white/20 dark:text-white/80 ${buttonStyles}`} href="/CV.pdf" download>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
        </a>

        <a className={`bg-white text-gray-950 p-4 flex items-center gap-2 rounded-full dark:bg-white/20 dark:text-white/80
         hover:bg-gray-200 focus:scale-110 hover:scale-110 active:scale-110 hover:text-color-950 ${buttonStyles}`}
         href={linkedInURL} target="_blank">
          <BsLinkedin />
        </a>

        <a className={`bg-white text-gray-950 p-4 flex items-center gap-2 rounded-full text-[1.15rem] dark:bg-white/20 dark:text-white/80
        hover:bg-gray-200 focus:scale-110 hover:scale-110 active:scale-110 hover:text-color-950 ${buttonStyles}`}
        href={githubURL} target="_blank">
          <FaGithubSquare />
        </a>
      </motion.div>

    </section>
  )
}

export default Intro
