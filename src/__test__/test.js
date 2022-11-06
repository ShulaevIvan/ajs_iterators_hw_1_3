import canIterate from '../js/canIterateFunc';

test('testing canIterateFunc map', () => {
  const result = canIterate(new Map());
  expect(result).toBe(true);
});

test('testing canIterateFunc set', () => {
  const result = canIterate(new Set());
  expect(result).toBe(true);
});

test('testing canIterateFunc null', () => {
  const result = canIterate(null);
  expect(result).toBe(false);
});

test('testing canIterateFunc number', () => {
  const result = canIterate(10);
  expect(result).toBe(false);
});

test('testing canIterateFunc string', () => {
  const result = canIterate('Netology');
  expect(result).toBe(true);
});

test('testing canIterateFunc array', () => {
  const result = canIterate([]);
  expect(result).toBe(true);
});
