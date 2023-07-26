const Calculator = require('./Calculator');

describe('Calculator', () => {
  test('add method', () => {
    expect(Calculator.add(5, 8)).toEqual(13);
  });

  test('Subtract method', () => {
    expect(Calculator.subtract(1, 5)).toEqual(-4);
  });

  test('Division method', () => {
    expect(Calculator.divide(1, 0)).toEqual('undefined');
  });

  test('Division method', () => {
    expect(Calculator.divide(0, 0)).toEqual('undefined');
  });
});