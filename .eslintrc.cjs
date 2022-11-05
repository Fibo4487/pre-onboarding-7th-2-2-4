module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "_" }],
    "react/react-in-jsx-scope": "off",
    "no-var": "error",
    "no-multiple-empty-lines": "error",
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    eqeqeq: "error",
    "dot-notation": "warn",
    "no-unused-vars": "off",
    quotes: ["error", "double"],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto"
      }
    ]
  }
};
