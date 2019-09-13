module.exports = () => {
  const isPalindrome = s => {
    for (let i = 0, e = Math.floor(s.length / 2); i < e; i++) {
      if (s[i] != s[s.length - i - 1]) {
        return false;
      }
    }

    return true;
  };

  return {
    isPalindrome(s) {
      return isPalindrome(s);
    },
    longestPalindrome(s) {
      let max = null;

      for (let i = 0; i < s.length - 1; i++) {
        for (let j = s.length; j > i + 1; j--) {
          const substr = s.substring(i, j);

          if (isPalindrome(substr)) {
            if (max === null || substr.length > max.length) {
              max = substr;
            }

            break;
          }
        }
      }

      return max;
    }
  };
};
