# Medly typescript config for react apps

Medly recommended rules to better compile your TypeScript based react project.

> Shared [typeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Install

```shell
yarn add -D @medly/typescript-config-react
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
