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
  cpp: skill("C/C++", <span className="text-xs font-bold">C++</span>),
  windows: skill("Windows Driver Model", <span className="text-[10px] font-bold">WDM</span>),
  directx: skill("DirectX 11", <span className="text-[10px] font-bold">DX11</span>),
  pydantic: skill("Pydantic", <span className="text-[10px] font-bold">PYD</span>),
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
    id: "kernel-memory-introspection",
    category: "Systems research",
    title: "Windows Kernel Memory Introspection Engine",
    visual: {
      eyebrow: "x64 / WDM / telemetry",
      lines: [
        "cr3 -> pml4 -> pdpt -> pd -> pt",
        "ioctl(shared_memory_channel)",
        "ob_register_callbacks(handle_filter)",
      ],
    },
    github: "https://github.com/Haeryz/Apex-external-driver",
    skills: {
      frontend: [PROJECT_SKILLS.directx],
      backend: [PROJECT_SKILLS.cpp, PROJECT_SKILLS.windows],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center md:text-2xl">
          Page-level introspection with a separate diagnostics surface.
        </TypographyP>
        <TypographyP className="font-mono">
          This project explores low-level Windows telemetry through a WDM kernel
          component that manually translates x64 virtual addresses to physical
          memory using CR3, PML4, PDPT, PD, and PT traversal.
        </TypographyP>
        <ProjectLinks source="https://github.com/Haeryz/Apex-external-driver" />
        <TypographyH3 className="my-4 mt-8">Kernel Boundary</TypographyH3>
        <p className="mb-2 font-mono">
          The driver exposes a shared-memory and IOCTL interface for stable
          page-level reads without relying on normal user-mode API paths.
        </p>
        <TypographyH3 className="my-4 mt-8">Handle Filtering</TypographyH3>
        <p className="mb-2 font-mono">
          ObRegisterCallbacks-based filtering restricts sensitive handle access,
          making the telemetry path more controlled and observable.
        </p>
        <TypographyH3 className="my-4 mt-8">Diagnostics Surface</TypographyH3>
        <p className="mb-2 font-mono">
          A transparent DirectX 11 and ImGui overlay runs separately from the
          memory loop, keeping rendering and inspection concerns isolated.
        </p>
      </div>
    ),
  },
  {
    id: "gemini-api-toolkit",
    category: "AI tooling",
    title: "Unofficial Gemini API Service Toolkit",
    visual: {
      eyebrow: "cli / http / multimodal",
      lines: [
        "gemini(prompt, image?) -> json",
        "browser_cookie_auto_discovery()",
        "pydantic.parse(response_strategy)",
      ],
    },
    github: "https://github.com/Haeryz/Unofficial-Gemini-API",
    skills: {
      frontend: [PROJECT_SKILLS.typescript],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.pydantic,
        PROJECT_SKILLS.socketio,
        PROJECT_SKILLS.docker,
      ],
    },
    content: (
      <div>
        <TypographyP className="font-mono text-xl text-center md:text-2xl">
          Local automation layers for multimodal Gemini workflows.
        </TypographyP>
        <TypographyP className="font-mono">
          The toolkit wraps prompt and image handling behind CLI and HTTP service
          entrypoints, producing structured JSON responses that are easier to
          reuse in research prototypes and local automation.
        </TypographyP>
        <ProjectLinks source="https://github.com/Haeryz/Unofficial-Gemini-API" />
        <TypographyH3 className="my-4 mt-8">Service Interfaces</TypographyH3>
        <p className="mb-2 font-mono">
          The gemini, start-gemini, and gemini-api entrypoints cover direct CLI
          use and long-running HTTP service usage.
        </p>
        <TypographyH3 className="my-4 mt-8">Auth Workflow</TypographyH3>
        <p className="mb-2 font-mono">
          Cookie-loading logic supports browser auto-discovery so local sessions
          can be reused without hardcoding credentials into application code.
        </p>
        <TypographyH3 className="my-4 mt-8">Response Parsing</TypographyH3>
        <p className="mb-2 font-mono">
          Multiple parsing strategies normalize model output into Pydantic
          models, reducing brittle downstream prompt handling.
        </p>
      </div>
    ),
  },
];

export default projects;
