"use client";

import React, { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Static Data Imports
import { allProjectsData } from "@/lib/data";
import { useProjectContext } from "@/context/ProjectContextProvider";
import { useActiveNavbarSectionContext } from "@/context/ActiveNavbarSectionContextProvider";

type NavbarSectionProps = {
  name: string,
  link: typeof allProjectsData[number]['toc'][number], 
}

const NavbarSection: FC<NavbarSectionProps> = ({name, link}) => {
  const { setTimeOfLastClick, activeNavbarSection, setActiveNavbarSection } = useActiveNavbarSectionContext();
  const path = usePathname();

  return (
    <li className="reltive flex flex-col items-center justify-center" key={link.hash}>
      <Link className={"w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"} 
      href={`${path}${link.hash}`} onClick={() => {
        setActiveNavbarSection(link.name);
        setTimeOfLastClick(Date.now()); 
        }}>{name}    
      </Link>
    </li>
  )
}


const ProjectNavbar: FC = () => {
  const { project } = useProjectContext();

  return (
    <nav className="z-[999] hidden sm:flex relative">
    <motion.div className="flex fixed top-0 left-28 h-auto w-full rounded-none bg-white border border-opacity-40 
      bg-opacity-40 sm:w-auto sm:rounded-3xl
      shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-auto"
      initial={{ y: 200, x: -100, opacity: 0 }}
      animate={{ y: 200, x: "-50%", opacity: 1 }}>
        <ul className="flex flex-col w-auto flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium
          text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-1">
          {
            project.toc.map( (link, idx ) => (
              <React.Fragment key={idx}>
                {
                  idx === 0 ? (<NavbarSection name={"Top"} link={link} />) 
                    : 
                  (<NavbarSection name={link.name} link={link} />)
                }
              </React.Fragment>
            ))
          }
        </ul>
    </motion.div>
    </nav>
  )
}

export default ProjectNavbar;
