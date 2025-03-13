import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

type WebpackConfiguration = Configuration & { devServer: DevServerConfiguration };
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: WebpackConfiguration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'assets', 'index.html') })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    }
                  },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        static: path.resolve(__dirname, 'build'),
    },
};

export default config;