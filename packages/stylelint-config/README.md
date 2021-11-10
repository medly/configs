# Stylelint Config <img style="vertical-align: middle" height="30" src="https://cdn.freebiesupply.com/logos/large/2x/stylelint-logo-png-transparent.png">

## What is stylelint?

A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

## About

**stylelint** rules recommended by Medly to provide more linting (style) powers to your react based web applications.

> Shared [stylelint config](https://stylelint.io/user-guide/configure/)

## Install

```shell
yarn add -D @medly/stylelint-config
```

## Usage

Add below line in your `package.json`

```json
{
 "stylelint": { "extends": "@medly/stylelint-config" }
}
```

## Default config

The given stylelint config comes predefined with following options

```json
"syntax": "scss",
"plugins": ["stylelint-prettier"],
"extends": ["stylelint-config-standard", "stylelint-config-styled-components", "stylelint-prettier/recommended"],
"rules": {
    "prettier/prettier": true,
    "value-keyword-case": null,
    "declaration-bang-space-before": null,
    "declaration-empty-line-before": "never",
    "unit-no-unknown": [
        true,
        {
            "ignoreUnits": ["`"]
        }
    ],
    "function-name-case": null
}
```