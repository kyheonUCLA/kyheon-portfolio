import bruinbot_image from "@/public/bruinbot-assets/bruinbot-600x500.png"

const toc = [
  {
    name: "BruinBot",
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
  title: "BruinBot",
  description: "Coded a simulation of a rolling tabletop chebyshev mechanism to perform kinematic analysis. A 3D CAD model was created using the results of the simulation and theoretical analysis",
  tags: ["Cloud Computing", "Flask", "Firebase", "Computer Vision"],
  imageURL: bruinbot_image,
  pageURL: "/projects/bruinbot",
} as const;

const bruinbotData = {page: "bruinbot", toc, card} as const;

export { bruinbotData };