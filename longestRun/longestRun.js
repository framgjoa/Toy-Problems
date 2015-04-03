/**
 * Write a function that, given a string, Finds the longest run of characters
 * and returns an array containing the start and end indices of that run. If
 * there are two runs of equal length, return the first one. For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TOD: Your code here!
  var startingIndex = 0;
//  var currentLongest ='';
  var currentLength = 0;
  //var currentMatch;
  var longestIndex = 0;
  var tempLongest = 0;
  //var tempString = '';

  for (var i = 0; i < string.length -1; i++){

    if(string[startingIndex]===string[i]){
    //  tempString+string[i]; //Actually, we don't care WHAT the string is
      tempLongest++;
  //    print("Matching letters found at index ", i, " of length ", tempLongest );

    }else{
      if(tempLongest>currentLength ){ //found a new longest string case
        currentLength = tempLongest;
        longestIndex = i;
  //      print(  "Letters changed, current longest is ", currentLength, " at " , longestIndex);
      }
      else{                         //letters changed, but not a longer sting
  //      print("Letters changed, not longer, index at ", i);
        startingIndex = i;
        tempLongest = 0;
      }
    }


  }

//print([longestIndex, longestIndex - currentLength]);
return  [longestIndex, longestIndex - currentLength];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};


longestRun('aaabbacda');
