"use client";

import React from "react";
import SectionHeading from "../SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useHeaderSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useHeaderSectionInView({sectionName: "Experience", threshold: 0.75});

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
    
    </section>
  );
}