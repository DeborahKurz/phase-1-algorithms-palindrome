function isPalindrome(word) {
  const forward = word;
  const backward = word.split('').reverse().join('');
  if(forward === backward){
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here:
  1.Write a function: isPalindrome
  2.Add 1 argument for the word we are putting in: "word"
  3.Write a constant for the word going forwards
  4.Write a constant for the word going backwards.Apply.split('').reverse().join('') to reverse the word.
  3.Create an If Else statement
  4.In the "if" statement, compare the word with the word reversed return "true"
  5.If it doesn't match, our else statment returns "false"
*/

/*
  Add written explanation of your solution here:
  I am writing a function that takes an argument and compares that agrument with the reversed letter order of that argument. The function returns true if the letters match, and false if they don't.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("bike"));
}

module.exports = isPalindrome;
