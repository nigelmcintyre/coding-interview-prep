// takes array of sorted numbers and outputs and array of sorted squares of all numbers

const sortedSquaredArray = inputArray => {
  let outputArray = [];
  // set outputArray equal to length of input to put the largest squarerd number at the end
  outputArray.length = inputArray.length;
  let left = 0;
  let right = inputArray.length - 1;
  // loop through outputArray starting at the back
  for (i = outputArray.length - 1; i >= 0; i--) {
    // if left most number is a larger negative number put it at righ most of the output
    if (Math.abs(inputArray[left]) > inputArray[right]) {
      outputArray[i] = inputArray[left] * inputArray[left];
      left++;
      // square the largest positive number
    } else {
      outputArray[i] = inputArray[right] * inputArray[right];
      right--;
    }
  }
  console.log(outputArray);
  return outputArray;
};

sortedSquaredArray([-6, -4, 1, 2, 3, 5]);
