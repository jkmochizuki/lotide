const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  console.log(result ? `✅✅✅ Assertion Passed: ${arr1} === ${arr2}` : `🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

const takeUntil = function(array, callback) {
  let output = [];
  for (const item of array) {
    if (!callback(item)) output.push(item)
    if (callback(item)) return output;
  }
}

// TEST CODE
const data1 = [1, 3, 7, 0, 40];
const results1 = takeUntil(data1, number => number === 0);
assertArraysEqual(results1,[1, 3, 7]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);

