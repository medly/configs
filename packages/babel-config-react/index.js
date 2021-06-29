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

    return { presets, plugins, extends: '@medly/babel-config' };
};
