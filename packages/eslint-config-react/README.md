# Eslint Config for React Apps <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png"> <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">

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

## Default options

The following eslint config comes with following options enabled

```json
"root": true,
"env": {
    "es6": true,
    "browser": true,
    "jest/globals": true
},
"settings": {
    "react": {
        "version": "detect"
    }
},
"parserOptions": {
    "ecmaVersion": 11,
    "jsx": true
},
"globals": {
    "React": true,
    "JSX": true
},
"ignorePatterns": ["**/*.snap"],
"parser": "@typescript-eslint/parser",
"plugins": ["react", "react-hooks"],
"extends": ["@medly", "plugin:react/recommended", "plugin:react-hooks/recommended"],
"rules": {
    "react/jsx-fragments": "warn",
    "react/self-closing-comp": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/prop-types": "off",
    "react/jsx-no-bind": [
        "error",
        {
            "allowArrowFunctions": true
        }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
}
```