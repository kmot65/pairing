const sortcode = require('../code/sortcode');

test('sortcode - passes all the tests', () => {
  expect(sortcode("004400")).toBe('00-44-44');
  expect(sortcode("123456")).toBe('12-34-56');
});
