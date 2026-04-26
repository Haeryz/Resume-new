import { SkillNames, SKILLS } from "@/data/constants";
import { profile, researchAreas } from "@/data/profile";
import { Badge } from "../ui/badge";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";

const skillGroups = [
  {
    label: "Research",
    skills: [
      SkillNames.PYTHON,
      SkillNames.PYTORCH,
      SkillNames.TENSORFLOW,
      SkillNames.TRANSFORMERS,
      SkillNames.OPENCV,
    ],
  },
  {
    label: "Systems",
    skills: [
      SkillNames.SQL,
      SkillNames.CPP,
      SkillNames.FASTAPI,
      SkillNames.DOCKER,
      SkillNames.LINUX,
      SkillNames.GIT,
    ],
  },
  {
    label: "Product",
    skills: [
      SkillNames.TS,
      SkillNames.JS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.AZURE,
    ],
  },
];

const SkillsSection = () => {
  return (
    <SectionWrapper
      id="skills"
      className="w-full min-h-screen md:min-h-[150dvh] pointer-events-none"
    >
      <SectionHeader
        id="skills"
        title="Research Stack"
        desc="A practical ML toolkit wrapped around experiments, datasets, and deployable systems."
      />
      <div className="absolute inset-x-0 bottom-12 z-10 mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 md:grid-cols-3 md:px-8">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-lg border border-border/60 bg-background/70 p-5 backdrop-blur-sm"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skillName) => {
                const skill = SKILLS[skillName];
                return (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="gap-2 bg-secondary/40 font-normal"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.label}
                      className="h-3.5 w-3.5 object-contain"
                    />
                    {skill.label}
                  </Badge>
                );
              })}
            </div>
          </div>
        ))}
        <div className="rounded-lg border border-border/60 bg-background/70 p-5 backdrop-blur-sm md:col-span-3">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Current Direction
          </p>
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground md:text-base">
            {profile.focus}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {researchAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border/70 px-3 py-1 text-xs text-foreground/80"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
