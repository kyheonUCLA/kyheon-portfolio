import electro from "@/public/electro-assets/electro.png";
import electro_image from "@/public/electro-assets/electro-600x500.png"

const toc = [
  { name: "Overview", hash: "#overview" },
  { name: "Background", hash: "#background" },
  { name: "Design", hash: "#design" },
  { name: "Implementation", hash: "#implementation" },
  { name: "Results", hash: "#results" },
  { name: "Conclusion", hash: "#conclusion" },
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