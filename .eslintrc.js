module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript/recommended",
    "plugin:vue/vue3-essential",
    "plugin:storybook/recommended",
    "plugin:markdown/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ["simple-import-sort", "import"],
  rules: {
    "@typescript-eslint/ban-types": "off",
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    eqeqeq: "off",
    curly: "error",
    "simple-import-sort/imports": "off",
    "simple-import-sort/exports": "off",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
