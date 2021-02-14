module.exports = {
  extends: [
    "react-app", // Create React App base settings
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": 0,
    "prettier/prettier": 0,
    "max-len": [1, 80, 4],
    semi: [2, "always"],
    "consistent-return": [
      "error",
      {
        treatUndefinedAsUnspecified: true,
      },
    ],
    "no-void": "off",
    "no-nested-ternary": "off",
    indent: [
      "error",
      2,
      {
        flatTernaryExpressions: true,
      },
    ],
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          consistent: true,
        },
      },
    ],
    "no-unused-vars": [
      2,
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-await-in-loop": "off",
    "no-multiple-empty-lines": [1, { max: 1 }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};
