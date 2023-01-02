module.exports = {
    collectCoverageFrom: [
        '<rootDir>/src/**/*.[jt]s?(x)',
        '!<rootDir>/**/*.d.ts',
        '!<rootDir>/**/index.[jt]s?(x)',
        '!<rootDir>/**/types.ts',
        '!<rootDir>/**/types/**',
        '!<rootDir>/**/theme/**',
        '!<rootDir>/**/test-utils.[jt]sx',
        '!<rootDir>/**/App.[jt]sx',
        '!<rootDir>/src/store/sagas.[jt]s',
        '!<rootDir>/node_modules/**'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    moduleNameMapper: {
        '\\.svg$': require.resolve('./mocks/svg.js'),
        '\\.(css|less|xsl)$': require.resolve('./mocks/styleMock.js')
    },
    modulePaths: ['<rootDir>/src'],
    rootDir: process.cwd(),
    setupFilesAfterEnv: [require.resolve('./setupAfterEnv.js')],
    testEnvironment: 'jsdom',
    verbose: true
};
