// Given an array with unique characters arr and a string str, find the smallest
//substring of str containing all characters of arr.

// Example:
// arr: [x,y,z], str: xyyzyzyx
// result: zyx

var substring = function(arr, str){
  print("test");
  var holder = {};
  var maxdistance = str.length;
  //print("maxdistance init: ", maxdistance);

  for (var i =0; i< arr.length; i++){
    holder[arr[i]] = [];
   // print("loaded obj with arrays: ", holder);
  }
  for (var i =0; i<str.length; i++){
    if (holder[str[i]]){   //check if there's a key
      holder[str[i]].push(i);     //if so, save that string index in the object
     // print("found relevant key, now all indicies of: ", str[i], " are ", holder[str[i]]);
    }
  }

for(var key in holder){         //for each sample letter in array
  var tempLoc  = [];           //this array will be as long as the original arr
                              //tempLoc[i] will the the index of arr[i] per test

  for (var i = 0; i<holder[key].length; i++){   //start at the indecies array

    if(maxDist(tempLoc)<=maxdistance){ //this will save some time by stopping a not-full array
      //continue                                //if it's already failling

    }else{

    }



    if (tempLoc.length === arr.length&& maxDist(tempLoc)<maxdistance){//this is the case that tempLoc has an index of each letter
      //check max distance
      var bestSoFar = tempLoc.slice();
      bestSoFar.sort();
      // var startIndex = Math.min(tempLoc);     //verify can be used on arrays
      // var endIndex = Math.max(tempLoc);
    }
      var substring = str.slice(bestSoFar[0], bestSoFar[bestSoFar.length-1]);
      print("substring: " , substring, " from index ", bestSoFar[0], " to ", bestSoFar[bestSoFar.length-1]);
      return   substring;


  }


}

};


var maxDist = function(arr){ //addresses case where arr is 1 element
  var copy = arr.slice();
  copy.sort();
  var maxdistance = copy.length > 1 ? copy[copy.length-1]-copy[0]: 1;
  return maxdistance;

}


var testArr = ['x','y','z'];
var testStr = 'xyxyxxz';

substring(testArr, testStr);
maxDist([1,4,9,2]);

/*
Make array with location of each letter. Single for loop can load these
x: [0, 3, 5, 7]   //these will be in order for free
y: [1, 2, 9]
z: [4,8]
//check that no null sets
//minimum distance between index values from each array


0-1-4 max distance is 4-0 = 4
0-1-8 max distance is 8-0 = 8
can sort like a binary tree with checks each step against current shortest path
3-1-8 max distance 8-1 = 7



*/
//var findsClosest = function(charA, charB, str){
  //load object of index locations of charA and charB
  /*
  0: A
  1: B
  2: false //neither case
  */
  //first eliminate null case by var key in obj [value] exists
  //find closest indicies

//}



/*
Let's give each character in the string a object property where it calculates the closest to
all characters in the array. The key is the index of the original array

0:    //in this case "x"
{x: 0, //itself in this case
 y:1,  //need to be able to have a false option- to indicate it's not found
 z: 3
},
1:

//the highest value will the the size of the substring


*/



//go thru str, find first match from arr


//from that index, step forward, to front of word, looking for next match of arr STEP FORWARD
  //if found
  //if not found
//then step until end of str, looking for next match of array STEP BACKWARD
  //if found
  //if not found


//Need to catch a null case where the str does not contain all element of the arr

