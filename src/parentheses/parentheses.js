const Stack = require("../lib/stack");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PSEUDOCODE

// (1.) Initialize a new empty stack.
// (2.) Start a loop to iterate through each character in the expression.
// (2a.) If the current character is an opening parenthesis "(", push it onto the stack.
// (2b.) If the current character is a closing parenthesis ")"...
//       if the stack isn't empty, pop one item off the stack...
//       otherwise return 'false'.
// (3.) If the stack is empty, return 'true'.
// (4.) Otherwise, return 'false'.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JAVASCRIPT IMPLEMENTATION

const match = (expression) => {
  // (1.)
  const stack = new Stack();

  // (2.)
  for (let index = 0, limit = expression.length; index < limit; index++) {
    // (2a.)
    if (expression[index] === "(") {
      stack.push("(");
    } else {
      // (2b.)
      if (expression[index] === ")") {
        if (stack.top) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }

  // (3. and 4.)
  return !stack.top;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXPORT //

module.exports = match;
