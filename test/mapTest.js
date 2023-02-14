const assert = require("assert");
const map = require('../map');

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[2]);
const numbers = [0, 3, 4];
const results3 = map(numbers, number => number % 2 === 0);

describe(' tests for map', () => {
  it('should return [ "g", "c, "t, "m, "t ] for index 0 of array ["ground", "control", "to", "major", "tom"]', () => {
    assert.deepEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
  });

  it('should return [ "o, "n, undefined, "j", "m ] for index 2 of array ["ground", "control", "to", "major", "tom"]', () => {
    assert.deepEqual(results2, [ 'o', 'n', undefined, 'j', 'm' ]);
  });

  it('should return [ true, false, true] for even numbers of array [0, 3, 4]', () => {
    assert.deepEqual(results3, [ true, false, true]);
  });
});