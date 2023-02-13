const assert = require("assert");
const eqObjects = require('../eqObjects');

describe(' tests for eqObjects', () => {
  it('should return false if objects { a: { y: 0, z: 1 }, b: 2 } and { a: { z: 1 }, b: 2 } are not equal', () => {
    assert.deepEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),  false);
  });

  it('should return false objects { a: [0, 3], b: 2 } and { a: [0, 3], b: 2 } are not equal', () => {
    assert.deepEqual(eqObjects({ a: [0, 3], b: 2 }, { a: [0, 3], b: 2 }),  true);
  });

  it('should return false if objects { a: "0", b: 2 } and { a: [0, 3], b: 2 } are not equal', () => {
    assert.deepEqual(eqObjects({ a: "0", b: 2 }, { a: [0, 3], b: 2 }), false);
  });

  it('should return false if objects { a: {a: "3", b: 5}, b: 2 } and { a: {a: 3, b: 5}, b: 2 }, are not equal', () => {
    assert.deepEqual(eqObjects({ a: {a: "3", b: 5}, b: 2 }, {a: {a: 3, b: 5}, b: 2 }), false);
  });
});