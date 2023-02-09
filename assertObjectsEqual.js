const eqArrays = function(arr1, arr2) {
  return arr1.toString() === arr2.toString() ? true : false;
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  for (const key1 of keys1) {
    return (object1[key1] === object2[key1] || eqArrays(object1[key1], object2[key1])) && keys1.length === keys2.length ? true : false;
  }
};

const assertObjectsEqual = function(object1, object2) {
  let result = eqObjects(object1, object2);
  const inspect = require('util').inspect;
  console.log(result === true ? `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}` : `🔴🔴🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  console.log(`Example label: ${inspect(object1)}`);
};

assertObjectsEqual({ size: "medium", colors: ["red", "blue"]}, { colors: ["red", "blue"], size: "medium" });

