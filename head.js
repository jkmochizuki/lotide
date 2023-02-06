const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
};

const head = function(arr) {
  return arr[0];
};

// TEST CODE
console.log(assertEqual(head(["t",6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head(["Hello"]), "Hello"));
console.log(assertEqual(head([0]), "Hello"));
console.log(assertEqual(head([]), "Hello"));
