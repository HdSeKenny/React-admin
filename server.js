var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
    chunks: false
  }
}).listen(5050, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:5050');
});