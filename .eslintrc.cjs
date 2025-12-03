module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["node_modules", "dist"],
  rules: {
    // "template-curly-spacing": ["error", "never"],
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
  },
}
