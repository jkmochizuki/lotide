const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString() ? true : false;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  console.log(result === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letterLowCase = sentence[i].toLowerCase();
    results[letterLowCase] ? (results[letterLowCase]).push(i) : results[letterLowCase] = [i];
  }
  return results;
};

// CODE TEST
const actual = letterPositions("hello");
console.log(actual);
assertArraysEqual(actual["h"], [0]);
assertArraysEqual(actual["e"], [1]);
assertArraysEqual(actual["l"], [2, 3]);
assertArraysEqual(actual["o"], [4]);