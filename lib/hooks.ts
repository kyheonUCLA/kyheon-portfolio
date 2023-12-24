import { useEffect } from "react";
import { useActiveHeaderSectionContext } from "@/context/ActiveHeaderSectionContextProvider";
import { useActiveNavbarSectionContext } from "@/context/ActiveNavbarSectionContextProvider";
import { useInView } from "react-intersection-observer";
import type { HeaderSectionName, NavbarSectionName } from "./types";


type useHeaderSectionInViewProps = {
  sectionName: HeaderSectionName,
  threshold: number
}

const useHeaderSectionInView = ({sectionName, threshold = 0.75}: useHeaderSectionInViewProps) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveHeaderSection, timeOfLastClick } = useActiveHeaderSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveHeaderSection(sectionName);
    }
  }, [inView, setActiveHeaderSection, timeOfLastClick, sectionName]) 

  return { ref };
}

type useNavbarSectionInViewProps = {
  sectionName: NavbarSectionName,
  threshold: number
}

const useNavbarSectionInView = ({sectionName, threshold = 0.75}: useNavbarSectionInViewProps) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveNavbarSection, timeOfLastClick } = useActiveNavbarSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveNavbarSection(sectionName);
    }
  }, [inView, setActiveNavbarSection, timeOfLastClick, sectionName]) 

  return { ref };
}

export { useHeaderSectionInView, useNavbarSectionInView }