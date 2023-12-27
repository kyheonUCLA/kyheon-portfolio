import electro from "@/public/electro-assets/electro.png";

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
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
  tags: ["P3.js", "Physics", "Simulation"],
  imageURL: electro,
  pageURL: "/projects/electro",
} as const;

const electroData = {page: "electro", toc, card} as const;

export { electroData };