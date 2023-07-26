const reverseString = require('./reversestring')

test("test if string is reversed", () => {
  expect((reverseString('abc'))).toEqual('cba')
});

test("test if string is reversed with palindromes", () => {
  expect((reverseString('121'))).toEqual('121')
});