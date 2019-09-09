module.exports = {
  // Tailwind Paths
  configJS: "tailwind.js",
  sourceCSS: "src\\tailwind.css",
  outputCSS: "src\\styles.css",
  // Sass
  sass: false,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: ["dynamically-generated-class"], // Problem solved
  whitelistPatterns: [/dynamically/, /generated/, /class/],
  whitelistPatternsChildren: [],
  extensions: [".ts", ".html", ".js"],
  extractors: [],
  content: []
};
