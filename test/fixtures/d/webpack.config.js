const BugsnagSourceMapUploaderPlugin = require('../../../').BugsnagSourceMapUploaderPlugin

module.exports = {
  entry: './app.js',
  devtool: 'hidden-source-map',
  output: {
    path: __dirname,
    filename: '[name].js?[chunkhash:20]',
    chunkFilename: '[name].chunk.js?[chunkhash:20]',
    publicPath: 'https://foobar.com/js'
  },
  plugins: [
    new BugsnagSourceMapUploaderPlugin({
      apiKey: 'YOUR_API_KEY',
      endpoint: `http://localhost:${process.env.PORT}`
    })
  ]
}
