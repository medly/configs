module.exports = function (api) {
    const overrides = [],
        presets = [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic'
                }
            ]
        ],
        plugins = [
            '@babel/plugin-transform-runtime',
            [
                'babel-plugin-styled-components',
                {
                    pure: true,
                    minify: true,
                    fileName: false,
                    displayName: false,
                    transpileTemplateLiterals: true
                }
            ],
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
            ],
            [
                '@babel/plugin-transform-react-jsx',
                {
                    runtime: 'automatic'
                }
            ]
        ];

    if (api.env() === 'development') {
        overrides.push({
            plugins: [
                [
                    'babel-plugin-styled-components',
                    {
                        fileName: true,
                        displayName: true
                    }
                ]
            ]
        });
    }

    if (api.env() === 'production') {
        plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
    }

    return { presets, plugins, overrides, extends: '@medly/babel-config' };
};
