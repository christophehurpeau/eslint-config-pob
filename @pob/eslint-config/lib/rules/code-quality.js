export default {
  name: "@pob/eslint-config/code-quality",
  rules: {
    complexity: ["warn", { max: 20 }],
    "max-depth": ["warn", 6],
  },
};
