const Solution = require("./index");

const find = s => Solution().longestPalindrome(s);

test("is palindrome", () => {
  expect(Solution().isPalindrome("ab")).toBeFalsy();
  expect(Solution().isPalindrome("aa")).toBeTruthy();
  expect(Solution().isPalindrome("aba")).toBeTruthy();
  expect(Solution().isPalindrome("abba")).toBeTruthy();
  expect(Solution().isPalindrome("racecar")).toBeTruthy();
});

it("works", () => {
  expect(find("tracecarsaabccbaad")).toEqual("aabccbaa");
});

it("final solution", () => {
  expect(find("tracecars")).toEqual("racecar");
});
