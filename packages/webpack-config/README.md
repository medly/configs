# Medly webpack config

> Shared [webpack config](https://webpack.js.org/configuration/)

## Install

```shell
yarn add -D @medly/webpack-config
```

## Usage

### 1. Use default settings

Add below code in your `package.json`

```json
{
 "script": {
  "watch": "webpack serve --env development --config node_modules/@medly/webpack-config",
  "dist": "webpack --env production --config node_modules/@medly/webpack-config",
  "dist:analyze": "npm run dist -- --analyze"
 }
}
```

### 2. Overwrite default settings

Add `webpack.dev.js` file at root level with below code

```js
const { configure } = require('@medly/webpack-config');

module.exports = configure({
 devServer: {
  port: 8090
 }
});
```

Add below code in your `package.json`

```json
{
 "script": {
  "watch": "webpack serve --env development --config webpack.dev.js"
 }
}
```
