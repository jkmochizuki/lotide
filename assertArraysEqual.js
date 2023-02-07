const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  console.log(eqArrays ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArraysEqual;