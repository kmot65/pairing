const heroes = require('../code/heroes');

test('heroes - passes all the tests', () => {
  let heroList = [
    { name: 'Wolverine', family: 'Marvel', isEvil: false },
    { name: 'Deadpool', family: 'Marvel', isEvil: false },
    { name: 'Magneto', family: 'Marvel', isEvil: true },
    { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
    { name: 'Batman', family: 'DC Comics', isEvil: false },
    { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
    { name: 'Legolas', family: 'Tolkien', isEvil: false },
    { name: 'Gandalf', family: 'Tolkien', isEvil: false },
    { name: 'Saruman', family: 'Tolkien', isEvil: true }
  ];

  let expected = [
    { name: 'HARLEY QUINN', family: 'DC Comics'},
    { name: 'MAGNETO', family: 'Marvel'},
    { name: 'SARUMAN', family: 'Tolkien' }
  ];
  expect(heroes(heroList)).toEqual(expected);
});
