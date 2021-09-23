const defaultConfig = {
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100
        }
    },
    collectCoverageFrom: [
        '<rootDir>/src/**/*.(ts|tsx)',
        '!<rootDir>/**/index.(ts|tsx)',
        '!<rootDir>/src/App.tsx',
        '!<rootDir>/src/theme/**',
        '!<rootDir>/src/store/sagas.ts',
        '!<rootDir>/node_modules/**',
        '!<rootDir>/src/**/types.(ts|tsx)',
        '!<rootDir>/src/**/types/**',
        '!<rootDir>/src/utils/test-utils.tsx'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['.mjs', 'ts', 'tsx', 'js', 'jsx', 'svg'],
    roots: ['<rootDir>/src/'],
    setupFilesAfterEnv: ['<rootDir>/node_modules/@medly/jest-config-react/setupAfterEnv.js'],
    testEnvironment: 'jsdom',
    testMatch: ['**/*.(spec|test).(ts|tsx)'],
    verbose: true,
    moduleNameMapper: {
        '\\.(css|less|xsl)$': '<rootDir>/node_modules/@medly/jest-config-react/styleMock.js',
        '^@store(.*)$': '<rootDir>/src/store$1',
        '^@test-utils': '<rootDir>/src/utils/test-utils',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@theme(.*)$': '<rootDir>/src/theme$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@routes(.*)$': '<rootDir>/src/routes$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@constants(.*)$': '<rootDir>/src/constants$1'
    }
};

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

const configure = (config = {}) => merge(defaultConfig, config);

module.exports.configure = configure;
