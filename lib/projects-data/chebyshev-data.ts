import mechanism_image from "@/public/chebyshev-assets/mechanism-600x500.png"

const toc = [
  { name: "Overview", hash: "#overview" },
  { name: "Background", hash: "#background" },
  { name: "Design", hash: "#design" },
  { name: "Analysis", hash: "#analysis" },
  { name: "Results", hash: "#results" },
  { name: "Conclusion", hash: "#conclusion" },
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