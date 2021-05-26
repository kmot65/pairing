const sumAll = require('../code/sumAll');

test('sumall - passes all tests', () => {
  expect(sumAll([1,2,3])).toBe(6);
  expect(sumAll([15,16,17,21])).toBe(69);
  expect(sumAll([])).toBe(0);
});