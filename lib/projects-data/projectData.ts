import chebyshev from "@/public/chebyshev-assets/mechanism-corrected.png";
import hellLizard from "@/public/odysseyai-assets/odysseyai-corrected.png";
import electro from "@/public/electro-assets/electro.png";
import bruinbot from "@/public/bruinbot-assets/bruinbot-corrected.png";
import handaid from "@/public/handaid-assets/handaid.png"


const projectCardData = [
  { title: "Chebyshev Linkage",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["MATLAB", "SOLIDWORKS", "Julia"],
    imageURL: chebyshev,
    pageURL: "/projects/chebyshev-linkage",
  },

  { title: "odyssey.ai",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["OpenAI API", "Midjourney", "Flask", "AWS S3", "Firestore"],
    imageURL: hellLizard,
    pageURL: "/projects/odyssey-ai",
  },

  { title: "Electro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["P3.js", "Physics", "Simulation"],
    imageURL: electro,
    pageURL: "/projects/electro",
  },

  { title: "HandAid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["Forward Kinematics", "Inverse Kinematics", "Autodesk Inventor", "3D Printing"],
    imageURL: handaid,
    pageURL: "projects/handaid",
  },

  { title: "BruinBot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["Computer Vision", "Python", "Flask", "Cloud Computing", "Firebase"],
    imageURL: bruinbot,
    pageURL: "projects/bruinbot",
  },
] as const;


// work on this very much later
const projectBlogData = {
  "projects/electro": { },
  "projects/bruinbot": { },
  "projects/handaid": { },
} as const;



export { projectCardData, projectBlogData }