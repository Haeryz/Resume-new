import { SkillNames } from "./constants";

export const profile = {
  name: "Muhammad Hariz Faizul Anwar",
  shortName: "Hariz",
  title: "AI Researcher & Full-Stack Builder",
  focus:
    "LLMs, VLMs, and reinforcement learning for practical, reliable intelligent systems.",
  location: "Malang, Indonesia",
  email: "haeriz42069@gmail.com",
  phone: "+62 877 557 040 83",
  resumePdf: "/assets/resume/muhammad-hariz-faizul-anwar.pdf",
  social: {
    github: "https://github.com/Haeryz",
    linkedin:
      "https://www.linkedin.com/in/muhammad-hariz-faizul-anwar-471241302",
  },
  education: {
    school: "Universitas Muhammadiyah Malang",
    location: "Malang, Indonesia",
    degree: "B.Sc. in Informatics Engineering",
    date: "Sep 2022 - Apr 2026 (Expected)",
    gpa: "3.9/4.00",
    coursework: [
      "Artificial Intelligence",
      "Machine Learning",
      "Natural Language Processing",
      "Data Mining",
      "Information Retrieval",
      "Big Data Analytics",
      "Statistics and Probability",
      "Linear Algebra and Matrices",
    ],
  },
};

export const researchAreas = [
  "Retrieval-augmented generation",
  "LLM fine-tuning",
  "Legal-domain QA",
  "Vision-language models",
  "Reinforcement learning",
  "Model evaluation",
  "Dataset curation",
  "Citation-grounded answers",
];

export const experience = [
  {
    id: 1,
    startDate: "Jan 2025",
    endDate: "Mar 2025",
    title: "Fullstack Developer Intern",
    company: "CV Indo Azka Group",
    description: [
      'Developed "Depo79," an e-commerce platform for construction retail using the MERN stack and TypeScript.',
      "Built real-time chat with Socket.IO, JWT authentication, and Chart.js analytics dashboards.",
      "Used Zustand and Chakra UI for responsive product workflows, then configured GitHub Actions CI/CD and Azure Web Services deployment.",
    ],
    skills: [
      SkillNames.TS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.GITHUB,
      SkillNames.AZURE,
    ],
  },
  {
    id: 2,
    startDate: "Dec 2025",
    endDate: "Present",
    title: "Coding Teacher",
    company: "Timedoor Academy",
    description: [
      "Teach Python, JavaScript, and game development to students aged 7-17 through project-based lessons.",
      "Mentor 10+ students through capstone projects including interactive websites and mobile apps.",
      "Review code, evaluate logic puzzles, and give personalized feedback to improve problem-solving skills.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.JS, SkillNames.TS, SkillNames.REACT],
  },
];

export const publications = [
  {
    id: "rag-legal-qa",
    authors:
      "Galih Wasis Wicaksono, Nur Putri Hidayah, Christian Sri Kusuma Aditya, Muhammad Hariz Faizul Anwar, Nizam Avif Anhari, Andiko Febriyan Praja Dewa, Herlena Fatikasari, and Mutiara Anggun Puspa Insani",
    title:
      "Leveraging retrieval-augmented generation to support legal question answering: evidence from Indonesian human trafficking court decisions",
    venue: "International Journal on Informatics Visualization",
    status: "Accepted, in press",
    dataset:
      "https://doi.org/10.17632/8gtbky7r9x.1",
    contribution:
      "Built and evaluated a RAG pipeline on 408 court decisions from 143 Indonesian district courts covering 2023-2024 cases.",
    result:
      "Benchmarked Gemma, LLaMA, and Qwen with ROUGE/BLEU; best ROUGE-L reached 0.899 on identitas terdakwa.",
    tags: ["RAG", "Legal QA", "Gemma", "LLaMA", "Qwen", "ROUGE/BLEU"],
  },
  {
    id: "legal-case-llm",
    authors:
      "Muhammad Hariz Faizul Anwar, Nizam Avif Anhari, Galih Wasis Wicaksono, and Nur Putri Hidayah",
    title:
      "Legal-case LLM: an open-source fine-tuned model for Indonesian human trafficking jurisprudence",
    venue: "Jurnal Informatika",
    status: "Accepted, in press",
    doi: "https://doi.org/10.30595/juita.v14i1.28345",
    model:
      "https://huggingface.co/Haeryz/Llama-3.2-3B-FineTuned-BF16-Just-V2",
    contribution:
      "Curated and cleaned 408 court decisions, generated synthetic Q&A with Gemini 2.5 Pro, and formatted role/content JSON for fine-tuning.",
    result:
      "Supported L4 fine-tuning and evaluated against Qwen 2.5 3B and Phi-3 3B with ROUGE, BLEU, BERTScore, BARTScore, and Citation-F1.",
    tags: ["Fine-tuning", "Llama 3.2", "Gemini", "BERTScore", "Citation-F1"],
  },
];

export const certificationsAndLanguages = {
  certifications: ["NodeJS MongoDB Developer"],
  communication: [
    "Teaching",
    "Mentoring",
    "Technical Communication",
    "Scientific Writing",
  ],
  languages: ["English (TOEIC 865)", "Japanese", "Bahasa Indonesia (Native)"],
  interests: ["Camping", "Composting", "Yoga", "Traveling", "Fishing"],
};
