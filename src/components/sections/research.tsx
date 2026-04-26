import { publications } from "@/data/profile";
import { ArrowUpRight, Database, FileText, FlaskConical, ScrollText } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import type React from "react";
import { Badge } from "../ui/badge";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const ResearchSection = () => {
  return (
    <SectionWrapper
      id="research"
      className="mx-auto flex min-h-[140vh] max-w-7xl flex-col justify-center px-4 py-24 md:px-8"
    >
      <SectionHeader
        id="research"
        title="Research"
        desc="Accepted work on legal-domain language models, retrieval, datasets, and grounded evaluation."
        className="mb-24 md:mb-32"
      />

      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-lg border border-border/70 bg-background/75 p-6 backdrop-blur-sm"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            <FlaskConical className="h-4 w-4" />
            Research Profile
          </div>
          <h3 className="mt-8 max-w-md text-3xl font-bold leading-tight md:text-5xl">
            Legal AI systems that can cite, retrieve, and explain.
          </h3>
          <p className="mt-6 text-sm leading-7 text-muted-foreground md:text-base">
            My current work sits at the intersection of Indonesian legal
            documents, retrieval-augmented generation, fine-tuned LLMs, and
            evaluation protocols that measure more than fluent text.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {[
              ["408", "court decisions"],
              ["143", "district courts"],
              ["2023-24", "case window"],
              ["0.899", "best ROUGE-L"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-md border border-border/60 bg-secondary/30 p-4"
              >
                <p className="text-2xl font-bold">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col gap-5">
          {publications.map((publication, index) => (
            <motion.article
              key={publication.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true, margin: "-80px" }}
              className="group rounded-lg border border-border/70 bg-background/75 p-6 backdrop-blur-sm transition-colors hover:border-primary/30"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {publication.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {publication.venue}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-snug md:text-2xl">
                    {publication.title}
                  </h3>
                </div>
                <ScrollText className="hidden h-6 w-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary md:block" />
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {publication.authors}
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <ResearchNote icon={<FileText className="h-4 w-4" />} label="Contribution">
                  {publication.contribution}
                </ResearchNote>
                <ResearchNote icon={<Database className="h-4 w-4" />} label="Evaluation">
                  {publication.result}
                </ResearchNote>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {publication.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {publication.doi && <ResearchLink href={publication.doi} label="DOI" />}
                {publication.dataset && (
                  <ResearchLink href={publication.dataset} label="Dataset" />
                )}
                {publication.model && (
                  <ResearchLink href={publication.model} label="Model" />
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ResearchNote = ({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="rounded-md border border-border/60 bg-secondary/25 p-4">
      <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {icon}
        {label}
      </div>
      <p className="text-sm leading-6 text-foreground/85">{children}</p>
    </div>
  );
};

const ResearchLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </Link>
  );
};

export default ResearchSection;
