"use client";

import React, { FC, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

// Static Data Imports
import { allProjectsData } from "@/lib/data";
import type { ProjectDataType } from "@/lib/types";
import { portfolioData } from "@/lib/projects-data/portfolio-data";
import { useProjectContext } from "@/context/ProjectContextProvider";




const TableOfContents: FC = () => {
  const { project } = useProjectContext();

  return (
    <section className="z-[999] relative">
     <nav className="z-[999] relative">
      <motion.div
        className="flex fixed top-0 h-auto w-full rounded-none bg-white border border-opacity-40 
        bg-opacity-80 sm:w-auto sm:rounded-3xl
        shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-auto"
        initial={{ y: 0, x: "-50%", opacity: 0 }}
        animate={{ y: 200, x: "-50%", opacity: 1 }}>
          <ul className="flex flex-col w-auto flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium
           text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-1">
            {
              project.toc.map(link => (
                <li className="reltive flex flex-col items-center justify-center" key={link.hash}>
                  <Link className={"w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"} 
                  href={`/${link.hash}`}>{link.name}
                  
                  </Link>
                </li>
              ))
            }
          </ul>
      </motion.div>
      </nav>
    </section>
  )
}

export default TableOfContents;