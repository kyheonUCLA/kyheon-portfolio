import electro from "@/public/electro-assets/electro.png";
import electro_image from "@/public/electro-assets/electro-600x500.png"

const toc = [
  {
    name: "Electric Field Simulation & Modeling",
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
  title: "Electro",
  description: "Created a website to help visualize and calculate electric field forces. The engine was made using Javascript and supports particle collision and animations",
  tags: ["P3.js", "Physics", "Simulation"],
  imageURL: electro_image,
  pageURL: "/projects/electro",
} as const;

const electroData = {page: "electro", toc, card} as const;

export { electroData };