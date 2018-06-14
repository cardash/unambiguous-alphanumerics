const BigNumber = require('bignumber.js')
// Allowed characters
const unambiguousAlphanumerics = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
  'N', 'P', 'R', 'U', 'V', 'W', 'X', 'Y',
]

// Character mapping back to integer
const reverseUnambiguousAlphanumerics = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'C': 10,
  'D': 11,
  'E': 12,
  'F': 13,
  'G': 14,
  'H': 15,
  'J': 16,
  'K': 17,
  'L': 18,
  'M': 19,
  'N': 20,
  'P': 21,
  'R': 22,
  'U': 23,
  'V': 24,
  'W': 25,
  'X': 26,
  'Y': 27,
}

// Bignum-based base conversion from lower base to higher base
const encode = (numOrStr) => {
  let bigNum = new BigNumber(numOrStr)
  let outStr = ''
  while (bigNum.isGreaterThan(0)) {
    const mod = bigNum.modulo(28).toNumber()
    outStr = unambiguousAlphanumerics[mod] + outStr
    bigNum = bigNum.dividedToIntegerBy(28)
  }
  return outStr
}

const decode = (unambiguousStr) => {
  let bigNum = new BigNumber(0)
  for (let i = 0; i < unambiguousStr.length; i++) {
    bigNum = bigNum.multipliedBy(28)
    bigNum = bigNum.plus(reverseUnambiguousAlphanumerics[unambiguousStr[i]])
  }
  return bigNum.toNumber()
}

const verify = (uStr) => uStr.split('').every(chr => unambiguousAlphanumerics.includes(chr))

module.exports = {
  unambiguousAlphanumerics,
  encode,
  decode,
  verify,
}
