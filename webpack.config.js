const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js?$/,
        loader: "babel-loader"
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"]
      }
    ],
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin()
    ]
  }
};
