// http://www.dailyinterviewpro.com/
// 2019.09.09
//
// Task:
// You are given two linked-lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
// Here is the function signature as a starting point (in Python):
//
// # Definition for singly-linked list.
// class ListNode(object):
//   def __init__(self, x):
//     self.val = x
//     self.next = None
//
// class Solution:
//   def addTwoNumbers(self, l1, l2, c = 0):
//     # Fill this in.
//
// l1 = ListNode(2)
// l1.next = ListNode(4)
// l1.next.next = ListNode(3)
//
// l2 = ListNode(5)
// l2.next = ListNode(6)
// l2.next.next = ListNode(4)
//
// result = Solution().addTwoNumbers(l1, l2)
// while result:
//   print result.val,
//   result = result.next
// # 7 0 8

const { ListNode, Solution } = require("./index");

const listToArray = l => {
  let res = [];
  let cursor = l;

  while (cursor !== null) {
    res.push(cursor.val);
    cursor = cursor.next;
  }

  return res;
};

const sumTwoListsAsArray = (l1, l2) => {
  return listToArray(Solution().addTwoNumbers(l1, l2));
};

test("I understand math", () => {
  expect(7 % 10).toEqual(7);
  expect(27 % 10).toEqual(7);
  expect(Math.floor(7 / 10)).toEqual(0);
  expect(Math.floor(27 / 10)).toEqual(2);
});

test("helper works", () => {
  const l2 = ListNode(5);
  l2.next = ListNode(4);

  expect(listToArray(l2)).toEqual([5, 4]);
});

test("we can sum nulls", () => {
  expect(sumTwoListsAsArray(null, null)).toEqual([0]);
});

test("we can sum null and list", () => {
  expect(sumTwoListsAsArray(null, ListNode(1))).toEqual([1]);
});

test("we can sum two lists", () => {
  const l1 = ListNode(2);
  const l2 = ListNode(5);

  expect(sumTwoListsAsArray(l1, l2)).toEqual([7]);
});

test("we can sum two longer lists", () => {
  const l1 = ListNode(2);
  const l2 = ListNode(5);
  l2.next = ListNode(4);

  expect(sumTwoListsAsArray(l1, l2)).toEqual([7, 4]);
});

it("works with final data", () => {
  const l1 = ListNode(2);
  l1.next = ListNode(4);
  l1.next.next = ListNode(3);

  const l2 = ListNode(5);
  l2.next = ListNode(6);
  l2.next.next = ListNode(4);

  expect(l1.val).toBe(2);
  expect(l1.next.val).toBe(4);
  expect(l1.next.next.val).toBe(3);
  expect(l1.next.next.next).toBeNull();

  expect(l2.val).toBe(5);
  expect(l2.next.val).toBe(6);
  expect(l2.next.next.val).toBe(4);
  expect(l2.next.next.next).toBeNull();

  expect(sumTwoListsAsArray(l1, l2)).toEqual([7, 0, 8]);
});
