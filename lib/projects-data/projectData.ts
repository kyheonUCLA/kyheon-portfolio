import chebyshev from "@/public/mechanism-assets/chebyshev.png";
import hellLizard from "@/public/odysseyai-assets/hell-lizard.png";
import electro from "@/public/electro-assets/electro.png";
import bruinbot from "@/public/bruinbot-assets/bruin-bear.png";
import robot from "@/public/bruinbot-assets/bruinbot-left.png";


const projectCardData = [
  { title: "Mechanism",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit. Mauris facilisis felis et nunc gravida, vel fringilla libero dictum.",
    tags: ["MATLAB", "SOLIDWORKS", "Julia"],
    imageURL: chebyshev,
  },

  { title: "odyssey.ai",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit. Mauris facilisis felis et nunc gravida, vel fringilla libero dictum.",
    tags: ["OpenAI API", "Midjourney", "Flask", "AWS S3", "Firestore"],
    imageURL: hellLizard,
  },

  { title: "Electro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit. Mauris facilisis felis et nunc gravida, vel fringilla libero dictum.",
    tags: ["P3.js", "Physics", "Simulation"],
    imageURL: electro,
  },

  { title: "Robot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit. Mauris facilisis felis et nunc gravida, vel fringilla libero dictum.",
    tags: ["Forward Kinematics", "Julia", "Inverse Kinematics", "MATLAB", "Autodesk Inventor", "3D Printing"],
    imageURL: robot,
  },

  { title: "BruinBot",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam aliquam ipsum eget luctus. Proin a tortor sit amet libero aliquam vestibulum. Quisque nec gravida velit. Mauris facilisis felis et nunc gravida, vel fringilla libero dictum.",
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