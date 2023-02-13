const assert = require("assert");
const eqArrays = require('../eqArrays');

describe(' tests for eqArray', () => {
  it('should return true if arrays [[2, 3], [4]] and [[2, 3], [4]] are equal', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('should return false arrays [[2, 3], [4]] and [[2, 3], [4, 5]] are not equal', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });

  it('should return false if arrays [1, 2, "3", [4, 5]] and [1, 2, "3", ["4", 5]] are not equal', () => {
    assert.deepEqual(eqArrays([1, 2, "3", [4, 5]], [1, 2, "3", ["4", 5]]), false);
  });

  it('should return true if arrays [[2, 3], [4, ["3"]]] and [[2, 3], [4, ["3"]]] are equal', () => {
    assert.deepEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
});