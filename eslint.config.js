export default [
  {
    files: ["**/*.js"],
    plugins: {
      security: require("eslint-plugin-security"),
    },
    extends: ["eslint:recommended"],
    rules: {
      // Puedes agregar reglas personalizadas aquí
    },
  },
];