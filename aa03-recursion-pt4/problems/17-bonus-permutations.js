/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

const permutations = (array) => {
  // Your code here 
// Base case: If the array has only one element, return an array containing that element
if (array.length === 1) {
  return [array];
}

// Initialize an empty array to store permutations
const result = [];

// Iterate through each element in the array
array.forEach((element, index) => {
  // Generate permutations for the array excluding the current element
  const rest = [...array.slice(0, index), ...array.slice(index + 1)];
  const permutationsOfRest = permutations(rest);

  // Add the current element to each permutation of the rest of the array
  permutationsOfRest.forEach(permutation => {
      result.push([element, ...permutation]);
  });
});

return result;
};

// Example usage:
console.log(permutations([1, 2])); // [[1, 2], [2, 1]]
console.log(permutations([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
