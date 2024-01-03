import React, {useEffect } from "react";
import { useActiveHeaderSectionContext } from "@/context/ActiveHeaderSectionContextProvider";
import { useActiveNavbarSectionContext } from "@/context/ActiveNavbarSectionContextProvider";
import { useInView } from "react-intersection-observer";
import type { HeaderSectionName, NavbarSectionHash } from "./types";


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


function useParseToHTML(inputString: string) {
  const parts = inputString.split(/(\*|#[^#]+#|\{[^}]+\})/);

  const jsxElements = parts.map((part, index) => {
    if (part.startsWith('*')) {
      const text = part.slice(1, -1);
      return React.createElement('span', { key: index, className: "font-bold" }, text);
    } else if (part.startsWith('#')) {
      const text = part.slice(1, -1);
      return React.createElement('span', { key: index, className: "italic" }, text);
    } else if (part.startsWith('{')) {
      const text = part.slice(1, -1);
      return { text }; // return as plain object if you want to use it differently
    } else {
      return { text: part }; // use the part directly
    }
  });

  return jsxElements.map((element, index) => (
    React.isValidElement(element) ? element : React.createElement(React.Fragment, { key: index }, element.text)
  ));
}

const test = (test: string) => {

}


export { useHeaderSectionInView, useNavbarSectionInView, useParseToHTML, test }