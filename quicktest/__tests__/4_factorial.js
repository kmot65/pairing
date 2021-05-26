const factorial = require('../code/factorial');

test('factorial - passes all the tests', () => {
  expect(factorial(0)).toBe(0);
  expect(factorial(1)).toBe(1);
  expect(factorial(2)).toBe(2);
  expect(factorial(3)).toBe(6);
  expect(factorial(4)).toBe(24);
});
