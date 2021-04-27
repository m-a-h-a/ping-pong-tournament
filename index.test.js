const addition = require('./index.js');

describe('smoke tests', () => {
    test('smoke test', () => {
        expect(2 + 2).toBe(4);
    })
})

describe('Basic Maths', () => {
    test('Check that tests are working', () => {
        expect(addition(2, 2)).toBe(4);
    })
})