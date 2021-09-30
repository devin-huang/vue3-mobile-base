module.exports = {
  publicPath: process.env.NODE_ENV === "development" ? "/" : "/mall/catering",
  devServer: {
    disableHostCheck: true,
    // proxy: Object.keys(proxies[API_ENV]).reduce((proxy, key) => {
    //   return Object.assign(proxy, {
    //     [key]: {
    //       target: proxies[API_ENV][key],
    //       toProxy: true,
    //       ingorePath: true,
    //       changeOrigin: true,
    //     },
    //   });
    // }, {}),
  },
  css: {
    loaderOptions: {},
  },
  configureWebpack: {
    devtool: "source-map",
  },
};
