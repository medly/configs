# Medly jest config for react apps

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
