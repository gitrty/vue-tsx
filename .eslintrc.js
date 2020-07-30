module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint"
    ],
    parserOptions: {
      ecmaVersion: 2020,
      parser: "@typescript-eslint/parser"
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/camelcase': 'off',
      "@typescript-eslint/no-var-requires":'off',
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    //   "quotes": [2, 'single'],
    //   semi: false,
    }
  };
  