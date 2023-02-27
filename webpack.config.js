//webpack.dll.conf.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production', //生产模式，对js等文件压缩，默认生成的是压缩文件
  entry: [
    //提前打包一些基本不怎么修改的文件
    'react',
    'react-dom',
    'react-intl',
    'react-redux',
    'react-router',
    'react-router-config',
    'react-router-dom',
    'react-router-redux',
    'react-use',
    'redux',
    'redux-form',
    'redux-persist',
    'redux-saga',
    'axios',
    'history',
  ],
  output: {
    // __dirname 表示webpack.config.js 这个配置文件的位置
    filename: 'react-vendor-[id].[contenthash:8].js', //输入的文件名是什么，生成的文件名也是什么，默认配置        // filename:'[name].[chunkhash:8].js',//增加8位的哈希值，生成新的动态文件
    path: path.resolve(__dirname, 'dist'), //指定生成的文件目录
  },
  plugins: [new CleanWebpackPlugin()],
}
