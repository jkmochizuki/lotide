const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString() ? true : false;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  console.log(result === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

const middle = function(arr) {
  let newArr;
  let arrLength = arr.length;
  if (arrLength < 3) newArr = [];
  if (arrLength % 2 !== 0 && arrLength >= 3) newArr = arr[(arrLength - 1) / 2];
  if (arrLength % 2 === 0 && arrLength >= 3) newArr = arr.slice(((arrLength / 2) - 1), ((arrLength / 2) + 1));
  return newArr;
};

assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);