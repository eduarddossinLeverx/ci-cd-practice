var { add, divide } = require('../src/calculator');

const unusedVariable = 10;

describe('Calculator', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero!");
  });
});

