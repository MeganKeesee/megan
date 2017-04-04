
exports.modifyWebpackConfig = function(config, env) {

  config.merge({
    postcss (wp) {
            return [
              require('postcss-import')({ addDependencyTo: wp }),
              require('postcss-cssnext')({ browsers: 'last 2 versions', features: {customProperties: false} }),
              require('postcss-browser-reporter'),
              require('postcss-reporter'),
            ]
    },
  })

  if (env === 'build-css') {
    config.removeLoader('css');
    config.loader('css', {
      test: /\.(css|scss)/,
      exclude: /\.module\.(css|scss)$/,
      loader: extractTextWebpackPlugin.extract(['css?minimize', 'postcss', 'css']),
    })
  }

  if (env === 'develop') {
    config.removeLoader('css');
    config.loader('css', {
      test: /\.(css|scss)/,
      exclude: /\.module\.(css|scss)$/,
      loaders: ['style', 'css', 'postcss'],
    })
  }
  return config
}