import chebyshev from "@/public/chebyshev-assets/mechanism-corrected.png";
import mechanism_image from "@/public/chebyshev-assets/mechanism-600x500.png"

const toc = [
  {
    name: "Chebshev Mechanism Design & Analysis",
    hash: "#intro"
  },
  {
    name: "Background",
    hash: "#background"
  },
  {
    name: "Section1",
    hash: "#section1"
  },
  {
    name: "Section2",
    hash: "#section2"
  },
  {
    name: "Section3",
    hash: "#section3"
  },
  {
    name: "Conclusion",
    hash: "#conclusion"
  },
] as const;

const card = { 
  title: "Chebyshev Linkage",
  description: "Coded a simulation of a rolling tabletop chebyshev mechanism to perform kinematic analysis. A 3D CAD model was created using the results of the simulation and theoretical analysis",
  tags: ["MATLAB", "SOLIDWORKS", "Julia"],
  imageURL: mechanism_image,
  pageURL: "/projects/chebyshev",
} as const;

const chebyshevData = {page: "chebyshev", toc, card} as const;

export { chebyshevData };