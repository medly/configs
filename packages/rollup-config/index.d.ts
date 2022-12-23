import { RollupOptions } from 'rollup';

type Config = RollupOptions & {
    /**
     * The config file path that corresponds to the Babel's config. Defaults to searching for "bebel" keyword inside package.json
     * or "babel.config.js" in the root folder.
     *
     * Eg. path.resolve("./configs/babel.config.js")
     *
     * Default: `undefined`
     */
    babelConfig: string;
    /**
     * The config file path that corresponds to the tsconfig. Defaults to searching for "tsconfig.json" in the root folder.
     *
     * Eg. path.resolve("./tsconfig.build.json")
     *
     * Default: `undefined`
     */
    tsConfig: string;
};
export declare const configure: (config: Config) => RollupOptions[];
