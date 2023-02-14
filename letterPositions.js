const eqArrays = require('./eqArrays');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letterLowCase = sentence[i].toLowerCase();
    results[letterLowCase] ? (results[letterLowCase]).push(i) : results[letterLowCase] = [i];
  }
  return results;
};

module.exports = letterPositions;