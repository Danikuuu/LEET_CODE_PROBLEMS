// Given an integer x, return true if x is a palindrome, and false otherwise

// EXAMPLE : 
// x = 121
// return "true" because if we reverse 121 it is 121 so its equal

const palindrome = (x) => {

  // if (x < 0) return false;
  return x.toString().split('').reverse().join('') === x.toString();
}
