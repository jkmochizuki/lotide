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
  if (result === true) console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  if (result === false) console.log(`🔴🔴🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

//TEST CODE
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
