
import React, { FC } from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  children: React.ReactNode;
}


const SectionHeading: FC<SectionHeadingProps> = ({ children }) => {
  return (
    <h2 className="text-3xl capitalize font-medium mb-8 text-center">{children}</h2>
  )
}

export default SectionHeading