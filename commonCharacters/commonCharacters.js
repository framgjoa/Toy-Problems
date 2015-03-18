/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing only the unique characters found in both strings, in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var finalCommons = [];
  var args = Array.prototype.slice.call(arguments);
  var argCount = args.length;

  for(var i = 0; i< args.length; i++){ //Getting unique char per string
    finalCommons.push();    //Loads array with UniqueCharStrings per argument
  }

  print(finalCommons[0]);
  print(finalCommons[1]);

 //ifs- Need to compare what exists in finalCommons[0] (base case) against all other arguments
 //looping thru all unique char in base case
 for(var i = 0; i< finalCommons[0].length; i++){
 if (finalCommons[0]indexOf(0) // && Somehow need to get all indexOfs per argument ){

 }
}

finalCommons.join("");  //Not working yet, not tested
return finalCommons;
};

var uniqueCharacters = function(string){  //Returns string of unique characters in order of appearance
  var storage = {};
  var uniques = [];

  for (var i = 0; i < string.length; i++){   //load object with unique characters
    storage[string[i]]= string[i];
  }

  for (var key in storage){       //pushes each letter in object into array
    uniques.push(storage[key]);
    //print(uniques);
  }
  uniques.join("");
  //print(uniques);
  return uniques;
}  //tested, works

var testString1 = "aaabbca";
var testString2= "abzabz"
//uniqueCharacters(testString1);
commonCharacters(testString1, testString2);
