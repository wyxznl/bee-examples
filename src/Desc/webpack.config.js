const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  target:'web',
  entry: path.resolve(__dirname, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'Desc.umd.js',
    libraryTarget:'umd'
  },
  externals: ["react","@roo/roo","react-dom"],
  resolve: {
    extensions: ['.js','.css','.jsx','.vue','.ts', '.tsx','.scss','.less','.json'],
    alias: {
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
                          'style-loader',
                'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
                          'style-loader',
                'css-loader', 'less-loader',
                ]
      },
      {
        test: /\.scss$/,
        use: [
                           'style-loader',
                'css-loader', 'sass-loader',
                ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: 'dist/img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
          name: 'dist/font/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: { transpileOnly: true, appendTsSuffixTo: [/\.vue$/] },
           }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                'modules': false
              }
            ],
            '@babel/preset-react' // react
          ],
          'plugins': ['@babel/plugin-transform-react-jsx', '@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime'] // react
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
       'process.env': JSON.stringify({NODE_ENV: 'production'}),
    }),
  ],
  devtool: 'source-map',
}
