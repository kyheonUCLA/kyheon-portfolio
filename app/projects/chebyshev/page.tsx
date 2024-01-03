"use client"
import React, { FC } from "react";
import ProjectNavbar from "@/components/blog/ProjectNavbar";
import { useNavbarSectionInView } from "@/lib/hooks";
import Introduction from "@/components/blog/Introduction";
import Conclusion from "@/components/blog/Conclusion";
import Body from "@/components/blog/Body";



const ChebyshevPage: FC = () => {
  return (
    <main className="flex flex-col items-center px-4 h-[5000px]">
      <ProjectNavbar />
      <Introduction />
      <Body heading={"section 1"}>
        {" "}
      </Body>

      <Conclusion />
    </main>
  )
}

export default ChebyshevPage;