module.exports = () => {
  // binary search
  const findPositionInSortedArray = (arr, x, from, till) => {
    from = from || 0;
    till = till || arr.length - 1;

    const len = till - from;
    const pos = from + Math.floor(len / 2);

    if (len <= 0) {
      return -1;
    }

    if (x === arr[pos]) {
      return pos;
    }

    if (x > arr[pos]) {
      return findPositionInSortedArray(arr, x, pos + 1, till);
    } else {
      return findPositionInSortedArray(arr, x, from, pos - 1);
    }
  };

  return {
    getRange(arr, x) {
      let pos = findPositionInSortedArray(arr, x);

      // element wasn't found, so we return 404 :)
      if (pos === -1) {
        return [-1, -1];
      }

      // now we have range of exactly one element matching x
      let from = pos;
      let till = pos;

      // now we extend range while it matches x
      while (from - 1 >= 0 && arr[from - 1] === x) {
        from--;
      }
      while (till + 1 < arr.length && arr[till + 1] === x) {
        till++;
      }

      return [from, till];
    }
  };
};
