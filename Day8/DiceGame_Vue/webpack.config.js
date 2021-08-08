var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./src/main.js",
  output: {
    // Đổi tên thư mục sinh ra mặc định là "dist" thành "public"
    path: path.resolve(__dirname, "./public"),
    publicPath: "/public/",
    // Đổi tên thư mục tương ứng
    filename: "build.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {}
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        // file loader dùng để quản lý hình ảnh
        // và là công cụ để đưa hình ảnh ra môi trường production
        loader: "file-loader",
        // file options nơi mình định nghĩa thư mục khi đóng gói
        // mã nguồn ở trong thư mục public thì nó sẽ hiển thị logo.png theo kiểu nào
        options: {
          // name: "[name].[ext]?[hash]"
          name: function(file) {
            return "assets/images/[hash].[ext]?[hash]";
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
