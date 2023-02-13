const assert = require("assert");
const countLetters = require('../countLetters');

describe(' tests for countLetters', () => {
  it('should return { j: 1, u: 1, l: 1, i: 1, a: 2, n: 1 } for string "Juliana"', () => {
    assert.strict(countLetters("Juliana"), { j: 1, u: 1, l: 1, i: 1, a: 2, n: 1 });
  });

  it('should return { h: 1, e: 1, l: 2, o: 1 } for string "Hello"', () => {
    assert.strict(countLetters(["Hello"]), { h: 1, e: 1, l: 2, o: 1 });
  });

  it('should return { b: 1, a: 3, n: 2 } for string "banana"', () => {
    assert.strict(countLetters("banana"), { b: 1, a: 3, n: 2 });
  });

  it('should return { j: 2, u: 2, t: 2, z: 2 } for string "Jutz Jutz"', () => {
    assert.strict(countLetters("Jutz Jutz"), { j: 2, u: 2, t: 2, z: 2 });
  });

});