module.exports = {
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],

  "prettier/prettier": [
    "error",
    {
      endOfLine: "auto",
    },
  ],
};
