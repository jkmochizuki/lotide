const assert = require("assert");
const flatten = require('../flatten');

describe(' tests for flatten', () => {
  it('should return [1, 3, 4, 5, 7] for array [1, 3, [4, 5, 7]]', () => {
    assert.deepEqual(flatten([1, 3, [4, 5, 7]]), [1, 3, 4, 5, 7]);
  });

  it('should [1, "3", 5, 4] return [1, "3", [5, 4]]', () => {
    assert.deepEqual(flatten([1, "3", [5, 4]]), [1, "3", 5, 4]);
  });

  it('should return [1, 7, 8, 5, 5] for array [1, [7, 8], 5, [5]]', () => {
    assert.deepEqual(flatten([1, [7, 8], 5, [5]]), [1, 7, 8, 5, 5]);
  });

  it('should return ["3", 4, "5", 7, 8, 9] for array [["3", 4, "5"], [7, [8, 9]]]', () => {
    assert.deepEqual(flatten([["3", 4, "5"], [7, 8, 9]]), ["3", 4, "5", 7, 8, 9]);
  });
});