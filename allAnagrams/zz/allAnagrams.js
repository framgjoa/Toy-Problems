/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  // Creates a holder object.
  var anagrams = {};

  var finder = function(combination, copy) {
    //Check to see if the current combination has equal number of letters as the input string.
    if (combination.length === string.length) anagrams[combination] = true;
    debugger;
    for (var i = 0 ; i < copy.length; i++) {
      finder(combination + copy[i], copy.slice(0, i) + copy.slice(i + 1));
    }
  };
  
  finder("", string);
  return Object.keys(anagrams);
};
// Another Solution: 

var allAnagrams = function(string) {
  var result = {};
  // For each letter in string
  string.split('').forEach(function(letter, i) {
    var remainingLetters = string.slice(0, i) + string.slice(i + 1);
    // For each anagram of the remaining letters
    allAnagrams(remainingLetters).forEach(function(anagram) {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
};
  
