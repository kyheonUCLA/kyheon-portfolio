"use client";

import React, { FC } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const Contact: FC = () => {
  const { ref } = useSectionInView({ sectionName: "Contact", threshold: 0.75 });

  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">Please contact me at{" "} 
        <a className="underline" href="mailto:example@gmail.com">example@gmail.com</a>
      </p>
 
      <form className="mt-10 flex flex-col">
        <input type="email" placeholder="Your email"
        className="h-14 rounded-lg border border-black/10"></input>
        <textarea className="h-52 my-3 rounded p-4 border border-black/10"
        placeholder="Your message"></textarea>
        <button type="submit" className="group flex items-center justify-center h-[3rem] 
        w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
        active:scale-105 hover:scale-105 focus:scale-105 hover:bg-gray-950">Submit{" "}
        <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1
        group-hover:-translate-y-1 group-hover" />{" "}</button>
      </form>
    </motion .section>
  )
}

export default Contact