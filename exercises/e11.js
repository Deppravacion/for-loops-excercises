// EXERCISE 11
// Return an array of withdrawal sums of each bank account
// Array example: bankAccounts in /data/data.js
// getAllWithdrawals(bankAccounts) => [3432, 43242.34, 23432]

export function getAllWithdrawals(array) {
  // Your code goes here...    
  const moneygrabs = []; 
  for (let r = 0; r < array.length; r++) {
    let sum = 0
    if (array[r].withdrawals !== undefined) {
      for ( let i = 0; i < array[r].withdrawals.length; i++) {
        sum += array[r].withdrawals[i]
      }
      moneygrabs.push(sum)
    } else {
      moneygrabs.push(0)
    }
  }
  return moneygrabs

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
