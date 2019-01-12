// Webpack v4
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.pug$/,
        loaders: [{
          loader: 'apply-loader'
        }, {
          loader: 'pug-loader',
          options: { pretty: true }
        }]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
            }
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        // loader: "file-loader?name=/img/[name].[ext]"
        exclude: /fonts/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'img/'
          }
        }],
      },
      {
        test: /\.ico$/,
        use: [{
          loader: 'file-loader',
          options: {
              name: '[name].[ext]',
              outputPath: 'img/'
          }
        }],
      },
    ]
  },
  plugins: [ 
    new ExtractTextPlugin(
        {filename: 'style.css'}
    ),
    // new HtmlWebpackPlugin({
    //   inject: false,
    //   hash: true,
    //   template: './src/index.html',
    //   filename: 'index.html'
    // })
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.pug',
      inject: false,
      metadata: {
        // available in index.pug under locals
        // TODO: This doesn't work, and we need to figure out how to pass these via apply-loader
        // title, server, baseUrl
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'sliderm3page.html',
      template: 'src/html/sliderm3page.pug'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  }
};
