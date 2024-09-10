"use client"
import React, { FC } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';
import { allProjectsData } from '@/lib/data';
import ProjectCard from '@/components/blog/ProjectCard';

const Test: FC = () => {
  return (
    <section className="flex flex-col items-center px-4">
       <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <SectionHeading>Blog Projects</SectionHeading>
      </motion.div>
      <motion.div>
        {
          allProjectsData.map((project, idx) => (
            <React.Fragment key={idx}>
              <ProjectCard {...project.card} />
            </React.Fragment>
          ))
        }
      </motion.div>
    </section>
  )
}

export default Test;
