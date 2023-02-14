const {assert} = require('chai');
const findKey = require('../findKey');

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

describe('tests for findKey', () => {
  it('should return "noma" for object[stars] === 2', () => {
    assert.deepEqual(findKey(object, x => x.stars === 2));
  });

  it('should return "Blue Hill" for object[stars] === 1', () => {
    assert.deepEqual(findKey(object, x => x.stars === 1));
  });

  it('should return "Akaleri" for object[stars] === 2', () => {
    assert.deepEqual(findKey(object, x => x.stars === 3));
  });
});