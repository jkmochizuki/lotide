const {assert} = require('chai');
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe('tests for findKeyByValue', () => {
  it('should return "drama" for property "The Wire"', () => {
    assert.notStrictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"));
  });

  it('should return undefined for property "That 70s Show"', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
  });

  it('should return "comedy" for property "Brooklyn Nine-Nine"', () => {
    assert.notStrictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine",));
  });

  it('should return undefined for property "The Vire"', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "The Vire"));
  });
});