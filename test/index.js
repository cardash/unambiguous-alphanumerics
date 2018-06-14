const assert = require('assert')
const ua = require('..')

describe('Unambiguous Alphanumerics', () => {
  it('works for lots of numbers', () => {
    for (let i = 0; i < 10000; i++) {
      assert.equal(i.toString(), ua.decode(ua.encode(i)))
      assert.ok(ua.verify(ua.encode(i)))
    }
  })

  it('works for the current time', () => {
    const now = Date.now()
    assert.equal(now, ua.decode(ua.encode(now)))
  })

  it('works for super large numbers', () => {
    const nownow = Date.now().toString() + Date.now().toString()
    assert.equal(nownow, ua.decode(ua.encode(nownow)))
  })
})
