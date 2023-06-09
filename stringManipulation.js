// count vowels in a string

const countVowels = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return string
    .toLowerCase()
    .split("")
    .reduce((count, char) => (vowels.includes(char) ? count + 1 : count), 0);
};

console.log(countVowels("bbgfiwewmsjtieanicsoariaer"));

// reverse every word in a sentence

// edge case checks
const reverseWords = (sentence) => {
  if (sentence.lengh === 0) {
    return "sentence is empty";
  }
  sentence.toLowerCase();
  const wordsArr = sentence.split(" ");
  const reversedSentencArr = [];
  wordsArr.forEach((word) => {
    let wordArr = word.split("");
    let reversedWord = [];
    for (let i = wordArr.length - 1; i >= 0; i--) {
      reversedWord.push(wordArr[i]);
    }
    let joinedReversedWord = reversedWord.join().replaceAll(",", "");
    reversedSentencArr.push(joinedReversedWord);
  });
  return reversedSentencArr.toString().replaceAll(",", " ");
};

console.log(
  reverseWords("the words in this sentence are to be reversed racecar")
);
