const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
};

const tail = function(arr) {
  let newArray;
  newArray = arr.slice(1, arr.length);
  return newArray;
};

// TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result[0], "Lighthouse"));
console.log(assertEqual(result[1], "Labs"));
