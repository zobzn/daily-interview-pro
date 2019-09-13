function ListNode(x) {
  return {
    val: x,
    next: null
  };
}

function Solution() {
  return {
    addTwoNumbers(l1, l2, c = 0) {
      const next1 = l1 !== null ? l1.next : null;
      const next2 = l2 !== null ? l2.next : null;
      let sum = 0;
      let res;

      if (l1 === null && l2 === null) {
        return ListNode(c);
      } else if (l1 !== null && l2 !== null) {
        sum = l1.val + l2.val + c;
        res = ListNode(sum % 10);
      } else if (l2 === null) {
        sum = l1.val + c;
        res = ListNode(sum % 10);
      } else {
        sum = l2.val + c;
        res = ListNode(sum % 10);
      }

      if (next1 !== null || next2 !== null || Math.floor(sum / 10) > 0) {
        res.next = this.addTwoNumbers(next1, next2, Math.floor(sum / 10));
      }

      return res;
    }
  };
}

module.exports = {
  ListNode,
  Solution
};
