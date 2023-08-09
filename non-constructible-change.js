/**
 *
 * 1 - Non-Constructible Change
 * Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of
 * change (the minimum sum of money) that you CANNOT create. The given coins can have any positive integer value and aren't necessarily
 * unique (i.e., you can have multiple coins of the same value).
 *
 */

const nonConstructibleChange = (coins) => {
  if (!coins.length) {
    return 0;
  }

  let result = 0;

  coins.sort((a, b) => a - b);

  for (let i = 0; i < coins.length; i++) {
    if (coins[i] > result + 1) {
      return result + 1;
    }

    result += coins[i];
  }

  return result + 1;
};

// Test Case 1
const caseOne = [5, 7, 1, 1, 2, 3, 22];

console.log(nonConstructibleChange(caseOne));

// Test Case 2
const caseTwo = [1, 1, 1, 1, 1];

console.log(nonConstructibleChange(caseTwo));

// Test Case 3
const caseThree = [1, 5, 1, 1, 1, 10, 15, 20, 100];

console.log(nonConstructibleChange(caseThree));
