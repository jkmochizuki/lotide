const assert = require("assert");
const letterPositions = require('../letterPositions');


describe(' tests for letterPositions', () => {
  it('should return { j: [ 0 ], u: [ 1 ], l: [ 2 ], i: [ 3 ], a: [ 4, 6 ], n: [ 5 ] } for string "Juliana', () => {
    assert.deepEqual(letterPositions("Juliana"), { j: [ 0 ], u: [ 1 ], l: [ 2 ], i: [ 3 ], a: [ 4, 6 ], n: [ 5 ] });
  });

  it('should return { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] } for string "Hello"', () => {
    assert.deepEqual(letterPositions("Hello"), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it('should return [ 0, 5 ] for position of "j" in string "Jutz jutz', () => {
    assert.deepEqual(letterPositions("Jutz jutz")["j"], [ 0, 5 ]);
  });

  it('should return [ 5, 6 ] position of "o" in string "LHL bootcamp"', () => {
    assert.deepEqual(letterPositions("LHL bootcamp")["o"], [ 5, 6 ]);
  });
});