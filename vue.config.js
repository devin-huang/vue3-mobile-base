const { proxies, terserPlugin, proxyProps } = require("./src/utils/webpack.ts");
const API_ENV = process.env.VUE_APP_API_ENV || "dev";
console.log(API_ENV, "当前环境");
const env = proxies[API_ENV];

module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/parking",
  devServer: {
    disableHostCheck: true,
    proxy: Object.keys(env).reduce((proxy, key) => {
      const newProxy = { ...proxyProps, target: key };
      if (Array.isArray(env[key])) {
        const domain = env[key].reduce(
          (prev, cur) =>
            Object.assign(prev, {
              [cur]: newProxy,
            }),
          {}
        );
        return { ...proxy, ...domain };
      }
      return {
        ...proxy,
        ...{ [env[key]]: newProxy },
      };
    }, {}),
  },
  configureWebpack: (config) => {
    config.devtool = "source-map";

    if (API_ENV !== "development") {
      // JS文件添加内容哈希值
      config.output.filename = `js/[name].[contenthash].js`;
      config.output.chunkFilename = `js/[name].[contenthash].js`;
    }

    if (API_ENV !== "development") {
      // 清除CONSOLE
      config.optimization = {
        minimize: true,
        minimizer: [terserPlugin],
      };
    }
  },
  css: {
    // CSS抽离哈希打包
    extract: API_ENV !== "development",
    loaderOptions: {},
  },
};
