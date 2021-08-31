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
        plugins = ['@babel/plugin-transform-runtime'],
        ignore = ['node_modules'];

    if (!api.env('test')) {
        ignore.push('**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '__snapshots__');
    }

    return { presets, plugins, ignore };
};
