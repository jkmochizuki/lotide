const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString() ? true : false;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  console.log(result === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

const middle = function(arr) {
  let newArr;
  if (arr.length < 3) newArr = [];
  if (arr.length % 2 !== 0 && arr.length > 3) newArr = arr[(arr.length - 1) / 2];
  if (arr.length % 2 === 0 && arr.length > 3) newArr = arr.slice(((arr.length / 2) - 1), ((arr.length / 2) + 1));
  return newArr;
};

assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);