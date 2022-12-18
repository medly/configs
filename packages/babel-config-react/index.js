module.exports = function (api) {
    const ignore = [],
        overrides = [],
        presets = [
            [
                '@babel/preset-react',
                {
                    runtime: api.env('storybook') ? 'classic' : 'automatic'
                }
            ]
        ],
        plugins = [
            'polished',
            '@babel/plugin-transform-runtime',
            [
                'babel-plugin-styled-components',
                {
                    pure: true,
                    minify: true,
                    fileName: api.env('storybook'),
                    displayName: api.env('storybook'),
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
                    runtime: api.env('storybook') ? 'classic' : 'automatic'
                }
            ]
        ];

    if (api.env() === 'development' || api.env('storybook')) {
        plugins.push(['@babel/plugin-transform-modules-commonjs']);
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
        ignore.push('**/*.test.tsx', '**/*.test.ts', '**/test-utils.tsx', '**/*.stories.mdx', '**/*.stories.tsx', '__snapshots__', 'docs');

        if (!process.env.WITH_DATA_TESTID) {
            plugins.push(['react-remove-properties', { properties: ['data-testid'] }]);
        }
    }

    return { presets, plugins, ignore, overrides, extends: '@medly/babel-config' };
};
