const capitalizeString = require('./capitalizeString');

test('Test if the first character is capitalized', () => {
  expect(capitalizeString('milk')).toEqual('Milk');
});