const config = {
  title: "Muhammad Hariz Faizul Anwar | AI Researcher & Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Muhammad Hariz Faizul Anwar, an AI researcher and full-stack developer from Malang, Indonesia, focused on LLMs, VLMs, and reinforcement learning for practical, reliable intelligent systems. Discover my publications on retrieval-augmented generation, fine-tuned legal LLMs, and engineering projects. Let's build something amazing together!",
    short:
      "Discover the portfolio of Muhammad Hariz Faizul Anwar, an AI researcher and full-stack developer working on LLMs, VLMs, and reliable intelligent systems.",
  },
  keywords: [
    "Muhammad Hariz Faizul Anwar",
    "Hariz",
    "portfolio",
    "AI researcher",
    "machine learning",
    "LLMs",
    "VLMs",
    "reinforcement learning",
    "retrieval-augmented generation",
    "RAG",
    "full-stack developer",
    "PyTorch",
    "TensorFlow",
    "FastAPI",
    "Next.js",
    "React",
    "Malang",
    "Indonesia",
  ],
  author: "Muhammad Hariz",
  email: "haeriz42069@gmail.com",
  site: "https://muhammadhariz.vercel.app",

  // for github stars button
  githubUsername: "Haeryz",
  githubRepo: "3d-Resume",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/muhammad-hariz-faizul-anwar/",
    instagram: "#",
    facebook: "#",
    github: "https://github.com/Haeryz",
  },
};
export { config };
