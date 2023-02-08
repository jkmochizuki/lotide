const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString() ? true : false;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  console.log(result === true ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};


const flattenArray = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) newArr.push(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j]);
    }
  }
  return newArr;
};

(assertArraysEqual((flattenArray([1, 3, [4, 5, 7]])), [1, 3, 4, 5, 7]));
