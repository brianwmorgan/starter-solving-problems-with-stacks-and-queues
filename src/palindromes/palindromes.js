const Stack = require("../lib/stack");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PSEUDOCODE //

// (1.) Remove all spaces and punctuation from the sentence and make all characters lowercase.
// (2.) Declare a variable 'middle' and initialize it to half the length of the sentence, rounding down to an integer value for odd-length strings.
//      For example, if the sentence is of length '7', then 'middle' is '3'.
// (3.) Initialize a new stack.
// (4.) Iterate through the sentence, from the first character up to 'middle'. Push each character onto the stack.
// (5.) Iterate from 'middle' to the end of the sentence.
//      If the sentence is an odd length, then iterate from 'middle+1' to skip the middle character of the sentence.
//      On each iteration, pop a character from the stack and compare it to the current character. If they don't match, return 'false'.
// (6.) When the loop is done, return 'true'.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JAVASCRIPT IMPLEMENTATION //

const isPalindrome = (sentence) => {
  // (1.)
  sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // (2.)
  let middle = Math.floor(sentence.length / 2);

  // (3.)
  const stack = new Stack();

  // (4.)
  for (let index = 0; index < middle; index++) {
    stack.push(sentence[index]);
  }

  // (5.)
  middle += sentence.length % 2 === 0 ? 0 : 1;

  for (let index = middle, limit = sentence.length; index < limit; index++) {
    if (sentence[index] !== stack.pop()) {
      return false;
    }
  }

  // (6.)
  return true;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXPORT //

module.exports = isPalindrome;
