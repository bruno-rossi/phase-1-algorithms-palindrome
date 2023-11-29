// STORY: As a user, I would like to verify if a word is a palindrome.
// In order to do so, we need a function that checks if a given string is exactly the same when spelled backwards.
// 

function isPalindrome(word) {
  // Write your algorithm here

  const splitWord = word.split("");
  const reverseWord = splitWord.reverse();
  const joinArray = reverseWord.join("");

  if (word === joinArray) {
    return true;
  } else {
    return false;
  }
}

isPalindrome("abba");

isPalindrome("fruit");

/* 
  Add your pseudocode here
*/

/*
  Solution: split the string into an array of characters, reverse that array, then re-join it into a new string. then, compare that new string to the word passed as an argument in isPalindrome. If true, return true, else return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
