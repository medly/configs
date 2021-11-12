# Rollup Config <img style="vertical-align: middle" height="30" src="https://rollupjs.org/logo.svg" />

## What is rollup.js?

Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application.

## About

Rollup configuration recommended by Medly to give next-generation bundling powers to your react web applications.

> Shared [rollup config](https://rollupjs.org/guide/en/#configuration-files)

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

> **Note**: Add `tsconfig.json` file at the root level to emit type declaration files.

## Default config

You can view the default config [here](index.js)