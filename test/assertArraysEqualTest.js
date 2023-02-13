const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]);
assertArraysEqual([[2, 3], ["4"]], [[2, 3], ["4"]]);
assertArraysEqual([["4", 7], 5], [["4", 7], 5]);