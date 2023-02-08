const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {
  let result;
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) result = key;
  }
  return result;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);