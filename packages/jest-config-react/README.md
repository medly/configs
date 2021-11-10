# Jest Config for React Apps <img style="vertical-align: middle" height="25" src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png"> <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">

## What is Jest?

Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

## About

Jest rules recommended by Medly to provide more configuration power to your react based web applications.

> Shared [jest config](https://jestjs.io/docs/configuration)

## Install

```shell
yarn add -D @medly/jest-config-react
```

## Usage

Add below code in your `jest.config.js`

```js
const { configure } = require('@medly/jest-config-react');

module.exports = configure({
 rootDir: './'
});
```

## Default config

The given jest config comes enabled with following options

```js
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
```
