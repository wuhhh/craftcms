module.exports = {
  corePlugins: {
    container: false,
  },
  content: [
    "./templates/**/*.{twig,html}",
    "./src/**/*.js",
    "./config/formie.php",
  ],
  theme: {
    extend: {
      minHeight: {
        screenh: "100vh",
      },
    },
  },
};
