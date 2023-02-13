const middle = function(arr) {
  let newArr = [];
  let arrLength = arr.length;
  if (arrLength < 3) newArr = [];
  if (arrLength % 2 !== 0 && arrLength >= 3) newArr.push(arr[(arrLength - 1) / 2]);
  if (arrLength % 2 === 0 && arrLength >= 3) newArr = (arr.slice(((arrLength / 2) - 1), ((arrLength / 2) + 1)));
  return newArr;
};

module.exports = middle;