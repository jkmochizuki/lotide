const assert = require('assert');
const tail = require('../tail');

describe('tests for tail', () => {
  it('should return ["Lighthouse", "Labs"] for array ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('should return [5, 4, 6] for array [2, 5, 4, 6]', () => {
    assert.deepEqual(tail([2, 5, 4, 6]), [5, 4, 6]);
  });

  it('should return [[{a: 5}, 3], "4", "Hello", 7] for array [2, [{a: 5}, 3], "4", "Hello", 7]', () => {
    assert.deepEqual(tail([2, [{a: 5}, 3], "4", "Hello", 7]), [[{a: 5}, 3], "4", "Hello", 7]);
  });

  it('should return ["3", 5, 3] for array [1, "3", 5, 3]', () => {
    assert.deepEqual(tail([1, "3", 5, 3]), ["3", 5, 3]);
  });

  it('should return [[5, [5, "4"], [4, [3]]]] for array [[3], [5, [5, "4"], [4, [3]]]]', () => {
    assert.deepEqual(tail([[3], [5, [5, "4"], [4, [3]]]]), [[5, [5, "4"], [4, [3]]]]);
  });
});
