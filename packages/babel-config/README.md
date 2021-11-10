# Babel Config <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/babel/logo/master/babel.png">

## What is Babel ?

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

> Shared [Babel config](https://babeljs.io/docs/en/configuration)

## Install

```shell
yarn add -D @medly/babel-config
```

## Usage

Add below code in your `package.json`

```json
{
 "babel": {
  "extends": "@medly/babel-config"
 }
}
```

## Default config

The given babel config comes enabled with following options

```js
module.exports = function (api) {
    const presets = [
            [
                '@babel/env',
                {
                    modules: api.env('production') ? false : 'auto'
                }
            ],
            '@babel/typescript'
        ],
        plugins = ['@babel/plugin-transform-runtime'],
        ignore = ['node_modules'];

    if (!api.env('test')) {
        ignore.push('**/*.test.ts', '**/*.test.tsx', '**/*.test.js', '**/*.test.jsx', '__snapshots__');
    }

    return { presets, plugins, ignore };
};
```
