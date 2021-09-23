const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const PACKAGE_ROOT_PATH = process.cwd(),
    SRC = path.resolve(PACKAGE_ROOT_PATH, './src'),
    DIST = path.resolve(PACKAGE_ROOT_PATH, './dist'),
    PUBLIC = path.resolve(PACKAGE_ROOT_PATH, './public'),
    INDEX_HTML = path.resolve(PACKAGE_ROOT_PATH, './public/index.html');

module.exports = {
    output: {
        path: DIST,
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: '/'
    },
    performance: {
        maxAssetSize: 500000,
        maxEntrypointSize: 500000
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json'],
        symlinks: false,
        plugins: [new TsconfigPathsPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: '@svgr/webpack',
                        options: {
                            icon: true
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                include: SRC,
                exclude: [/node_modules/, /\.spec.tsx?$/, /\.test.tsx?$/, /__snapshots__/, /__tests__/],
                use: [
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 2,
                            workerParallelJobs: 50
                        }
                    },
                    'babel-loader',
                    'stylelint-custom-processor-loader'
                ]
            },
            {
                test: /\.xsl$/i,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: INDEX_HTML,
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: PUBLIC,
                    to: DIST,
                    globOptions: {
                        ignore: ['**/index.html']
                    }
                }
            ]
        }),
        new ForkTsCheckerWebpackPlugin(),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true
        }),
        new CompressionPlugin(),
        new Dotenv({ systemvars: true })
    ]
};
