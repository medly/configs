# Medly babel config

## What is Babel ?
### Babel is a JavaScript compiler

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
