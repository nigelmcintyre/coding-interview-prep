const balancedWeights = require('./balancedWeights');

test('sums and array [2,2] to eaqual 4', () => {
  expect(balancedWeights.sumArray([2, 2])).toBe(4);
});

test('finds the closest weight 79 to equal 81', () => {
  expect(balancedWeights.findClosestWeight(79)).toBe(81);
});

test('finds closest weight 12 to equal 9', () => {
  expect(balancedWeights.findClosestWeight(12)).toBe(9);
});

test('balances left array with right to equal true', () => {
  expect(balancedWeights.balancedWeights(56)).toBe(true);
});

test('balances left array with right to equal true', () => {
  expect(balancedWeights.balancedWeights(90)).toBe(true);
});

test('balances left array with right to equal true', () => {
  expect(balancedWeights.balancedWeights(100)).toBe(true);
});

test('balances left array with right to equal true', () => {
  expect(balancedWeights.balancedWeights(200)).toBe(true);
});

test('balances left array with right to equal true', () => {
  expect(balancedWeights.balancedWeights(1)).toBe(true);
});

test('balances left array with right to equal true', () => {
  expect(balancedWeights.balancedWeights(40)).toBe(true);
});
