const sumar = require('../src/math');

test('Suma correcta de 2 + 3 es igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});
const { sumar, restar } = require('../src/math');

test('Suma correcta de 2 + 3 es igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('Resta correcta de 5 - 2 es igual a 3', () => {
  expect(restar(5, 2)).toBe(3);
});