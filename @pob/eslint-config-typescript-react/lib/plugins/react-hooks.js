export default (compat) =>
  compat.config({
    plugins: ["react-hooks"],

    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  });
