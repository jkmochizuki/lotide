const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (!eqArrays(keys1, keys2)) return false;
  for (const key of keys1) {
    const key1 = object1[key];
    const key2 = object2[key];
    if (Array.isArray(key1)) {
      if (key1.length !== key2.length) return false;
      return !eqArrays(key1, key2) ? false : eqObjects(key1, key2);
    }
    if (typeof key1 === "object") eqObjects(key1, key2);
    if (key1 !== key2) return false;
  }
  return true;
};


//TEST CODE
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),  false);
assertEqual(eqObjects({ a: { y: {j: 1, e: 5}, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),  false);
assertEqual(eqObjects({ a: [0, 3], b: 2 }, { a: [0, 3], b: 2 }),  true);