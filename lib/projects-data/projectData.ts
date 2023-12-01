import mechanism from "@/public/mechanism-assets/mechanism-corrected.png";
import hellLizard from "@/public/odysseyai-assets/odysseyai-corrected.png";
import electro from "@/public/electro-assets/electro.png";
import bruinbot from "@/public/bruinbot-assets/bruinbot-corrected.png";
import handaid from "@/public/handaid-assets/handaid.png"


const projectCardData = [
  { title: "Mechanism",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["MATLAB", "SOLIDWORKS", "Julia"],
    imageURL: mechanism,
  },

  { title: "odyssey.ai",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["OpenAI API", "Midjourney", "Flask", "AWS S3", "Firestore"],
    imageURL: hellLizard,
  },

  { title: "Electro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["P3.js", "Physics", "Simulation"],
    imageURL: electro,
  },

  { title: "HandAid",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["Forward Kinematics", "Inverse Kinematics", "Autodesk Inventor", "3D Printing"],
    imageURL: handaid,
  },

  { title: "BruinBot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit",
    tags: ["Computer Vision", "Python", "Flask", "Cloud Computing", "Firebase"],
    imageURL: bruinbot,
  },

] as const;


// work on this very much later
const projectBlogData = {
  mechanism: {

  }
}



export { projectCardData, projectBlogData }