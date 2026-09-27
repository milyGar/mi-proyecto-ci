const sumar = require('../src/math');

test('Suma correcta de 2 + 3 es igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});