hotLoader.jsvar webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
config.entry.unshift("webpack-dev-server/client?http://localhost:5050/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true,
  port: 5050
});
server.listen(5050);