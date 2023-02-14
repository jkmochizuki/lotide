const assert = require("assert");
const without = require('../without');

describe(' tests for without', () => {
  it('should return ["hello", "world"] if removes "lighthouse" from array ["hello", "world", "lighthouse"]', () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);
  });

  it('should return [4, 3, 7] if removes 6 from array [4, 3, 6, 7]', () => {
    assert.deepEqual(without([4, 3, 6, 7], [6]), [4, 3, 7]);
  });

  it('should return ["t", 6] if removes 7, 8 from array ["t", 6, 7, 8]', () => {
    assert.deepEqual(without(["t", 6, 7, 8], [7, 8]), ["t", 6]);
  });
});