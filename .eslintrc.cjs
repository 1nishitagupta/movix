/* eslint-env node */

module.exports = {
  env: { browser: true, es2020: true },
  // extends: [
  //   "eslint:recommended",
  //   "plugin:react/recommended",
  //   "plugin:react/jsx-runtime",
  //   "plugin:react-hooks/recommended",
  // ],
  extends: [
    "eslint:recommended",
    "plugin:react/jsx-runtime",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
