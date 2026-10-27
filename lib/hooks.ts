import React, {useEffect } from "react";
import { useActiveHeaderSectionContext } from "@/context/ActiveHeaderSectionContextProvider";
import { useActiveNavbarSectionContext } from "@/context/ActiveNavbarSectionContextProvider";
import { useInView } from "react-intersection-observer";
import type { HeaderSectionName, NavbarSectionHash } from "./types";


type useHeaderSectionInViewProps = {
  sectionName: HeaderSectionName,
}

// A section is active while it crosses the vertical middle of the viewport. A visibility
// threshold can't work for sections taller than the screen (e.g. the Experience timeline).
const useHeaderSectionInView = ({sectionName}: useHeaderSectionInViewProps) => {
  const { ref, inView } = useInView({ rootMargin: "-50% 0px -50% 0px", threshold: 0 });
  const { setActiveHeaderSection, timeOfLastClick } = useActiveHeaderSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveHeaderSection(sectionName);
    }
  }, [inView, setActiveHeaderSection, timeOfLastClick, sectionName]) 

  return { ref };
}

type useNavbarSectionInViewProps = {
  sectionHash: NavbarSectionHash,
  threshold: number
}

const useNavbarSectionInView = ({sectionHash, threshold = 0.75}: useNavbarSectionInViewProps) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveNavbarSection, timeOfLastClick } = useActiveNavbarSectionContext();
  
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveNavbarSection(sectionHash);
    }
  }, [inView, setActiveNavbarSection, timeOfLastClick, sectionHash]) 

  return { ref };
}


function useParseToHTML(text: string) {
  const parts = text.split(/(\^[^^]*\^|\*[^*]*\*)/).filter((element) => element.trim() !== "");

  return parts.map((part, idx) => {
    if (part.startsWith("^")) {
      return React.createElement('span', { key: idx, className: "italic" }, part.slice(1, -1));
    } else if (part.startsWith("*")) {
      return React.createElement('span', { key: idx, className: "font-bold" }, part.slice(1, -1));
    } else {
      return React.createElement(React.Fragment, { key: idx }, part)
    }
  })
}


export { useHeaderSectionInView, useNavbarSectionInView, useParseToHTML }