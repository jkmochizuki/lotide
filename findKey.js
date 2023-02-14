const findKey = function(object, callback) {
  let keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      console.log(key);
      break;
    }
  }
};

module.exports = findKey;