/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  // Your code here 
 // Base case: if the array is empty, return an array containing an empty array
 if (arr.length === 0) {
  return [[]];
}

// Get the first element of the array
const first = arr[0];

// Get all subsets excluding the first element
const restSubsets = subsets(arr.slice(1));

// Create a new array to store all subsets including the first element
const subsetsWithFirst = restSubsets.map(subset => [first, ...subset]);

// Combine subsets excluding the first element with subsets including the first element
return [...restSubsets, ...subsetsWithFirst];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
