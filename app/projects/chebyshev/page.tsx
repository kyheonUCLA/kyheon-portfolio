"use client"
import React, { FC } from "react";
import ProjectNavbar from "@/components/blog/ProjectNavbar";
import Introduction from "@/components/blog/Introduction";
import Conclusion from "@/components/blog/Conclusion";
import Body from "@/components/blog/Body";
import { useProjectContext } from "@/context/ProjectContextProvider";


const ChebyshevPage: FC = () => {
  const { project } = useProjectContext();

  return (
    <main className="flex flex-col items-center px-4 h-[5000px]">
      <ProjectNavbar />
      <Introduction />
      {
        project.toc.slice(1, -1).map((section, idx) => (<React.Fragment key={idx}>
          <div className="h-[300px]" />
          <Body section={section}>
            {section.hash}
          </Body>
        </React.Fragment>))
      }
      
      <div className="h-[300px]"></div>
      <Conclusion />

    </main>
  )
}

export default ChebyshevPage;