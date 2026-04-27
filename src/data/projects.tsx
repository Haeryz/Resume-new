import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiDocker, SiFastapi, SiMongodb, SiPython, SiSocketdotio, SiTypescript } from "react-icons/si";

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const skill = (title: string, icon: ReactNode): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon,
});

const PROJECT_SKILLS = {
  python: skill("Python", <SiPython />),
  typescript: skill("TypeScript", <SiTypescript />),
  fastapi: skill("FastAPI", <SiFastapi />),
  mongodb: skill("MongoDB", <SiMongodb />),
  socketio: skill("Socket.IO", <SiSocketdotio />),
  docker: skill("Docker", <SiDocker />),
  next: skill("Next.js", <span className="text-[10px] font-bold">NEXT</span>),
  react: skill("React", <span className="text-[10px] font-bold">RCT</span>),
  vite: skill("Vite", <span className="text-[10px] font-bold">VITE</span>),
  tailwind: skill("Tailwind CSS", <span className="text-[10px] font-bold">TW</span>),
  shadcn: skill("shadcn/ui", <span className="text-[10px] font-bold">UI</span>),
  postgres: skill("PostgreSQL", <span className="text-[10px] font-bold">PG</span>),
  prisma: skill("Prisma", <span className="text-[10px] font-bold">PRSM</span>),
  streamlit: skill("Streamlit", <span className="text-[10px] font-bold">ST</span>),
  pytorch: skill("PyTorch", <span className="text-[10px] font-bold">PT</span>),
  transformers: skill("Transformers", <span className="text-[10px] font-bold">HF</span>),
  chrome: skill("Chrome Extension", <span className="text-[10px] font-bold">EXT</span>),
  azure: skill("Azure", <span className="text-[10px] font-bold">AZ</span>),
  express: skill("Express", <span className="text-[10px] font-bold">EX</span>),
  node: skill("Node.js", <span className="text-[10px] font-bold">NODE</span>),
  firebase: skill("Firebase Auth", <span className="text-[10px] font-bold">FB</span>),
};

