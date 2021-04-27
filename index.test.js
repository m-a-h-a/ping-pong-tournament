const addition = require('./index.js');

test('smoke test', () => {
    expect(2+2).toBe(4);
});

test('Check that tests are working', () => {
    expect(addition(2, 2)).toBe(4);
});