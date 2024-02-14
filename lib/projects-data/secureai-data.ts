import secureai_image from "@/public/secureai-assets/secureai-600x500.png"

const toc = [
  {
    name: "Secure AI",
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
  title: "Secure AI",
  description: "Platform to upload videos and search through the video frames using natural language. We used the gemini multimodal model and a vector database to perform retrieval augmented generation (RAG)",
  tags: ["Flask", "Vector Database", "RAG", "Multimodal Model"],
  imageURL: secureai_image,
  pageURL: "/projects/secureai",
} as const;

const secureaiData = {page: "secureai", toc, card} as const;

export { secureaiData };