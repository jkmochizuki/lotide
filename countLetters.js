const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(str) {
  const results = {};
  for (const letter of str) {
    results[letter.toLowerCase()] ? results[letter.toLowerCase()] += 1 : results[letter.toLowerCase()] = 1;
  }
  return results;
};

const actual = countLetters("Hello");
assertEqual(actual["h"], 1);
assertEqual(actual["e"], 1);
assertEqual(actual["l"], 2);
assertEqual(actual["o"], 1);