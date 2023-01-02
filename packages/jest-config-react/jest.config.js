module.exports = {
    collectCoverageFrom: [
        '<rootDir>/**/*.[jt]sx?',
        '!<rootDir>/**/*.d.ts',
        '!<rootDir>/**/index.[jt]sx?',
        '!<rootDir>/**/types.[jt]sx?',
        '!<rootDir>/**/types/**',
        '!<rootDir>/**/theme/**',
        '!<rootDir>/**/test-utils.[jt]sx?',
        '!<rootDir>/**/App.[jt]sx?',
        '!<rootDir>/src/store/sagas.[jt]sx?',
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
    testMatch: ['**/*.(spec|test).[jt]sx?'],
    verbose: true
};
