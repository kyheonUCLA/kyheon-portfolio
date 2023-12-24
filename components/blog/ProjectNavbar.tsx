"use client";

import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Static Data Imports
import { useProjectContext } from "@/context/ProjectContextProvider";




const ProjectNavbar: FC = () => {
  const { project } = useProjectContext();
  const path = usePathname();
  return (
    <nav className="z-[999] hidden sm:flex relative">
    <motion.div className="flex fixed top-0 left-20 h-auto w-full rounded-none bg-white border border-opacity-40 
      bg-opacity-40 sm:w-auto sm:rounded-3xl
      shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-auto"
      initial={{ y: 0, x: "-50%", opacity: 0 }}
      animate={{ y: 200, x: "-50%", opacity: 1 }}>
        <ul className="flex flex-col w-auto flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium
          text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-1">
          {
            project.toc.map(link => (
              <li className="reltive flex flex-col items-center justify-center" key={link.hash}>
                <Link className={"w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"} 
                href={`${path}${link.hash}`}>{link.name}
                </Link>
              </li>
            ))
          }
        </ul>
    </motion.div>
    </nav>
  )
}

export default ProjectNavbar;