import chebyshev from "@/public/chebyshev-assets/mechanism-corrected.png";

const toc = [
  {
    name: "Introduction",
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
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
  tags: ["MATLAB", "SOLIDWORKS", "Julia"],
  imageURL: chebyshev,
  pageURL: "/projects/chebyshev",
} as const;

const chebyshevData = {page: "chebyshev", toc, card} as const;

export { chebyshevData };