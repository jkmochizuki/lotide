const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`;
};

// TEST CODE
console.log(assertEqual("Bootcmp", "Bootcamp"));
console.log(assertEqual(2, 1));