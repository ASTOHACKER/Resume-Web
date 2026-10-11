import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // AI skill / agent scaffolding — not shipped to Vercel:
    ".agents/**",
    ".claude/**",
    ".cursor/**",
    ".codex/**",
    ".gemini/**",
    ".impeccable/**",
    ".hermes/**",
    ".vscode/**",
    "wiki/**",
    "profile/**",
    "public/**",
  ]),
]);

export default eslintConfig;
