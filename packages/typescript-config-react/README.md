# Typescript Config for React Apps <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"> <img style="vertical-align: middle" height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">

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
 "extends": "@medly/typescript-config-react",
 "include": ["src", "types"],
 "exclude": ["node_modules", "dist", "coverage"]
}
```

## Default config

The given typescript config comes predefined with following options

```json
"compilerOptions": {
    "jsx": "react",
    "allowJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,
    "lib": ["dom", "ES5", "ES2015", "ES2017", "ES2018", "ESNext"],
    "module": "CommonJS",
    "moduleResolution": "node",
    "noEmit": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "strict": true,
    "target": "esnext",
    "types": ["jest", "node", "testing-library__jest-dom"],
}
```