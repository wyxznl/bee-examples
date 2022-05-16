/* eslint-disable no-undef */
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')

const { PUBLIC_URL } = process.env

module.exports = (env) =>  ({
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: PUBLIC_URL,
        filename: '[name].[chunkhash:5].js'
    },
    mode: env && env.production ? 'production' : 'development',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: [
                    /node_modules\/recoil/,
                    path.resolve(__dirname, 'src')
                ],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                { 'modules': false }
                            ],
                            '@babel/preset-react'
                        ],
                    }
                }, {
                    loader: 'ts-loader'
                }],
            },
            {
                test: /\.jsx?$/,
                include: [
                    /node_modules\/recoil/,
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                'modules': false,
                                'useBuiltIns': 'usage', // alternative mode: "entry"
                                'corejs': 3, // default would be 2
                                'targets': '> 0.25%, not dead'
                            }
                        ],
                        '@babel/preset-react'
                    ],
                    'plugins': [
                        '@babel/plugin-transform-react-jsx',
                        '@babel/plugin-proposal-class-properties',
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [env && env.production ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.less$/,
                use: [
                    env && env.production
                        ? MiniCssExtractPlugin.loader
                        : {
                            loader: 'style-loader',
                        },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                        options: {
                            lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                                modifyVars: {
                                    'primary-color': '#f89800', // 全局主色
                                    'link-color': '#f89800', // 链接色
                                },
                                javascriptEnabled: true,
                            },
                        },
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset',
                generator: {
                    filename: 'build/img/[name].[hash:7].[ext]' // 局部指定输出位置
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024 // 限制于 8kb
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                type: 'asset',
                generator: {
                    filename: 'build/font/[name].[hash:7].[ext]' // 局部指定输出位置
                },
            }
        ]
    },
    plugins: [
        ...(!(env && env.production) ? [new ESLintPlugin({
            context: 'src',
            extensions: ['js', 'jsx', 'ts', 'tsx'],
            fix: true,
            quiet: true,
        })] : []),
        ...((env && env.production) ? [new TerserPlugin({
            // 多进程
            parallel: true,
            // 删除注释
            extractComments: false,
            terserOptions: {
                compress: { // 生产环境去除console
                    drop_console: true,
                    drop_debugger: true,
                },
            },
        })] : []),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            catProdMode: process.env.AWP_DEPLOY_ENV === 'production'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new MomentLocalesPlugin()
    ],
    devtool: 'source-map',
    devServer: {
        open: true,
        proxy: {
            '/api': {
                target: 'https://yapi.sankuai.com/mock/21996',
                // target: 'https://e.shangou.test.sankuai.com',
                // pathRewrite: { '^/api': '/reuse/sc/product' },
                changeOrigin: true,
                // secure: false,
                // logLevel: 'debug',
                // headers: { swimlane: 'waimai-qa' }
            },
        }
    },
})
