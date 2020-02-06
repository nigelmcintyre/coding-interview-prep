// Description: print out the first non-repeating character of a string.

const nonRepeatingCharactersObj = string => {
  const characters = {};
  // Iterate through string
  for (i = 0; i < string.length; i++) {
    let key = string[i];
    // If it exists add 1
    if (key in characters) {
      characters[key] = characters[key] + 1;
      // If it doesn't already exist put it in there
    } else {
      characters[key] = 1;
    }
  }
  // Iterate through string
  for (i = 0; i < string.length; i++) {
    let key = string[i];
    // Return first key that has a value of one
    if (characters[key] === 1) {
      return key;
    }
  }
};

const nonRepeatingCharactersIndexOf = string => {
  // Iterate through the string
  for (i = 0; i < string.length; i++) {
    let char = string[i];
    // If a characters first and last index is the same, it only occurs once
    if (string.indexOf(char) === string.lastIndexOf(char)) {
      return char;
    }
  }
};

console.log(nonRepeatingCharactersObj('aaabcccdeeef'));
console.log(nonRepeatingCharactersIndexOf('aaabcccdeeef'));
