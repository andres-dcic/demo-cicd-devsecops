const js = require("@eslint/js");
const security = require("eslint-plugin-security");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    plugins: { security },
    rules: {
      // Puedes agregar reglas personalizadas aquí
    },
  },
];