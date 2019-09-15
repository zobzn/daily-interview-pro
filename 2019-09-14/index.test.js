const { ListNode, reverseIteratively, reverseRecursively } = require("./index");

// helper function for quick list creation
const arrayToLinkedList = arr => {
  if (!arr.length) {
    return null;
  }

  let head = null;

  while (arr.length) {
    head = ListNode(arr.pop(), head);
  }

  return head;
};

// helper function for debugging lists as arrays
const linkedListToArray = list => {
  let result = [];
  let item = list;

  while (item) {
    result.push(item.val);
    item = item.next;
  }

  return result;
};

it("works", () => {
  expect(
    linkedListToArray(reverseIteratively(arrayToLinkedList([0, 1, 2, 3, 4])))
  ).toEqual([4, 3, 2, 1, 0]);

  expect(
    linkedListToArray(reverseRecursively(arrayToLinkedList([0, 1, 2, 3, 4])))
  ).toEqual([4, 3, 2, 1, 0]);
});
