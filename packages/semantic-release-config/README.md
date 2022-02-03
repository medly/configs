# Semantic Release Config <img style="vertical-align: middle" height="30" src="https://gblobscdn.gitbook.com/spaces%2F-LGsE7zdvzHI5cG-XV6p%2Favatar.png?alt=media">

## What is semantic-release?

**semantic-release** is a fully automated version management and package publishing library that automates the whole package release workflow including: determining the next version number, generating the release notes and publishing the package.

## About

**semantic-release** configurations are recommended to automate your react applications release workflow.

> Shared [semantic release config](https://semantic-release.gitbook.io/semantic-release/usage/configuration)

## Install

With Yarn:
```shell
yarn add -D @medly/semantic-release-config
```

## Usage

Add below line in your `package.json`

```json
{
 "release": {
  "extends": "@medly/semantic-release-config"
 }
}
```

## Default config

To view the default config click [here](index.json)