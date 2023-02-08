const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Bootcmp", "Bootcamp");
assertEqual(2, 1);