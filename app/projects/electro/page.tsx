import SectionHeading from "@/components/SectionHeading";
import Conclusion from "@/components/blog/Conclusion";
import Introduction from "@/components/blog/Introduction";
import ProjectNavbar from "@/components/blog/ProjectNavbar";
import React, { FC } from "react";

const ElectroPage = () => {
  return (
    <main className="flex flex-col items-center px-4 h-[5000px]">
      <ProjectNavbar />
      <Introduction />
      <Conclusion />
    </main>
  )
}

export default ElectroPage