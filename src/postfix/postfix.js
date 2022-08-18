const Stack = require("../lib/stack");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PSEUDOCODE

// (1.) Declare a new stack and a variable named 'result' and initialize it to an empty array.
// (2.) Iterate through each character in the expression, ignoring spaces.
// (2a.) If the current character is an operand, append it to 'result'.
// (2b.) Otherwise, if it is an operator, do the following:.
//       i. Look at the operator at the top of the stack.
//       ii. If the current operator has higher precedence than the operator on the top of the stack,
//           or if the stack is empty or the top of the stack is '(', then push the current operator onto the stack.
//       iii. Otherwise, start popping operators off of the stack.
//            Continue until you either find an operator that isn't of higher or equal precedence to the current operator,
//            or until you find a parenthesis.
//            Append each operator that is popped from the stack to 'result'.
//            Push the current operator onto the stack.
// (2c.) Otherwise, if the current character is '(', push it onto the stack.
// (2d.) Otherwise, if the current character is ')', then start popping characters off of the stack,
//       and append each character to result until you find a '('.
//       Do not append the parentheses to 'result'.
// (3.) Pop any remaining operators from the stack and append them to 'result'.
// (4.) Return 'result', joined with (" ") in order to return it as a string.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// JAVASCRIPT IMPLEMENTATION

const precedence = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
};

const postfix = (expression) => {
  // (1.)
  const stack = new Stack();
  const result = [];

  // (2.)
  expression = expression.replace(/\s/g, "");

  expression.split("").forEach((character) => {
    // (2c.)
    if (character === "(") {
      stack.push(character);
    } else {
      // (2d.)
      if (character === ")") {
        let top = stack.pop();
        while (top !== "(") {
          result.push(top);
          top = stack.pop();
        }
      } else {
        // (2b.)
        if ("+-*/".includes(character)) {
          if (
            !stack.top ||
            stack.top.value === "(" ||
            precedence[character] > precedence[stack.top.value]
          ) {
            stack.push(character);
          } else {
            while (
              stack.top &&
              precedence[stack.top.value] >= precedence[character]
            ) {
              result.push(stack.pop());
            }

            stack.push(character);
          }
        } else {
          // (2a.)
          result.push(character);
        }
      }
    }
  });

  // (3.)
  while (stack.top) {
    result.push(stack.pop());
  }

  // (4.)
  return result.join(" ");
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXPORT //

module.exports = postfix;
