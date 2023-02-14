const eqArrays = require('./eqArrays');

const flatten = function(arr) {
  let newArr = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      item.forEach(element => {
        newArr.push(element);
      });
    }
    if (!Array.isArray(item)) newArr.push(item);
  }
  return newArr;
};

module.exports = flatten;