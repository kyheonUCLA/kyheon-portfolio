"use client"

import { useEffect } from "react";
import { useProjectContext } from "@/context/ProjectContextProvider";
import { useActiveNavbarSectionContext } from "@/context/ActiveNavbarSectionContextProvider";

export default function HeadingObserver() {
  const { project } = useProjectContext();
  const { setActiveNavbarSection, timeOfLastClick } = useActiveNavbarSectionContext();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (Date.now() - timeOfLastClick < 1000) return;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveNavbarSection(`#${entry.target.id}` as typeof project.toc[number]["hash"]);
            break;
          }
        }
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    const elements = project.toc
      .map((s) => document.getElementById(s.hash.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [project, setActiveNavbarSection, timeOfLastClick]);

  return null;
}
