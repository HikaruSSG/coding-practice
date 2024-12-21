import globals from "globals";
import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginNode from "eslint-plugin-node";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser,
      },
    },
    env: {
      es2021: true,
      node: true,
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      import: pluginImport,
      node: pluginNode,
    },
    rules: {
      "import/no-unresolved": "error",
      "node/no-missing-import": "error",
      "node/no-unpublished-import": "error",
      "node/no-unsupported-features/es-syntax": "off",
    },
  },
];
