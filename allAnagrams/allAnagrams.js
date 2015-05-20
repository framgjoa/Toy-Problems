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
  // Your code here.
  //var tempWord = '';
  var results = [];
  var length = string.length;
  var letters = string.split('');
  print("Letters: ", letters);
  //var counterIndex = 0;

  // var buildWord = function(string, startingIndex){
  //   while(tempWord.length < string.length){
  //     for(var i = startingIndex; i < string.length; i++){
  //       tempWord+=string[i];
  //       print("Current tempWord ", tempWord);
  //     }
  //   }

    var newAnagram = function(word){
      if(word.length === length){
        print("Anagram completed: ", word);
        results.push(word);
        return;
      }
      print("here in function")
        for(var i = 0; word< length;i++){
          var currentLetter = letters[i];
          var tempWord = word.concat(currentLetter);
          print("Word: ", word, "letter: ",currentLetter,"TempWord: ", tempWord);
          newAnagram(tempWord);
        }

    }



    newAnagram('');

    //While completed indicates tempWord is correct length
    // print("Anagram completed: ", tempWord);
    // results.push(tempWord);
    // tempWord = '';
  // }

  // // while(counterIndex < string.length){
  // //   buildWord(string,counterIndex);
  // //   counterIndex++;
  // }

  print("All done: ",results);
  return results;
};


allAnagrams('abc');
