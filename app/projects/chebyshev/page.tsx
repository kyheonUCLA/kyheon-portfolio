
import React, { FC } from "react";
import SectionHeading from "@/components/SectionHeading";
import TableOfContents from "@/components/TableOfContents";
import Test from "@/components/Test";
const ChebyshevPage: FC = () => {
  return (
    <main className="flex flex-col items-center px-4 h-[5000px]">
      <TableOfContents />
      <SectionHeading>Chebyshev Linkage</SectionHeading>
    </main>
  )
}

export default ChebyshevPage;