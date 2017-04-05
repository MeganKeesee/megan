
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

  return config
}