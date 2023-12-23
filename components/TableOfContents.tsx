"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActivePageContext } from "@/context/ActivePageContextProvider";

// Static Data Imports
import { allProjectsData } from "@/lib/data";

const fakeData = { toc: ["section 1", "section 2", "section 3", "section 4"] };

// Static Data Imports

const TableOfContents: FC = () => {
  const { activePage } = useActivePageContext();
  const project = allProjectsData.find((entry) => entry.page === activePage);



  return (
    <section className="z-[999] relative">
      <motion.div className="fixed flex flex-col items-center rounded-xl left-10 top-40 h-auto w-auto border border-white/40
        bg-red-200 bg-opacity-60 shadow-lg shadow-black/[0.03] backdrop-blur-3">
        <p className="mt-5 mb-2">Top</p>
        <div className="h-2 w-full bg-black/30 rounded-full"></div>
        <nav className="flex mx-10 my-5">
          <ul>
            {
              project?.toc.map((section, idx) => (
              <li key={idx} className="cursor-pointer hover:text-gray-500">
                <Link href={`/${section.hash}`}>
                </Link>
                {section.name}
              </li>
              ))
            }
          </ul>
        </nav>
      </motion.div>
      
    </section>
  )
}

export default TableOfContents;