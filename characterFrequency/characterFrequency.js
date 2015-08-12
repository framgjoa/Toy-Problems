/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  var charFreq = {};
  var result = [];

  for(var i = 0; i < string.length; i++){
    //Load the CharFreq object
    if( charFreq[string[i]] ){
      charFreq[string[i]]++;
    }else{
      charFreq[string[i]] = 1;
    }
  }

  for (var keys in charFreq){
    var tempArr = [];
    tempArr.push(keys);
    tempArr.push(charFreq[keys]);
    result.push(tempArr);

  }

  // Sort: Know result in form of [ [a,4], [b,2] ... ]
  // So need to compare the second (last) value of each two-ple

  result.sort(function(a,b){
    if (a[1] > b[1]){
      return -1;
    }else if(a[1]<b[1]){
      return 1;
    }
  });

  //Modified insertion sort from yesterday's toy prob
  // for(var i = 0; i < result.length; i++){
  //   var tempValue = result[i][1];
  //   for(var j = i+1; j < result.length; j++){
  //     if (result[i][1] < result[j][1] ){
  //       //print("Found a case to swap! " , result[i][1], " at ", i, " with ", result[j][1], " at ", j);
  //       //Swap in place. Already have array[i] saved as tempValue so can overwrite in array
  //       result[i][1] = result[j][1];
  //       result[j][1] = tempValue;
  //     }
  //   }
  // }
  //print("After sorting ", result);
  return result;
};

//Basic testing
//characterFrequency("bbaaac");
//characterFrequency("abcdddead");




