// Description: print out the first non-repeating character of a string.

const nonRepeatingCharacters = string => {
  const characters = {};
  // iterate through string
  for (i = 0; i < string.length; i++) {
    let key = string[i];
    // if it exists add 1
    if (key in characters) {
      characters[key] = characters[key] + 1;
      // if it doesn't already exist put it in there
    } else {
      characters[key] = 1;
    }
  }
  // iterate through string
  for (i = 0; i < string.length; i++) {
    let key = string[i];
    // return first key that has a value of one
    if (characters[key] === 1) {
      return key;
    }
  }
};

console.log(nonRepeatingCharacters('aaabcccdeeef'));
