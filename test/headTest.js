const assert = require("assert");
const head = require('../head');

describe(' tests for head', () => {
  it('should return ["hello", [3]] for array [["hello", [3]], 5, 4]', () => {
    assert.deepEqual(head([["hello", [3]], 5, 4]), ["hello", [3]]);
  });

  it('should return "Hello" for array ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('should return "t" for array ["t",6,7])', () => {
    assert.deepEqual(head(["t",6,7, [7, 8]]), "t");
  });

  it('should return ["3", 5] for array [["3", 5], "t",6,7]', () => {
    assert.deepEqual(head([["3", 5], "t",6,7]), ["3", 5]);
  });

  it('should return {a: 3} for array [{a: 3}, 7, 9]', () => {
    assert.deepEqual(head([{a: 3}, 7, 9]), {a: 3});
  });

});