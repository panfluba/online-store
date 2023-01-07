const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const loader = require('sass-loader');

const isDev = process.env.NODE_ENV === 'development'

module.exports = {
	mode: 'development',
	entry: './pages/main.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.ts$/i,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'source-map',
	plugins: [
		new HTMLWebpackPlugin({
			template: './pages/main.html',
            filename: 'main.html'
		}),

		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
        // new CopyPlugin({
        //     patterns: [
        //         {
        //             from: path.resolve(__dirname, './src/assets'),
        //             to: path.resolve(__dirname, './dist/assets'),
        //         },
        //     ] 
        // }),
        new CleanWebpackPlugin(),
	],
}