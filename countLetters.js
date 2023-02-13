const countLetters = function(str) {
  if (str.includes(" ")) str.replaceAll(" ", "");
  const results = {};
  for (const letter of str) {
    results[letter.toLowerCase()] ?
      results[letter.toLowerCase()] += 1 :
      results[letter.toLowerCase()] = 1;
  }
  return results;
};

module.exports = countLetters;