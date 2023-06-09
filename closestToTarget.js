let a = [-1, 3, 8, 2, 9, 5, 22];
let b = [4, 1, 2, 10, 5, 20, 3];

// O(n^2)
const bruteForce = () => {
  let sum = 0;
  let target = 25;
  let pairArray = [];
  let currenLowest = 0;

  if (a.length != 0 && b.length != 0) {
    a.forEach((aValue) => {
      b.forEach((bValue) => {
        let pair = [aValue, bValue];
        let pairs = {};
        pairs.numberPair = pair;
        pairs.sumPair = aValue + bValue;
        pairArray.push(pairs);
      });
    });
  }

  pairArray.forEach((pair) => {
    let difference = pair.sumPair - target;
    pair.difference = Math.abs(difference);
  });

  const lowestPairs = pairArray
    .sort((a, b) => (a.difference < b.difference ? -1 : 1))
    .filter((pair) => pair.difference === pairArray[0].difference)
    .map((pair) => pair.numberPair);

  console.log(lowestPairs);
};

bruteForce();

const better = () => {
  let sum = 0;
  let target = 25;
  a.sort((x, y) => (x < y ? -1 : 1)).reverse();
  b.sort((x, y) => (x < y ? -1 : 1));
  a.forEach((aNum, index) => {
    sum = aNum + b[index];
    if(sum )
  });
};

better();
//print every pair == to lowest difference
