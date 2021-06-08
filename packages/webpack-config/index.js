const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const { merge } = require('webpack-merge');

const getConfig = (env, argv) => (env.production || argv.mode === 'production' || argv.nodeEnv === 'production' ? prodConfig : devConfig),
    configure = config => (env, argv) => merge(getConfig(env, argv), config);

module.exports = {
    configure,
    default: getConfig
};
