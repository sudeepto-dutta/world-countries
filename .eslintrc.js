module.exports = {
  extends: [
    "react-app", // Create React App base settings
    "eslint:recommended", // recommended ESLint rules
    // recommended rules from @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    /*
     * Uses eslint-config-prettier to disable ESLint rules
     * from @typescript-eslint/eslint-plugin that would conflict with Prettier.
     */
    "prettier/@typescript-eslint",
    /*
     *  Enables eslint-plugin-prettier and eslint-config-prettier. This will
     *  display Prettier errors as ESLint errors. Make sure this is always the
     *  last configuration in the extends array.
     */
    "plugin:prettier/recommended",
  ],
  rules: {
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
  },
};
