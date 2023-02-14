const assert = require("assert");
const takeUntil = require('../takeUntil');

const data1 = [1, 3, 7, 0, 40];
const results1 = takeUntil(data1, number => number === 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

describe(' tests for takeUntil', () => {
  it('should return [1, 3, 7] for takeUntil number === 0 in array [1, 3, 7, 0, 40]', () => {
    assert.deepEqual(results1,[1, 3, 7]);
  });

  it('should return [ "I\'ve", "been", "to", "Hollywood" ] for takeUntil "," in array ["Ive", "been", "to", "Hollywood", ",", "Ive", "been", "to", "Redwood"]', () => {
    assert.deepEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});