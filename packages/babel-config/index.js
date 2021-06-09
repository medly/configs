module.exports = function (api) {
    const presets = [
            [
                '@babel/env',
                {
                    modules: api.env('production') ? false : 'auto'
                }
            ],
            '@babel/typescript'
        ],
        plugins = [],
        ignore = ['node_modules'];

    if (api.env('test')) {
        plugins.push('@babel/plugin-transform-runtime');
    } else {
        ignore.push('**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '__snapshots__');
    }

    return { presets, plugins, ignore };
};
