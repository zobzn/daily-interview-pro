const Solution = require("./index");
const getRange = (arr, x) => Solution().getRange(arr, x);

it("works with empty array", () => {
  expect(getRange([], 9)).toEqual([-1, -1]);
});

test("some examples", () => {
  expect(getRange([1, 3, 3, 5, 7, 8, 9, 9, 9, 15], 9)).toEqual([6, 8]);
  expect(getRange([100, 150, 150, 153], 150)).toEqual([1, 2]);
  expect(getRange([1, 2, 3, 4, 5, 6, 10], 9)).toEqual([-1, -1]);
});

test("final variant", () => {
  const arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
  const x = 2;
  expect(getRange(arr, x)).toEqual([1, 4]);
});
