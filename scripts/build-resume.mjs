import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const texFile = join(root, "main.tex");
const rootPdf = join(root, "main.pdf");
const outputDir = join(root, "public", "assets", "resume");
const outputPdf = join(outputDir, "muhammad-hariz-faizul-anwar.pdf");

const run = (command, args) =>
  spawnSync(command, args, {
    cwd: root,
    stdio: "inherit",
  });

if (!existsSync(texFile)) {
  console.error("Resume source not found: main.tex");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });

let compiled = false;

const latexmk = run("latexmk", [
  "-pdf",
  "-interaction=nonstopmode",
  "-halt-on-error",
  "main.tex",
]);

if (latexmk.status === 0 && existsSync(rootPdf)) {
  compiled = true;
} else {
  const firstPass = run("pdflatex", [
    "-interaction=nonstopmode",
    "-halt-on-error",
    "main.tex",
  ]);
  const secondPass =
    firstPass.status === 0
      ? run("pdflatex", [
          "-interaction=nonstopmode",
          "-halt-on-error",
          "main.tex",
        ])
      : firstPass;

  compiled = secondPass.status === 0 && existsSync(rootPdf);
}

if (!compiled && !existsSync(rootPdf)) {
  console.error(
    "Could not build resume PDF. Install latexmk or pdflatex in the build environment."
  );
  process.exit(1);
}

copyFileSync(rootPdf, outputPdf);
console.log(`Resume PDF written to ${outputPdf}`);
