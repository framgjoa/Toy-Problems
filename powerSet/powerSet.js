/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str){
  var results = [];
  var frontCounter = 0;
  var rearCounter = 0;
  var base = "";

  var splitString = str.split("");
  results.push(splitString);

  var pushAllThings = function(){
    for(var j = 0; j < str.length; j++){
      var base = str[j]| "";

      if(base === str){       //base break out of recursion case,
        results.push(base);   //when string is fully built up, still needs to be added to powerset
        return;
      }

      base = base.concat(str[j+1]);
    }
  }

  pushAllThings(str);

  print(results);
  return results;



};

var test1 = "OMG";
powerSet(test1);


//Solution- still needs to add the full unique string
// var powerSet = function(str){
//   str = str || '';
//   var letters = {};
//   var solutions = {};

//   for(var i = 0; i < str.length; i++){
//     letters[str[i]] = true;
//   }

//   str = Object.keys(letters).join(‘’);

//   var recurse = function(strSet){
//     for(var i = 0; i < strSet.length; i++) {
//       var subSet = strSet.substr(0, i) + strSet.substr(i+1, strSet.length);
//       if (!solutions[subSet]) {
//         solutions[subSet] = true;
//         recurse(subSet);
//       }
//     }
//   };

//   recurse(str);
//   return Object.keys(solutions);
// };
