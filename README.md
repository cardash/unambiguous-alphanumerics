# @cardash/unambiguous-alphanumerics

Generates unambiguous alphanumeric strings from a provided number or base-10 string, and reverse. Also validates a given string as an unambiguous string.

# Install

```sh
npm install --save git@github.com:cardash/unambiguous-alphanumerics
```

# Usage

```js
const ua = require('@cardash/unambiguous-alphanumerics')

const encodedNumber = ua.encode(112358) // '538R'

const decodedNumber = ua.decode('538R') // '112358'

const verifyNumber = ua.verify('538R') // true
```