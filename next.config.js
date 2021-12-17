const pathPrefix = process.env.NODE_ENV === 'production'
  ? '/sticker-apps-site'
  : '';

module.exports = {
  assetPrefix: pathPrefix,
  basePath: '/sticker-apps-site',
  env: {
    pathPrefix,
  },
};
