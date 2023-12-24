
import React, { FC } from "react";
import SectionHeading from "@/components/SectionHeading";
import TableOfContents from "@/components/ProjectNavbar";
import Test from "@/components/Test";
const ChebyshevPage: FC = () => {
  return (
    <main className="flex flex-col items-center px-4 h-[5000px]">
      <TableOfContents />
      
      <SectionHeading>Chebyshev Linkage</SectionHeading>

      <SectionHeading>Background</SectionHeading>

      <SectionHeading>Section1</SectionHeading>


      <SectionHeading>Section2</SectionHeading>
    </main>
  )
}

export default ChebyshevPage;