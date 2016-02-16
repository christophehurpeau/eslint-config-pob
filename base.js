module.exports = {
  "extends": "airbnb",
  "rules": {
    // added rules
    "max-len": [0, 120, 4],
    "camelcase": [2, {"properties": "always"}],
    "constructor-super": 2,
    "prefer-spread": 2,
    "dot-location": [2, "property"],

    "react/jsx-curly-spacing": 2,
    "react/jsx-no-duplicate-props": 2,
    // "react/no-deprecated": 2,
    "react/no-direct-mutation-state": 2,
    "react/prefer-es6-class": 2,

    // changed rules
    "indent": [2, 4, {"SwitchCase": 1}],        // http://eslint.org/docs/rules/indent
    "react/jsx-indent-props": [2, 4],
    "no-multiple-empty-lines": [1, {"max": 2}], // http://eslint.org/docs/rules/no-multiple-empty-lines
    "no-unused-vars": [2, {"args": "none"}],
    "no-use-before-define": [2, "nofunc"],
    "object-shorthand": [2, "methods"],

    // removed rules
    "prefer-const": 0,                          // http://eslint.org/docs/rules/prefer-const
    "no-shadow": 0,                             // http://eslint.org/docs/rules/no-shadow
    "no-cond-assign": 0,                        // http://eslint.org/docs/rules/no-cond-assign
    "no-return-assign": 0,                      // http://eslint.org/docs/rules/no-return-assign
    "consistent-return": 0,                     // http://eslint.org/docs/rules/consistent-return
    "default-case": 0,                          // http://eslint.org/docs/rules/default-case
    "eqeqeq": 0,                                // http://eslint.org/docs/rules/eqeqeq
    "guard-for-in": 0,                          // http://eslint.org/docs/rules/guard-for-in
    "no-else-return": 0,                        // http://eslint.org/docs/rules/no-else-return
    "no-eq-null": 0,                            // http://eslint.org/docs/rules/no-eq-null
    "no-param-reassign": 0,                     // http://eslint.org/docs/rules/no-param-reassign
    "no-loop-func": 0,                          // http://eslint.org/docs/rules/no-loop-func
    "func-names": 0,                            // http://eslint.org/docs/rules/func-names
    "no-empty": 0,
    "arrow-body-style": 0
  }
}
