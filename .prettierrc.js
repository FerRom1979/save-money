module.exports = {
  printWidth: 80,
  tabWidth: 4,
  singleQuote: false,
  semi: true,
  trailingComma: "es5",
  arrowParens: "always",
  overrides: [
    {
      files: "*.{js,jsx,tsx,ts,scss,json,html}",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
