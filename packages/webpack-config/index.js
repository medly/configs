const devConfig = require('./configs/webpack.dev');
const prodConfig = require('./configs/webpack.prod');
const { merge } = require('webpack-merge');

const getConfig = (env, argv) => (env.production || argv.mode === 'production' || argv.nodeEnv === 'production' ? prodConfig : devConfig),
    configure = config => (env, argv) => merge(getConfig(env, argv), config);

module.exports = getConfig;
module.exports.configure = configure;
