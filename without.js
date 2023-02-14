const eqArrays = require('./eqArrays');

const without = function(source, itemsToRemove) {
  let newArray = [];
  source.forEach(element => {
    if (!itemsToRemove.includes(element)) newArray.push(element);
  });
  return newArray;
};

module.exports = without;