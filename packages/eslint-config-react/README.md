# Medly eslint config for react app

Eslint rules recommended by Medly to provide more linting power to your react based web applications.

> Shared [eslint config](https://eslint.org/docs/user-guide/getting-started)

## Install

```shell
yarn add -D @medly/eslint-config-react
```

## Usage

Add below line in your `package.json`

```json
{
 "eslintConfig": {
  "parser": "@typescript-eslint/parser",
  "extends": "@medly/react"
 }
}
```
