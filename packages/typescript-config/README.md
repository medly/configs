# TypeScript Config <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png">

## What is tsconfig.json ?

The tsconfig.json file specifies the root files and the compiler options required to compile the projects.

## About

Recommended tsconfig.json rules to compile your TypeScript projects.

> Shared [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

> [Schema](http://json.schemastore.org/tsconfig)

## Install

```shell
yarn add -D @medly/typescript-config
```

## Usage

Add below code in `tsconfig.json` file.

```json
{
 "extends": "@medly/typescript-config",
 "include": ["src", "types"],
 "exclude": ["node_modules", "dist", "coverage"]
}
```

## Default config

To view the default config click [here](tsconfig.json)