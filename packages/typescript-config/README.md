# Typescript Config <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png">

# What is tsconfig.json ?

The tsconfig.json file specifies the root files and the compiler options required to compile the project.

## About

Medly recommended rules to better compile your TypeScript project.

> Shared [typeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

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

You can view the default config [here](tsconfig.json)