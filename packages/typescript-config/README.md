# Medly typescript config

> Shared [TypeScript config](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Install

```shell
yarn add -D @medly/typescript-config
```

## Usage

Add below code in `tsconfig.json` file.

```json
{
 "extends": "@medly/typescript-config",
 "include": ["src"],
 "exclude": ["node_modules", "dist", "coverage"]
}
```
