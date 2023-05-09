/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) return [];

  const map = {
    1: [""],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const mapper = (numbers) => {
    let array = [];
    if (numbers.length == 1) return map[numbers];

    const firstNumber = numbers.slice(0, 1);
    const otherNumberLetters = mapper(numbers.slice(1));

    for (let i = 0; i < map[firstNumber].length; i++) {
      for (let j = 0; j < otherNumberLetters.length; j++) {
        array.push(map[firstNumber][i] + otherNumberLetters[j]);
      }
    }

    return array;
  };

  return mapper(digits);
};

// console.log(letterCombinations("21"));
