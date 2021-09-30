module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ["Android >= 4.0", "iOS >= 8"],
    },
    // postcss-pxtorem 插件的版本需要 >= 5.0.0
    "postcss-pxtorem": {
      rootValue({ file }) {
        return file.indexOf("vant") !== -1 ? 37.5 : 75;
      },
      propList: ["*"],
    },
  },
};
