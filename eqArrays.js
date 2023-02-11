const assertEqual = function(actual, expected) {
  console.log(actual === expected ?
    `✅✅✅ Assertion Passed: ${actual} === ${expected}` :
    `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const item1 = arr1[i];
    const item2 = arr2[i];
    const notArray = !Array.isArray(item1);

    if (Array.isArray(item1) && !Array.isArray(item2)) return false;

    if (Array.isArray(item1)) eqArrays(item1, item2);
    
    if (notArray) if (item1 !== item2) return false;

    if (!eqArrays(item1, item2)) return false;
    
  }
  return true;
};

// TEST CODE
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
