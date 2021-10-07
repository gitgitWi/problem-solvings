module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "warn",
    "arrow-body-style": "warn",
  },
};
