module.exports = {
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],

  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
  },
};
