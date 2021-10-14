module.exports = function (api) {
    const presets = ['@babel/react'],
        plugins = [
            [
                'babel-plugin-styled-components',
                {
                    pure: true,
                    displayName: true,
                    minify: true,
                    transpileTemplateLiterals: true
                }
            ],
            '@babel/plugin-transform-runtime',
            [
                'inline-react-svg',
                {
                    svgo: {
                        plugins: [
                            {
                                cleanupIDs: {
                                    minify: false
                                }
                            }
                        ]
                    }
                }
            ]
        ];

    if (api.env() === 'development') {
        plugins.push('react-hot-loader/babel');
    }
    if (api.env() === 'production') {
        plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
    }

    return { presets, plugins, extends: '@medly/babel-config' };
};
