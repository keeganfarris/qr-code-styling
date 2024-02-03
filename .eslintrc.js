module.exports = {
  env: {
    node: true
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  parserOptions: {
    sourceType: "module"
  },
  overrides: [
    {
      files: ["webpack*", "build-node.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
};
