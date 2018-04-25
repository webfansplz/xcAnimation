'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
//拼接路径
function resolve(track) {
  return path.join(__dirname, '..', track);
}
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: resolve('public'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      packages: resolve('packages')
    }
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    inline: true,
    open: true,
    historyApiFallback: true,
    host: '192.168.10.153',
    port: 4396,
    compress: true,
    overlay: {
      errors: true,
      warnings: false
    },
    quiet: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: resolve('node_modules')
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //开启HMR(热替换功能,替换更新部分,不重载页面！)
    new webpack.HotModuleReplacementPlugin(),
    //显示模块相对路径
    new webpack.NamedModulesPlugin(),
    //配置html入口信息
    new HtmlWebpackPlugin({
      title: 'hi,vue-animation',
      filename: 'index.html',
      template: 'index.html',
      //js资源插入位置,true表示插入到body元素底部
      inject: true
    }),
    //编译提示插件
    new FriendlyErrorsPlugin({
      //编译成功提示！
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://localhost:4396`]
      },
      //编译出错！
      onErrors: function(severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        const filename = error.file.split('!').pop();
        //编译出错时,右下角弹出错误提示！
        notifier.notify({
          title: 'react-cli',
          message: severity + ': ' + error.name,
          subtitle: filename || '',
          icon: path.join(__dirname, 'err.png')
        });
      }
    })
  ]
};
