import { useEffect, FC } from "react";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

type useSectionInViewProps = {
  sectionName: SectionName,
  threshold: number
}

const useSectionInView = ({sectionName, threshold = 0.75}: useSectionInViewProps) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]) 

  return { ref };
}

export { useSectionInView }