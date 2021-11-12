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

You can view the default config [here](index.js)