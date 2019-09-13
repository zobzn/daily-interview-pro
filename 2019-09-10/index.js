module.exports = function() {
  const sequencesWithChar = sequences => char =>
    sequences.filter(sequence => sequence.items[char] === true);

  const sequencesWithoutChar = sequences => char =>
    sequences.filter(sequence => !sequence.items[char]);

  const findMaximum = (max, sequence) => Math.max(max, sequence.length);

  return {
    lengthOfLongestSubstring(s) {
      let sequences = [];
      let max = 0;

      s.split("").forEach(c => {
        max = sequencesWithChar(sequences)(c).reduce(findMaximum, max);

        sequences = sequencesWithoutChar(sequences)(c).concat([
          { items: {}, length: 0 }
        ]);

        Object.keys(sequences).forEach(i => {
          sequences[i].items[c] = true;
          sequences[i].length += 1;
        });
      });

      return sequences.reduce(findMaximum, max);
    }
  };
};
