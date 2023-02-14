const findKeyByValue = function(object, value) {
  let result;
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) result += key;
  }
  return result;
};

module.exports = findKeyByValue;