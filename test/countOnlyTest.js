const {assert} = require('chai');
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe('tests for countOnly', () => {
  it('should return 1 for key result1["Jason"]', () => {
    assert.deepEqual((result1["Jason"]), 1);
  });

  it('should return undefined for key result1["Karima"]', () => {
    assert.isUndefined((result1["Karima"]));
  });

  it('should return 2 for key result1["Fang"]', () => {
    assert.deepEqual((result1["Fang"]), 2);
  });

  it('should return undefined for key result1["Agouhanna"]', () => {
    assert.deepEqual((result1["Agouhanna"]), undefined);
  });

});