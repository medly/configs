const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const PACKAGE_ROOT_PATH = process.cwd(),
    ENTRY = path.resolve(PACKAGE_ROOT_PATH, './src/index');

module.exports = merge(common, {
    mode: 'development',
    entry: ['react-hot-loader/patch', ENTRY],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        hot: true,
        historyApiFallback: true
    },
    devtool: 'eval-cheap-module-source-map'
});
