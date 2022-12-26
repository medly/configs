const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const svgr = require('@svgr/rollup').default;
const fs = require('fs');
const path = require('path');
const { terser } = require('rollup-plugin-terser');

const PACKAGE_ROOT_PATH = process.cwd(),
    SRC = path.join(PACKAGE_ROOT_PATH, './src'),
    PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, './package.json'));

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

const getConfigs = ({
    babelConfig = path.join(PACKAGE_ROOT_PATH, './babel.config.js'),
    tsConfig = path.join(PACKAGE_ROOT_PATH, './tsconfig.json')
} = {}) =>
    ['es', 'cjs'].map(format => {
        const isTsConfigExists = fs.existsSync(tsConfig),
            isBabelConfigExists = fs.existsSync(babelConfig);

        return {
            input: path.join(PACKAGE_ROOT_PATH, `./src/index.${isTsConfigExists ? 'ts' : 'js'}`),
            external: [
                ...Object.keys(PKG_JSON.peerDependencies || {}),
                ...Object.keys(PKG_JSON.dependencies || {}),
                /@babel\/runtime/,
                'react/jsx-runtime',
                'react/jsx-dev-runtime'
            ],
            plugins: [
                commonjs({
                    namedExports: {
                        'react/jsx-runtime': ['jsx', 'jsxs', 'Fragment'],
                        'react/jsx-dev-runtime': ['jsx', 'jsxs', 'jsxDEV']
                    }
                }),
                nodeResolve({
                    extensions,
                    customResolveOptions: { preserveSymlinks: false },
                    mainFields: ['module', 'main']
                }),
                babel({
                    ...(isBabelConfigExists ? { configFile: babelConfig } : PKG_JSON.babel),
                    extensions,
                    include: ['src/**/*'],
                    babelHelpers: 'runtime'
                }),
                ...(isTsConfigExists
                    ? [
                          typescript({
                              tsconfig: tsConfig,
                              rootDir: SRC,
                              baseUrl: PACKAGE_ROOT_PATH,
                              declaration: true,
                              outDir: `dist/${format}`,
                              exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx', '**/*.stories.mdx', '**/docs/**'],
                              include: ['src/**/*', 'module.d.ts'],
                              module: 'esnext'
                          })
                      ]
                    : []),
                terser(),
                svgr({ native: true })
            ],
            output: {
                format,
                exports: 'auto',
                interop: 'auto',
                preserveModules: true,
                dir: `dist/${format}`
            }
        };
    });

const merge = (target = {}, source) =>
    Object.entries(source).reduce(
        (acc, [key, value]) => ({
            ...acc,
            ...(Array.isArray(value)
                ? { [key]: Array.from(new Set(acc[key]?.concat(value))) }
                : typeof value === 'object'
                ? { [key]: merge(acc[key], value) }
                : { [key]: value })
        }),
        { ...target }
    );

const configure = ({ babelConfig, tsConfig, ...config } = {}) => getConfigs({ babelConfig, tsConfig }).map(cf => merge(cf, config));

module.exports = getConfigs();
module.exports.configure = configure;
