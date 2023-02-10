const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  console.log(result === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

const middle = function(arr) {
  let newArr = [];
  let arrLength = arr.length;
  if (arrLength < 3) newArr = [];
  if (arrLength % 2 !== 0 && arrLength >= 3) newArr.push(arr[(arrLength - 1) / 2]);
  if (arrLength % 2 === 0 && arrLength >= 3) newArr.push(arr.slice(((arrLength / 2) - 1), ((arrLength / 2) + 1)));
  return newArr;
};

assertArraysEqual((middle([1, 2, 3, 4])), [2, 3]);
assertArraysEqual((middle([1])), []);
assertArraysEqual((middle([1, 2])), []);
assertArraysEqual((middle([1, 2, 3, 4, 5])), [3]);