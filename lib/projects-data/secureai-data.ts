import secureai_image from "@/public/secureai-assets/secureai-600x500.png"

const toc = [
  { name: "Overview", hash: "#overview" },
  { name: "Background", hash: "#background" },
  { name: "Architecture", hash: "#architecture" },
  { name: "Implementation", hash: "#implementation" },
  { name: "Results", hash: "#results" },
  { name: "Conclusion", hash: "#conclusion" },
] as const;

const card = { 
  title: "Secure AI",
  description: "Platform to upload videos and search through the video frames using natural language with a multimodal model and retrieval augmented generation",
  tags: ["Flask", "Vector Database", "RAG", "Multimodal Model"],
  imageURL: secureai_image,
  pageURL: "/projects/secureai",
} as const;


const secureaiData = {page: "secureai", toc, card} as const;

export { secureaiData };