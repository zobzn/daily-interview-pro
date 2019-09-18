const check = arr => {
  let fail = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      fail++;
    }
    if (fail >= 2) {
      return false;
    }
  }

  return true;
};

it("works", () => {
  expect(check([])).toBeTruthy();
  expect(check([1])).toBeTruthy();
  expect(check([2, 1])).toBeTruthy();
  expect(check([13, 4, 7])).toBeTruthy();
  expect(check([13, 4, 1])).toBeFalsy();
  expect(check([5, 1, 3, 2, 5])).toBeFalsy();
});
