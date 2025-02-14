import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import sonarjs from "eslint-plugin-sonarjs";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  { ignores: ["dist", "**/routeTree.gen.ts"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      sonarjs: sonarjs,
      unicorn: eslintPluginUnicorn,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...reactRefresh.configs.recommended.rules,
      ...sonarjs.configs.recommended.rules,
      ...eslintPluginUnicorn.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
