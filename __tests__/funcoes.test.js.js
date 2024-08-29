const { soma, subtracao, multiplicacao, divisao } = require('../src/funcoes');

test('soma de 1 + 2 deve ser 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('subtração de 5 - 3 deve ser 2', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('multiplicação de 3 * 4 deve ser 12', () => {
  expect(multiplicacao(3, 4)).toBe(12);
});

test('divisão de 6 / 2 deve ser 3', () => {
  expect(divisao(6, 2)).toBe(3);
});

test('divisão por zero deve lançar um erro', () => {
  expect(() => divisao(1, 0)).toThrow('Divisão por zero não é permitida.');
});