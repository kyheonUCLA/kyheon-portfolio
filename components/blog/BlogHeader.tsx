"use client"
import React, { FC } from 'react'
import { motion } from "framer-motion";


type BlogHeaderProps = {
  children: React.ReactNode;
}

const BlogHeader: FC<BlogHeaderProps> = ({ children }) => {
  return (
    <motion.section initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.175 }}>
      <h2 className="text-3xl capitalize font-medium mb-8 text-center">{children}</h2>
    </motion.section>
  )
}

export default BlogHeader