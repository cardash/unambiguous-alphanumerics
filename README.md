# @cardash/unambiguous-alphanumerics

[![CircleCI](https://circleci.com/gh/cardash/unambiguous-alphanumerics/tree/master.svg?style=svg&circle-token=bb28028736ae338f81c5d37a2f29a84fdbe050b3)](https://circleci.com/gh/cardash/unambiguous-alphanumerics/tree/master) [![Coverage Status](https://coveralls.io/repos/github/cardash/unambiguous-alphanumerics/badge.svg?branch=master)](https://coveralls.io/github/cardash/unambiguous-alphanumerics?branch=master)

Generates unambiguous alphanumeric strings from a provided number or base-10 string, and reverse. Also validates a given string as an unambiguous string.

# Install

```sh
npm install --save @cardash/unambiguous-alphanumerics
```

# Usage

```js
const ua = require('@cardash/unambiguous-alphanumerics')

const encodedNumber = ua.encode(112358) // '538R'

const decodedNumber = ua.decode('538R') // '112358'

const verifyNumber = ua.verify('538R') // true
```
