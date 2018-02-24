const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports= {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: path.resolve("dist"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use:[
                {
                    loader: "style-loader"
                }, 
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: '[name]__[local]--[hash:base64:5]'
                    }
                },
                {
                    loader: "postcss-loader"
                }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}