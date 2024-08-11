import { fixupPluginRules } from "@eslint/compat";

function legacyPlugin(compat, name, alias = name) {
  const plugin = compat.plugins(name)[0]?.plugins?.[alias];

  if (!plugin) {
    throw new Error(`Unable to resolve plugin ${name} and/or alias ${alias}`);
  }

  return fixupPluginRules(plugin);
}

export default (compat) => [
  {
    plugins: {
      "react-hooks": legacyPlugin(
        compat,
        "eslint-plugin-react-hooks",
        "react-hooks",
      ),
    },

    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  },
];
