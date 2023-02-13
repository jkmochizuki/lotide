const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  let result = eqObjects(object1, object2);
  const inspect = require('util').inspect;
  if (result === true) console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  if (result === false) console.log(`🔴🔴🔴 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
};

module.exports = assertObjectsEqual;