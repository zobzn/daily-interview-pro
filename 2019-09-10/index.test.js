const Solution = require("./index");

const len = s => Solution().lengthOfLongestSubstring(s);

it("works with empty string", () => {
  expect(len("")).toEqual(0);
});

it("works with one letter", () => {
  expect(len("a")).toEqual(1);
});

it("works with two letters", () => {
  expect(len("ab")).toEqual(2);
  expect(len("aa")).toEqual(1);
});

it("works with three letters", () => {
  expect(len("aaa")).toEqual(1);
  expect(len("aab")).toEqual(2);
  expect(len("abb")).toEqual(2);
  expect(len("abc")).toEqual(3);
});

it("final check", () => {
  expect(len("abrkaabcdefghijjxxx")).toEqual(10);
  expect(len("abrkaabcdefghipjjxxx")).toEqual(11);
});
