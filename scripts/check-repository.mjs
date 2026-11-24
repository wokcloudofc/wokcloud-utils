import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(fileURLToPath(new URL("../", import.meta.url)));
const required = ["README.md", "LICENSE", "CONTRIBUTING.md", "SECURITY.md", ".github/CODEOWNERS", ".github/pull_request_template.md", ".github/copilot-instructions.md", ".github/workflows/verificacao.yml"];
const errors = [];
for (const name of required) {
  const file = path.join(root, name);
  if (!existsSync(file) || !statSync(file).isFile() || !readFileSync(file, "utf8").trim()) errors.push(`${name}: ficheiro obrigatório em falta ou vazio`);
}
const files = [...new Set(execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0").filter(Boolean))];
let checked = 0;
for (const name of files.filter(name => name.endsWith(".md"))) {
  const file = path.join(root, name);
  if (!existsSync(file)) continue;
  const content = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
  const links = [...content.matchAll(/!?\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/g)].map(match => match[1]);
  links.push(...[...content.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]));
  for (const raw of links) {
    if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(raw)) continue;
    try {
      const target = decodeURIComponent(raw.split(/[?#]/)[0]);
      if (!target) continue;
      const resolved = path.resolve(path.dirname(file), target);
      if (!resolved.startsWith(root + path.sep) || !existsSync(resolved)) errors.push(`${name}: ligação interna inválida: ${raw}`);
      checked++;
    } catch { errors.push(`${name}: ligação interna inválida: ${raw}`); }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Ficheiros obrigatórios e ${checked} ligações internas verificados. Este check valida documentação; não certifica uma biblioteca ainda por publicar.`);
}
