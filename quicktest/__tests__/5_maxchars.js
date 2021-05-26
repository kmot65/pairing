const maxchar = require('../code/maxchars');

test('maxchars - passes all the tests', () => {
  expect(maxchar("Hello World!")).toBe('l');
  expect(maxchar("Leek soup")).toBe('e');
});
