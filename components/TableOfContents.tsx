"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const fakeData = { toc: ["section 1", "section 2", "section 3", "section 4"] };

const TableOfContents: FC = () => {
  // useActivePage hook to get data
  return (
    <section className="z-[999] relative">
      <motion.div className="fixed flex flex-col items-center rounded-xl left-10 top-40 h-auto w-auto border border-white/40
        bg-red-200 bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-3">
        <p className="mt-5 mb-2">Top</p>
        <div className="h-2 w-full bg-black/30 rounded-full"></div>
        <nav className="flex mx-10 my-5">
          <ul>
            {
              fakeData["toc"].map((section, idx) => (<li key={idx} className="cursor-pointer hover:text-gray-500">
                {section}
              </li>))
            }
          </ul>
        </nav>
      </motion.div>
      
    </section>
  )
}

export default TableOfContents;