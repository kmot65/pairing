const multiplyBy = require('../code/multiplyBy');

test('multiplyby - passes all the tests', () => {
  expect(multiplyBy(5)(10)).toBe(50);
  expect(multiplyBy(2)(3)).toBe(6);
});
