# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jkmochizuki/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: Returns whether two given arrays are equal.
* `eqObjects`: Returns whether two given objects are equal.
* `assertEqual`: Asserts whether two given values - primitives - are equal.
* `assertArraysEqual`: Asserts whether two given arrays are equal.
* `assertObjectsEqual`: Asserts whether two given objects are equal.
* `head`: Returns the first item of an array.
* `tail`: Returns the tail of an array - array without its first item.
* `middle`: Returns the middle element(s) of an array. It returns a single element for odd arrays and two elements for even arrays.
* `flatten`: Returns a single level array by flattening a given nested array.
* `countLetters`: Returns the occurrences in an object of each character of a given string.
* `countOnly`: Returns an object containing the occurences of specific items in a given array.
* `findKey`: Returns the key of an object based on a callback function.
* `findKeyByValue`: Returns the key of a given value in a given object.
* `letterPositions`: Return an object containing the positions of each character of a given string.
* `map`: Returns a new array based on a callback function.
* `takeUntil`: Returns an array that includes the elements of a given array until a callback function returns a truthy value.
* `without`: Returns a new array containing elements of a given array that are not included in a variable containing items to remove.