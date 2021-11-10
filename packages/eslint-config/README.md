# Eslint Config <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/eslint/eslint.png">

## What is ESLint?

It is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

> Shared [eslint config](https://eslint.org/docs/user-guide/getting-started)

## Install

```shell
yarn add -D @medly/eslint-config
```

## Usage

Add below line in your `package.json`

```json
{
 "eslintConfig": {
  "extends": "@medly"
 }
}
```

## Default options

The following eslint config comes with following options enabled

```json
"env": {
    "es6": true,
    "node": true,
    "commonjs": true
},
"parserOptions": {
    "ecmaVersion": 12
},
"parser": "@typescript-eslint/parser",
"plugins": ["@typescript-eslint", "jest", "prettier"],
"extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended", "plugin:jest/recommended"],
"rules": {
    "no-var": "error",
    "no-undef": "error",
    "prefer-const": "error",
    "no-param-reassign": "error",
    "arrow-parens": ["error", "as-needed"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": [
        "error",
        {
            "allowSingleExtends": true
        }
    ]
},
"overrides": [
    {
        "files": ["*.js", "*.jsx"],
        "rules": {
            "@typescript-eslint/explicit-module-boundary-types": "off"
        }
    }
]
```
