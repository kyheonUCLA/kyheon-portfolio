import handaid_image from "@/public/handaid-assets/handaid-600x500.png"

const toc = [
  { name: "Overview", hash: "#overview" },
  { name: "Background", hash: "#background" },
  { name: "Design", hash: "#design" },
  { name: "Kinematics", hash: "#kinematics" },
  { name: "Results", hash: "#results" },
  { name: "Conclusion", hash: "#conclusion" },
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