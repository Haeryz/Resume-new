import { profile } from "./profile";

const config = {
  title: `${profile.name} | AI Researcher`,
  description: {
    long: "Explore the research-focused portfolio of Muhammad Hariz Faizul Anwar, an AI researcher and full-stack builder working across LLMs, VLMs, reinforcement learning, RAG, and legal-domain intelligent systems.",
    short:
      "AI research portfolio focused on LLMs, VLMs, RAG, reinforcement learning, and reliable intelligent systems.",
  },
  keywords: [
    "Muhammad Hariz Faizul Anwar",
    "Hariz",
    "Haeryz",
    "portfolio",
    "AI researcher",
    "LLM",
    "VLM",
    "RAG",
    "reinforcement learning",
    "legal question answering",
    "machine learning",
    "fine-tuning",
    "Indonesian legal AI",
    "PyTorch",
    "Transformers",
  ],
  author: profile.name,
  email: profile.email,
  site: process.env.NEXT_PUBLIC_SITE_URL || "",

  // for github stars button
  githubUsername: "Haeryz",
  githubRepo: "3d-Resume",

  get ogImg() {
    return `${this.site || ""}/assets/seo/og-image.png`;
  },
  social: {
    twitter: "",
    linkedin: profile.social.linkedin,
    instagram: "",
    facebook: "",
    github: profile.social.github,
  },
};
export { config };
