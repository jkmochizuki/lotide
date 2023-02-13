const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (!eqArrays(keys1, keys2)) return false;
  if (keys1.length !== keys2.length) return false;

  for (const key in object1) {
    const key1 = object1[key];
    const key2 = object2[key];
    if (Array.isArray(key1)) {
      return !eqArrays(key1, key2) ? false : eqObjects(key1, key2);
    }
    if (!eqObjects(key1, key2)) return false;
    if (key1 !== key2) return false;
    if (typeof(key1) === typeof({}) && typeof(key2) === typeof({})) eqObjects(key1, key2);
  }
  return true;
};

module.exports = eqObjects;