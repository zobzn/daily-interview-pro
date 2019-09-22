const sortNums = nums => {
  const res = new Array(nums.length);
  const counts = { 1: 0, 2: 0, 3: 0 };

  for (const num of nums) {
    counts[num]++;
  }

  for (let i = 0; i < counts[1]; i++) {
    res[i] = 1;
  }

  for (let i = 0; i < counts[2]; i++) {
    res[counts[1] + i] = 2;
  }

  for (let i = 0; i < counts[3]; i++) {
    res[counts[1] + counts[2] + i] = 3;
  }

  return res;
};

it("works", () => {
  expect(sortNums([3, 3, 2, 1, 3, 2, 1])).toEqual([1, 1, 2, 2, 3, 3, 3]);
  expect(sortNums([3, 2, 1])).toEqual([1, 2, 3]);
  expect(sortNums([1, 2, 3])).toEqual([1, 2, 3]);
  expect(sortNums([2, 3])).toEqual([2, 3]);
  expect(sortNums([1])).toEqual([1]);
  expect(sortNums([])).toEqual([]);
});
