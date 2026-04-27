"use client";
import React from "react";
import Link from "next/link";

import projects, { Project } from "@/data/projects";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      data-project-section
      className="relative isolate z-[999] mx-auto min-h-[1180px] w-full px-6 py-16 md:px-8 md:py-20"
    >
      <div className="relative z-[1000] text-center">
        <Link href="#projects">
          <h2 className="bg-gradient-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-6xl font-extrabold leading-none tracking-normal text-transparent md:text-7xl">
            Projects
          </h2>
        </Link>
      </div>
      <div
        data-project-grid
        className="relative z-[2147483647] mx-auto mt-20 grid w-full max-w-[1280px] grid-cols-1 gap-x-8 gap-y-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const href = project.live ?? project.github ?? "#projects";

  return (
    <Link
      data-project-card
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      className="pointer-events-auto relative z-[2147483647] flex items-center justify-center"
    >
      <div
        className="relative block h-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-lg border border-white/10 bg-black shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
        style={{ aspectRatio: "3/2" }}
      >
        {project.src ? (
          <img
            className="absolute left-0 top-0 h-full w-full object-cover transition-transform duration-500 hover:scale-[1.05]"
            src={project.src}
            alt={project.title}
          />
        ) : (
          <ProjectVisual project={project} />
        )}
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black via-black/75 to-transparent">
          <div className="flex h-full flex-col items-start justify-end p-6">
            <div className="text-left text-xl font-extrabold leading-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              {project.title}
            </div>
            <div className="mt-1 w-fit rounded-lg bg-white px-2.5 py-0.5 text-xs font-extrabold leading-none text-black">
              {project.category}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectVisual = ({ project }: { project: Project }) => {
  return (
    <div className="absolute inset-0 p-5 text-left">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-red-500" />
        <span className="h-2 w-2 rounded-full bg-yellow-500" />
        <span className="h-2 w-2 rounded-full bg-green-500" />
        <span className="ml-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {project.visual.eyebrow}
        </span>
      </div>
      <div className="space-y-3 font-mono text-xs text-muted-foreground md:text-sm">
        {project.visual.lines.map((line) => (
          <p key={line} className="truncate rounded-md bg-secondary/40 px-3 py-2">
            <span className="text-primary">$</span> {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
