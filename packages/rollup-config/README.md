# Medly rollup config

> Shared [rollup config](https://rollupjs.org/guide/en/#introduction)

## Install

```shell
yarn add -D @medly/rollup-config
```

## Usage

### 1. Use default settings

Add below code in your `package.json`

```json
{
 "script": {
  "dist": "rollup --config node_modules/@medly/rollup-config/index.js"
 }
}
```

### 2. Overwrite default settings

Add `rollup.config.js` file at root level with below code

```js
const { configure } = require('@medly/rollup-config');

module.exports = configure({
 input = ["./src/index.ts"]
});
```

Add below code in your `package.json`

```json
{
 "script": {
  "dist": "rollup --config rollup.config.js"
 }
}
```
