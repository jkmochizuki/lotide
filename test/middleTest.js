const assert = require('assert');
const middle = require('../middle');

describe('tests for middle', () => {
  it('should return ["Lighthouse"] for array ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });

  it('should return [5, 4] for array [2, 5, 4, 6]', () => {
    assert.deepEqual(middle([2, 5, 4, 6]), [5, 4]);
  });

  it('should return ["4"] for array [2, [{a: 5}, 3], "4", "Hello", 7]', () => {
    assert.deepEqual(middle([2, [{a: 5}, 3], "4", "Hello", 7]), ["4"]);
  });

  it('should return ["3", 5] for array [1, "3", 5, 3]', () => {
    assert.deepEqual(middle([1, "3", 5, 3]), ["3", 5]);
  });

  it('should return [[5, [5, "4"], [4, [3]]]] for array [[3], [5, [5, "4"], [4, [3]]]]', () => {
    assert.deepEqual(middle([[3], [5, [5, "4"], [4, [3]]], "Hello"]), [[5, [5, "4"], [4, [3]]]]);
  });
});