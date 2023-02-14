const eqArrays = require('./eqArrays');

const takeUntil = function(array, callback) {
  let output = [];
  for (const item of array) {
    if (!callback(item)) output.push(item)
    if (callback(item)) return output;
  }
};

module.exports = takeUntil;