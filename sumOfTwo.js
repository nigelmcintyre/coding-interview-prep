const sumOfTwo = (a, b, v) => {
  let compliments = {};
  let c = 0;
  for (let i = 0; i < a.length; i++) {
    c = v - a[i];
    compliments[i] = c;
  }
  for (let i = 0; i < b.length; i++) {
    if (Object.values(compliments).indexOf(b[i]) > -1) {
      console.log(compliments[b[i]]);
      return true;
    }
  }
};

console.log(
  sumOfTwo([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], 15)
);
