import { writeFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

writeFileSync(
  join(__dirname, "../dist", "/index.d.ts"),
  generateDeclarations()
);

function generateDeclarations() {
  const components = readdirSync(join(__dirname, "../src/components"))
    .filter((component) => component.endsWith(".vue"))
    .map((component) => component.split(".")[0]);

  return `
import type { Plugin } from "vue";
const pigment: Plugin;
export default pigment;

${components.map(
  (component) =>
    `import ${component} from "../src/components/${component}.vue";`
)}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ${components
      .map((component) => `${component}: typeof ${component}`)
      .join("\n")}
  }
}`;
}
