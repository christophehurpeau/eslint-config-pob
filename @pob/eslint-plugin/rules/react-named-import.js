export default {
  meta: {
    type: "problem",

    docs: {
      description: "Use named react import as suggested in the doc",
      category: "Best Practices",
      recommended: true,
    },

    messages: {
      namespace:
        'import * as React from "react" is forbidden. Use named imports instead.',
      default:
        'import React from "react" is forbidden. Use named imports instead.',
    },
  },

  create(context) {
    const checkNode = (node, messageId) => {
      const importDeclaration = node.parent;
      const importSource = importDeclaration.source.value.trim();
      if (importSource !== "react") return;
      context.report({
        node,
        messageId,
      });
    };
    return {
      ImportNamespaceSpecifier: (node) => {
        checkNode(node, "namespace");
      },
      ImportDefaultSpecifier: (node) => {
        checkNode(node, "default");
      },
    };
  },
};
