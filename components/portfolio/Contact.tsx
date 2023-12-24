"use client";

import React, { FC } from "react";
import SectionHeading from "../SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useHeaderSectionInView } from "@/lib/hooks";

const Contact: FC = () => {
  const { ref } = useHeaderSectionInView({ sectionName: "Contact", threshold: 0.75 });

  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
      
      <SectionHeading>Contact me</SectionHeading>
      
      <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me at{" "} 
        <a className="underline" href="mailto:example@gmail.com">example@gmail.com</a>
      </p>
 
      <form className="mt-10 flex flex-col dark:text-black">
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
      <SubmitButton />
      </form>
    </motion.section>
  )
}


const SubmitButton: FC = () => {
  return (
    <button type="submit" className="group flex items-center justify-center h-[3rem] 
      w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all
      active:scale-105 hover:scale-105 focus:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10">Submit{" "}
      <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1
      group-hover:-translate-y-1 group-hover" />{" "}
    </button>
  )
}

export default Contact