import React, { FC } from "react";
import SectionHeading from "../SectionHeading";
import { useNavbarSectionInView } from "@/lib/hooks";
import { allProjectsData } from "@/lib/data";

type BodyProps = {
  children: React.ReactNode,
  section: typeof allProjectsData[number]['toc'][number],
}

const Body: FC<BodyProps> = ({section, children}) => {
  const { ref } = useNavbarSectionInView({sectionHash: section.hash, threshold: 0.65});

  return (
    <div ref={ref} className="max-w-sm">
      <SectionHeading>{section.name}</SectionHeading>
      {children}
    </div>
  )
}


export default Body