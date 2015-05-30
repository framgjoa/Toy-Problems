/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  var currentLongestLength= '';
  var testLetters = string.split('');
  var endingIndex = 1;

  //catch trivial case
  if(string.length ===1){
    print("Trivial case, ", string);
    return string;
  }


  //step thru the string and find a palendrome
  for (var i = 1; i < string.length; i++){


  }

  //Check if the palendrom is larger than current longest

  //

};

//helper function
var isPalindrome = function(substring){
  var midpoint = Math.floor(substring.length/2);
  //if even


  //if odd



};
