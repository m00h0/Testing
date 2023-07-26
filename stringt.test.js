const stringLength = require('./string');

test('returns character count of provided string', () => {
  expect(stringLength('abcd')).toBe(4);
});

test('returns character count if its < 11 characters', () => {
  expect(stringLength('abcd')).toBeLessThan(11);
});

test('return an error if string is empty', () => {
  expect(() => {
    stringLength('')
  }).toThrow('String cant be empty');
});

test('returns character count if its > 0 characters', () => {
  expect(stringLength('abcd')).toBeGreaterThan(0);
});
