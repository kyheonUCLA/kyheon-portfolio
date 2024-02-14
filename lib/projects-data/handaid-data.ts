import handaid_image from "@/public/handaid-assets/handaid-600x500.png"

const toc = [
  {
    name: "HandAid",
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
  title: "HandAid",
  description: "4 DOF serial robot designed to help hospital patients feed themselves. The robot was made with daisy-chained dynamixel servo motors mounted on 3D printed parts.",
  tags: ["MATLAB", "Dynamixel SDK", "3D Printing", "SOLIDWORKS"],
  imageURL: handaid_image,
  pageURL: "/projects/handaid",
} as const;

const handaidData = {page: "handaid", toc, card} as const;

export { handaidData };