const ProjectLinks = ({
  source,
  live,
  model,
}: {
  source?: string;
  live?: string;
  model?: string;
}) => {
  const links = [
    source && { href: source, label: "Source" },
    live && { href: live, label: "Demo" },
    model && { href: model, label: "Model" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <div className="my-6 flex flex-col items-start gap-3 md:flex-row">
      {links.map((link) => (
        <Link
          key={link.href}
          className="font-mono underline"
          rel="noopener noreferrer"
          target="_blank"
          href={link.href}
        >
          <Button variant="default" size="sm">
            {link.label}
            <ArrowUpRight className="ml-3 h-4 w-4" />
          </Button>
        </Link>
      ))}
    </div>
  );
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src?: string;
  visual: {
    eyebrow: string;
    lines: string[];
  };
  skills: { frontend: Skill[]; backend: Skill[] };
  content: ReactNode;
  github?: string;
  live?: string;
  model?: string;
};

const projects: Project[] = [
  {
    id: "nextcrm",
    category: "CRM platform",
    title: "NextCRM Deployment",
    visual: {
      eyebrow: "next.js / crm / ai",
      lines: [
        "crm.dashboard(accounts, leads, projects)",
        "documents + email + reports",
        "deployed_on(vercel)",
      ],
    },
    src: "/assets/projects-screenshots/portfolio/projects.png",
    github: "https://github.com/Haeryz/nextcrm-app",
    live: "https://mektek-bice.vercel.app/en",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.docker,
      ],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center md:text-2xl">
          A deployed CRM cockpit with projects, documents, email, and AI-ready workflows.
        </TypographyP>
        <TypographyP className="font-mono">
          This deployment customizes a modern open-source CRM stack around a
          usable Vercel-hosted demo, with dashboard navigation for sales,
          campaigns, project tracking, reports, document storage, and email
          workflows.
        </TypographyP>
        <ProjectLinks
          source="https://github.com/Haeryz/nextcrm-app"
          live="https://mektek-bice.vercel.app/en"
        />
        <TypographyH3 className="my-4 mt-8">Product Surface</TypographyH3>
        <p className="mb-2 font-mono">
          The app exposes dense CRM modules rather than a marketing shell:
          accounts, leads, projects, campaigns, reports, documents, and
          administration are all reachable from the first screen.
        </p>
        <TypographyH3 className="my-4 mt-8">Stack</TypographyH3>
        <p className="mb-2 font-mono">
          Next.js, React, TypeScript, shadcn/ui, PostgreSQL, Prisma, Docker, and
          Vercel provide a production-shaped full-stack baseline.
        </p>
        <TypographyH3 className="my-4 mt-8">Resume Value</TypographyH3>
        <p className="mb-2 font-mono">
          It demonstrates comfort working inside a large TypeScript application
          with real product modules, deployment concerns, and admin-facing UI.
        </p>
      </div>
    ),
  },
  {
    id: "deepfake-detector",
    category: "Computer vision",
    title: "Deepfake Detection System",
    visual: {
      eyebrow: "streamlit / pytorch / cv",
      lines: [
        "upload(image) -> model_ensemble",
        "custom_cnn + efficientnet + mobilenet",
        "streamlit.run(inference_ui)",
      ],
    },
    src: "/assets/projects-screenshots/jra/1.png",
    github: "https://github.com/Haeryz/Deepfake",
    live: "https://deepfake-nbtahi5od5xbiqccspmhtj.streamlit.app/",
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.transformers,
        PROJECT_SKILLS.docker,
      ],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center md:text-2xl">
          A deployed image-analysis app for comparing real and AI-generated faces.
        </TypographyP>
        <TypographyP className="font-mono">
          The Streamlit interface lets users upload an image, select one or more
          models, and run deepfake inference through a shared prediction path.
          The codebase includes a custom CNN and pretrained image classifiers.
        </TypographyP>
        <ProjectLinks
          source="https://github.com/Haeryz/Deepfake"
          live="https://deepfake-nbtahi5od5xbiqccspmhtj.streamlit.app/"
        />
        <TypographyH3 className="my-4 mt-8">Model Ensemble</TypographyH3>
        <p className="mb-2 font-mono">
          The inference layer supports CustomCNN, EfficientNet, and MobileNet so
          predictions can be compared instead of relying on a single model.
        </p>
        <TypographyH3 className="my-4 mt-8">Application Layer</TypographyH3>
        <p className="mb-2 font-mono">
          Streamlit, Pillow, PyTorch, torchvision, and Transformers are wired
          into an upload-first workflow suitable for quick model demos.
        </p>
        <TypographyH3 className="my-4 mt-8">Deployment</TypographyH3>
        <p className="mb-2 font-mono">
          The repository includes a Dockerfile and a live Streamlit deployment,
          making the ML work inspectable outside a notebook.
        </p>
      </div>
    ),
  },
  {
    id: "bafain",
    category: "IoT commerce",
    title: "Bafain Solar Dryer",
    visual: {
      eyebrow: "vite / fastapi / firebase",
      lines: [
        "solar_dryer.catalog()",
        "firebase.auth(token) -> fastapi",
        "orders + invoices + shipment",
      ],
    },
    src: "/assets/projects-screenshots/couponluxury/store.png",
    github: "https://github.com/Haeryz/Bafain",
    live: "https://bafain.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.vite,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.docker,
      ],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center md:text-2xl">
          A deployed product system for solar dryer sales and operations.
        </TypographyP>
        <TypographyP className="font-mono">
          Bafain combines a React product frontend with a FastAPI backend for
          authentication, cart, checkout, orders, invoices, shipment, address,
          product, and admin workflows.
        </TypographyP>
        <ProjectLinks
          source="https://github.com/Haeryz/Bafain"
          live="https://bafain.vercel.app"
        />
        <TypographyH3 className="my-4 mt-8">Backend API</TypographyH3>
        <p className="mb-2 font-mono">
          The documented API uses JSON endpoints, Firebase ID tokens, refresh
          flows, protected routes, and consistent error shapes for mobile or web
          integration.
        </p>
        <TypographyH3 className="my-4 mt-8">Operations Coverage</TypographyH3>
        <p className="mb-2 font-mono">
          Controllers and models cover the core commerce lifecycle from product
          browsing to checkout, invoice generation, shipping, and admin review.
        </p>
        <TypographyH3 className="my-4 mt-8">Deployment</TypographyH3>
        <p className="mb-2 font-mono">
          The frontend is live on Vercel, while the backend includes Docker and
          GitHub Actions workflow scaffolding for deployment automation.
        </p>
      </div>
    ),
  },
  {
    id: "resumate",
    category: "Job search",
    title: "ResuMate Job Search",
    visual: {
      eyebrow: "next.js / search / ux",
      lines: [
        "filter(remote, salary, role)",
        "rank(featured_roles)",
        "job_card -> quick_take",
      ],
    },
    src: "/assets/projects-screenshots/codingducks/problems.png",
    github: "https://github.com/Haeryz/BoorgerKirk",
    live: "https://boorger-kirk.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center md:text-2xl">
          A deployed job-search interface built for fast scanning and filtering.
        </TypographyP>
        <TypographyP className="font-mono">
          ResuMate presents a search-first jobs board with role cards, salary
          ranges, company labels, remote filters, experience filters, and quick
          summaries for each opportunity.
        </TypographyP>
        <ProjectLinks
          source="https://github.com/Haeryz/BoorgerKirk"
          live="https://boorger-kirk.vercel.app"
        />
        <TypographyH3 className="my-4 mt-8">Search Experience</TypographyH3>
        <p className="mb-2 font-mono">
          The first viewport exposes AI search, work type, salary, experience,
          department, and job type controls without forcing users through a
          landing page.
        </p>
        <TypographyH3 className="my-4 mt-8">Information Design</TypographyH3>
        <p className="mb-2 font-mono">
          Job cards combine compensation, location, seniority, tags, demand
          signals, application counts, and concise role summaries.
        </p>
        <TypographyH3 className="my-4 mt-8">Deployment</TypographyH3>
        <p className="mb-2 font-mono">
          The Vercel deployment makes the UI immediately reviewable and gives
          the portfolio another live product surface.
        </p>
      </div>
    ),
  },
  {
    id: "youtube-live-chat-translator",
    category: "Browser extension",
    title: "YouTube Live Chat Translator",
    visual: {
      eyebrow: "chrome / azure / translation",
      lines: [
        "content_script.observe(chat)",
        "azure.translate(message)",
        "rate_limit(2m_chars_month)",
      ],
    },
    src: "/assets/projects-screenshots/ghostchat/1.png",
    github: "https://github.com/Haeryz/yt-translator",
    skills: {
      frontend: [
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.chrome,
        PROJECT_SKILLS.react,
      ],
      backend: [PROJECT_SKILLS.azure],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center md:text-2xl">
          A Chrome extension that translates YouTube live chat in place.
        </TypographyP>
        <TypographyP className="font-mono">
          The extension injects a content script into YouTube live streams,
          detects new chat messages, sends them through Azure Translator, and
          renders translations below the original text.
        </TypographyP>
        <ProjectLinks source="https://github.com/Haeryz/yt-translator" />
        <TypographyH3 className="my-4 mt-8">Chat Automation</TypographyH3>
        <p className="mb-2 font-mono">
          The content script watches live chat updates and avoids translating
          messages that already match the target language.
        </p>
        <TypographyH3 className="my-4 mt-8">Usage Control</TypographyH3>
        <p className="mb-2 font-mono">
          Built-in tracking and rate limiting keep requests within Azure
          Translator free-tier constraints.
        </p>
        <TypographyH3 className="my-4 mt-8">Extension Surface</TypographyH3>
        <p className="mb-2 font-mono">
          Popup and options pages let users configure API credentials, region,
          target language, and translation state.
        </p>
      </div>
    ),
  },
  {
    id: "depo79",
    category: "E-commerce",
    title: "Depo79 Construction Retail",
    visual: {
      eyebrow: "mern / chat / ci",
      lines: [
        "jwt.auth(user, admin)",
        "cart + checkout + analytics",
        "socket_io.chat(order_support)",
      ],
    },
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    github: "https://github.com/Haeryz/E-Commerce-depo-79",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.typescript,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.mongodb,
        PROJECT_SKILLS.socketio,
        PROJECT_SKILLS.azure,
      ],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center md:text-2xl">
          A construction-materials e-commerce platform built during internship work.
        </TypographyP>
        <TypographyP className="font-mono">
          Depo79 implements MERN-stack commerce flows for product browsing,
          cart management, authentication, customer chat, and operational
          dashboards for construction retail.
        </TypographyP>
        <ProjectLinks source="https://github.com/Haeryz/E-Commerce-depo-79" />
        <TypographyH3 className="my-4 mt-8">Commerce Modules</TypographyH3>
        <p className="mb-2 font-mono">
          Backend controllers cover auth, addresses, carts, chat, and related
          retail workflows, while the frontend supports customer-facing product
          and order interactions.
        </p>
        <TypographyH3 className="my-4 mt-8">Realtime Support</TypographyH3>
        <p className="mb-2 font-mono">
          Socket.IO provides customer-support chat so buyers can communicate
          during browsing, checkout, and order follow-up.
        </p>
        <TypographyH3 className="my-4 mt-8">Delivery Pipeline</TypographyH3>
        <p className="mb-2 font-mono">
          The repository includes GitHub Actions and Azure workflow files,
          matching the deployment work described in the experience section.
        </p>
      </div>
    ),
  },
];

export default projects;
