# TypeScript Config for React Apps <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"> <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">

Stylelint rules are recommended to compile your TypeScript based react project.

> Shared [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Install

With Yarn: 

```shell
yarn add -D @medly/typescript-config-react
```

## Usage

Add below code in `tsconfig.json` file.

```json
{
 "extends": "@medly/typescript-config-react",
 "include": ["src", "types"],
 "exclude": ["node_modules", "dist", "coverage"]
}
```

## Default config

To view the default config click [here](tsconfig.json)