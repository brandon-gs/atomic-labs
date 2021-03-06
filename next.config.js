const debug = process.env.NODE_ENV !== "production";

const prefix = "/atomic-labs";

module.exports = {
  dir: "./frontend",
  assetPrefix: !debug ? prefix : "",
  basePath: !debug ? prefix : "",
  env: {
    ASSET_PREFIX: !debug ? prefix : "",
  },
};
