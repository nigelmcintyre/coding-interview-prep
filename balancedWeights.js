// Given a set of six weights that are all powers of 3.
// What sequence of weights balances the scale given a number?
// Need to figure out 5, can only use every weight once
// Given weights powers of three, can only use once
let weights = [1, 3, 9, 27, 81, 243];

const balancedWeights = target => {
  let lhs = [];
  let rhs = [target];
  // Puts the nearest weight to the target on the other scale
  lhs.push(findClosestWeight(target));
  // When the scales are balanced their different should be 0
  while (sumArray(lhs) - sumArray(rhs) !== 0) {
    // nearest weight of the difference is put into the smaller side
    target = Math.abs(sumArray(lhs) - sumArray(rhs));
    if (sumArray(lhs) < sumArray(rhs)) lhs.push(findClosestWeight(target));
    else rhs.push(findClosestWeight(target));
  }
  console.log('Balanced!\nLHS: ' + lhs + '\nRHS: ' + rhs);
  return true;
};
// Finds the closest weight to the given number and difference between each side
const findClosestWeight = current => {
  let closestWeight = 0;
  let index = 0;
  // Copy of weigths add current target and sort
  let weightsCopy = weights;
  weightsCopy.push(current);
  weightsCopy.sort((a, b) => {
    return a - b;
  });
  // Finds the index of the current target
  const isEqual = element => element === current;
  index = weightsCopy.findIndex(isEqual);
  // Weight closest to the current target is returned
  if (
    Math.abs(current - weightsCopy[index - 1]) <
    Math.abs(weightsCopy[index + 1] - current)
  ) {
    closestWeight = weightsCopy[index - 1];
  } else {
    closestWeight = weightsCopy[index + 1];
  }
  return closestWeight;
};

// Sums the arrays
const sumArray = array => {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

balancedWeights(6);
module.exports = {
  balancedWeights,
  findClosestWeight,
  sumArray
};
