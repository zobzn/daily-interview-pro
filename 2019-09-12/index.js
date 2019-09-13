module.exports = () => {
  const openingsByClosings = {
    "]": "[",
    "}": "{",
    ")": "("
  };

  const openings = Object.values(openingsByClosings);

  return {
    isValid(s) {
      let stack = [];

      for (const c of s) {
        if (openings.includes(c)) {
          stack.push(c);
        } else if (c in openingsByClosings) {
          if (stack[stack.length - 1] === openingsByClosings[c]) {
            stack.pop();
          } else {
            return false;
          }
        } else {
          return false;
        }
      }

      return stack.length === 0;
    }
  };
};
