const ListNode = (x, next = null) => ({
  val: x,
  next
});

const reverseIteratively = list => {
  let head = null;

  while (list) {
    head = ListNode(list.val, head);
    list = list.next;
  }

  return head;
};

const reverseRecursively = list => {
  return reverseRecursivelyInternal(list);
};

// without a second argument, the implementation of the algorithm would be quite cumbersome
const reverseRecursivelyInternal = (list1, list2 = null) => {
  if (list1) {
    return reverseRecursivelyInternal(list1.next, ListNode(list1.val, list2));
  } else {
    return list2;
  }
};

module.exports = {
  ListNode,
  reverseIteratively,
  reverseRecursively
};
