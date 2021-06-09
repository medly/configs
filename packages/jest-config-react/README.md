# Medly jets config for react apps

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
