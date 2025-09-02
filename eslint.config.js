import js from "@eslint/js";
import security from "eslint-plugin-security";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    plugins: { security },
    rules: {
      // Puedes agregar reglas personalizadas aquí
    },
  },
  {
    files: ["test/**/*.js", "**/*.test.js"],
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        before: true,
        after: true,
        beforeEach: true,
        afterEach: true,
        console: true,
        require: true,
        module: true,
      },
    },
  },
];