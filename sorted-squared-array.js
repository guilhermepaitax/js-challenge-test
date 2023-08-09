/**
 * 2 - Sorted Squared Array
 * Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with
 * the squares of the original integers also sorted in ascending order.
 */

const sortedSquaredArray = (array) => {
  if (!array.length) {
    return [];
  }

  const arrayLen = array.length;
  const result = new Array(arrayLen);
  let leftPointer = 0;
  let rightPointer = arrayLen - 1;

  for (let i = arrayLen - 1; i >= 0; i--) {
    if (Math.abs(array[leftPointer]) < Math.abs(array[rightPointer])) {
      result[i] = Math.pow(array[rightPointer], 2);
      rightPointer--;
    } else {
      result[i] = Math.pow(array[leftPointer], 2);
      leftPointer++;
    }
  }

  return result;
};

// Test Case 1
const caseOne = [1, 2, 3, 5, 6, 8, 9];

console.log(sortedSquaredArray(caseOne));

// Test Case 2
const caseTwo = [-2, -1];

console.log(sortedSquaredArray(caseTwo));

// Test Case 3
const caseThree = [-10, -5, 0, 5, 10];

console.log(sortedSquaredArray(caseThree));
