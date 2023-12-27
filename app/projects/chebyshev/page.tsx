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
        <p>Kane conceived Batman in early 1939 to capitalize on the popularity of DC's Superman; although Kane frequently claimed sole creation credit, Finger substantially developed the concept from a generic superhero into something more bat-like. The character received his own spin-off publication, Batman, in 1940. Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice. Unlike most superheroes, Batman does not possess any superpowers, instead relying on his intellect, fighting skills, and wealth.</p>
      </Body>

      <Conclusion />
    </main>
  )
}

export default ChebyshevPage;