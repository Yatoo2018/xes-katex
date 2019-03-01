
let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin');
let MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');


module.exports = {
    mode: 'production',
    entry:{
        app: './src/main.js',
        katex:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'..','dist'),
        filename:'[name].js',
        libraryTarget:'umd',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            { 
                test: /\.css$/,
                use: [
                    // 'style-loader',
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: "url-loader",
                options: {
                    limit: 10000,
                    name: '[name].[hash:7].[ext]',
                    publicPath:"fonts/",	//替换CSS引用的图片路径 可以替换成爱拍云上的路径
                    outputPath:"../dist/fonts/"		//生成之后存放的路径

                }
            },
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.js',
            'katexcss':'katex/dist/katex.css'
        }
    },
    devServer: {
        port: 8082,
        open: true
    },
    optimization: {
    minimizer: [
        new TerserPlugin({
            terserOptions: {
                output:{
                    comments: false
                }
            },
          }
    )],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['app']
        }),
        
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['../dist']),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        })
    ]
}