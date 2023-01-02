# Jest Config for React Apps <img style="vertical-align: middle" height="25" src="https://cdn.freebiesupply.com/logos/large/2x/jest-logo-png-transparent.png"> <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">

## What is Jest?

Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more.

## About

Recommended Jest rules to provide more configuration power to your react based web applications.

> Shared [Jest config](https://jestjs.io/docs/configuration)

## Install

```shell
yarn add -D @medly/jest-config-react
```

## Usage

### 1. Use default config

Add below code in your `package.json`

```json
{
 "script": {
  "dist": "jest --config=node_modules/@medly/jest-config-react/jest.config.js"
 }
}
```

### 2. Overwrite default settings

Add below code in your `jest.config.js`

```js
const baseConfig = require('@medly/jest-config-react');

module.exports = {
 ...baseConfig,
 rootDir: './'
};
```

## Default config

To view the default config click [here](index.js)
