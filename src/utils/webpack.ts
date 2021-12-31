const TerserPlugin = require("terser-webpack-plugin");

const domain = {
  dev: "https://dev-api.**.cn",
  sit: "https://sit-api.**.cn",
  uat: "https://uat-api.**.cn",
  prod: "https://api.**.cn",
};

const proxies = {
  development: {
    [domain.dev]: "/scrm",
    [domain.sit]: [
      "/parking-ms",
      "/tianhong-order-api/v1",
      "/payment-app-api",
      "/payment-route-api",
    ],
  },
  //   sit: {
  //     [domain.sit]: [
  //       "/scrm",
  //       "/parking-ms",
  //       "/tianhong-order-api/v1",
  //       "/payment-app-api",
  //       "/payment-route-api",
  //     ],
  //   },
};

const proxyProps = {
  toProxy: true,
  ingorePath: true,
  changeOrigin: true,
};

const terserPlugin = new TerserPlugin({
  terserOptions: {
    ecma: undefined,
    warnings: false,
    parse: {},
    compress: {
      drop_console: true,
      drop_debugger: false,
      pure_funcs: ["console.log"],
    },
  },
});

module.exports = { domain, proxies, terserPlugin, proxyProps };
