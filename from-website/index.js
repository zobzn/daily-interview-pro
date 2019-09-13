const ListNode = x => ({
  val: x,
  next: null
});

const appendToList = (head, tail, other) => {
  if (!tail) {
    head = tail = ListNode(other.val);
  } else {
    tail.next = ListNode(other.val);
    tail = tail.next;
  }

  return [head, tail, other.next];
};

const mergeSortedLists = (list1, list2) => {
  let [l1, l2] = [list1, list2];
  let head = null;
  let tail = null;

  while (l1 || l2) {
    if ((l1 && l2 && l1.val < l2.val) || (l1 && !l2)) {
      [head, tail, l1] = appendToList(head, tail, l1);
    } else {
      [head, tail, l2] = appendToList(head, tail, l2);
    }
  }

  return head;
};

module.exports = {
  ListNode,
  merge: mergeSortedLists
};
