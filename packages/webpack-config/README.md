# Webpack Config <img style="vertical-align: middle" height="35" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png">

## What is webpack?

At its core, **webpack** is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.

## About

webpack configuration recommended by Medly to bundle the assets in your projects.

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
  "watch": "webpack serve --open --mode development --config node_modules/@medly/webpack-config",
  "dist": "webpack --mode production --config node_modules/@medly/webpack-config",
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
  "watch": "webpack serve --mode development --config webpack.dev.js"
 }
}
```

## Default config

You can view the default config [here](index.js)
