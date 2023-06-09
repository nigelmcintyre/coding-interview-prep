const bubbleSort = () => {
  // iterates through the array n^2 swapping one element at a time
  //Time complexity is O(n^2)
  //Space complexity is O(1) or constant space because it is an in place sorting algo so no additional data structures are required
  const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  //loop over the entire array
  for (let i = 0; i < array.length; i++) {
    //loop over entire array again the length of the array minus i-1 because each iteration will have placed a number in its correct position
    for (let j = 0; j < array.length - i - 1; j++) {
      //if the current element is greater than that of the next element in the array swap them or move to the next element in the array
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
};

const insertionSort = () => {
  // iterate through the array creating a sorted list as it goes
  //Time complexity of O(n^2) worst case o(n) best case
  //Space complexity of O(1) as it uses a constant amount of variale and data structures
  const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let j = i - 1;
    // is current number is less than previous? and while j is still within array bounds ie. a positive number,when get to zero it is at the start of the array and breaks the while
    while (j > -1 && current < array[j]) {
      // swap them and repeat for every element left of current position
      array[j + 1] = array[j];
      j--;
    }
    // move current forward (to the right)
    array[j + 1] = current;
  }
  console.log(array);
};

const selectionSort = () => {
  //iterates through the array and finds the smallest value and puts it at the front of the array and repeats this process
  //Time complexity of O(n^2) worst case o(n) best case
  //Space complexity of O(1) as it uses a constant amount of variale and data structures
  const array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // minimum is the start of the array
    let min = i;
    // starting with the element next to the first element in the array loop through
    for (let j = i + 1; j < array.length; j++) {
      // if the next element is smaller than the first, it is the new minimum
      if (array[j] < array[min]) {
        min = j;
      }
    }
    // if the new minimum is not at the start of the array
    if (min !== i) {
      // swap them
      [array[i], array[min]] = [array[min], array[i]];
    }
    console.log(array);
  }
  //   console.log(array);
};

const mergeSort = () => {
  // Time complexity is always O(n log n)
  // space complexity is O(n)
  const arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  //find the midpoint of the array
  const mid = arr.length / 2;
  //base case which stops the loop when the array lenght is less than 2
  if (arr.length < 2) {
    return arr;
  }
  //make a sub array of the first half of the array
  const left = arr.splice(0, mid);
  // call the function recursively
  return merge(mergeSort(left), mergeSort(arr));
};

// merge function both merges left and right array and sorts them
const merge = (left, right) => {
  let arr = [];
  // while elements are left in array
  while (left.length && right.length) {
    // if the first element of the array is less than, the right
    if (left[0] < right[0]) {
      // add it to the smaller number array and remove it from the left array
      arr.push(left.shift());
    } else {
      // else add the right element to the smaller array and remove it from the right
      arr.push(right.shift());
    }
  }
  // concatonate the arrays
  return [...arr, ...left, ...right];
};

const quickSort = (
  arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  left = 0,
  right = arr.length - 1
) => {
  if (left >= right) {
    return;
  }
  let pivotIndex = partition(arr, left, right);
  quickSort(arr, left, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, right);
  return arr;
};
const partition = (arr, left, right) => {
  let pivotValue = arr[right];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
};

const swap = (arr, firstIndex, secondIndex) => {
  let tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
};
bubbleSort();
insertionSort();
selectionSort();
// mergeSort();
quickSort();
