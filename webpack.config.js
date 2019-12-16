const path =  require('path')  //导入node.js中 专门操作路径的模块
const HtmlWebpackPlugin = require('html-webpack-plugin')  //导入生成预览页面的模块
const VueLoaderPlugin = require('vue-loader/lib/plugin')  //导入vue

module.exports = {
  /* mode: 'development',  //指定构建模式，development：开发环境；production：生产环境*/
  entry: path.join(__dirname,'./src/index.js'), //打包的入口文件
  output: {
    path: path.join(__dirname,'./dist'),  //打包的出口文件
    filename: "bundle.js"  //打包完成的文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader']}, //打包css文件
      { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']}, //打包scss文件
      {
        test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
        use: 'url-loader?limit=16940&name=[hash:8]-[name].[ext]' //打包样式表中的图片和字体文件(url-loader)
      },
            /*打包js高级语法*/
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, //exclude为排除项，表示不处理node_modules下的js文件
      { test: /\.vue$/, use: 'vue-loader' } //打包vue
    ] //test表示匹配的文件类型，use表示对应要调用的loader
  },
  resolve: {
    alias: {  //修改vue被导入时的路径
      'vue$': 'vue/dist/vue.js'
    }
  }
}
