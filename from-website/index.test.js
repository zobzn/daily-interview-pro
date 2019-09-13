const { ListNode, merge, appendToList } = require("./index");

const list = arr => {
  if (!arr.length) {
    return null;
  }

  let x;
  let head = null;

  while ((x = arr.pop())) {
    const curr = ListNode(x);
    curr.next = head;
    head = curr;
  }

  return head;
};

const arr = list => {
  let result = [];
  let item = list;

  while (item) {
    result.push(item.val);
    item = item.next;
  }

  return result;
};

const mrg = (arr1, arr2) => arr(merge(list(arr1), list(arr2)));

test("list helpers", () => {
  expect(arr(list([1, 2, 3]))).toEqual([1, 2, 3]);
});

it("works", () => {
  expect(mrg([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});
