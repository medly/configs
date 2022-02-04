# ESLint Config for React Apps <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png"> <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">

Recommended ESLint configurations to provide more linting power to your react based web applications.

> Shared [ESLint config](https://eslint.org/docs/user-guide/getting-started)

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

## Default options

To view the default config click [here](index.json)