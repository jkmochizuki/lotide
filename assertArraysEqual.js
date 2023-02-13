const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  console.log(result === true ?
    `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` :
    `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;
