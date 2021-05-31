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

    if (api.env('production') || api.env('development'))
        ignore.push('**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '__snapshots__');

    if (api.env('test')) plugins.push('@babel/plugin-transform-runtime');

    return { presets, plugins, ignore };
};
