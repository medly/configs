const { babel } = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const path = require('path');
const { terser } = require('rollup-plugin-terser');

const PACKAGE_ROOT_PATH = process.cwd(),
    SRC = path.join(PACKAGE_ROOT_PATH, './src'),
    INPUT = path.join(PACKAGE_ROOT_PATH, './src/index.ts'),
    TS_CONFIG = path.join(PACKAGE_ROOT_PATH, './tsconfig.json'),
    PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, './package.json'));

const extensions = ['.ts', '.tsx', '.js'];

const configs = ['es', 'cjs'].map(format => ({
    input: INPUT,
    preserveModules: true,
    external: [...Object.keys(PKG_JSON.peerDependencies || {}), ...Object.keys(PKG_JSON.dependencies || {})],
    plugins: [
        commonjs(),
        nodeResolve({
            extensions,
            customResolveOptions: { preserveSymlinks: false },
            mainFields: ['module', 'main']
        }),
        babel({
            ...PKG_JSON.babel,
            extensions,
            babelHelpers: 'bundled'
        }),
        typescript({
            tsconfig: TS_CONFIG,
            rootDir: SRC,
            baseUrl: PACKAGE_ROOT_PATH,
            declaration: true,
            outDir: `dist/${format}`,
            exclude: ['**/*.test.ts'],
            include: ['src/**/*', 'module.d.ts'],
            module: 'esnext'
        }),
        terser()
    ],
    output: {
        format,
        exports: 'auto',
        dir: `dist/${format}`
    }
}));

const configure = (config = {}) => configs.map(cf => ({ ...cf, ...config }));

module.exports = configs;
module.exports.configure = configure;
