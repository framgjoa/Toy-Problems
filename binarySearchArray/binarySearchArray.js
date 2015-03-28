/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
var originalIndex;

var binarySearch = function (array, target) {
  var init = true;
  var length = array.length;
  var midpoint = Math.floor(length/2) ;    //may need to check edge cases here
  var originalIndex = length;             //need to keep track of this despite slicing arrays

  var midpointCheck = function(array, midpoint, originalIndex){
    print("current array & midpoint: ", array, midpoint, originalIndex);
    if(array[midpoint]=== target){        //could shorten by checking if array.length = 1 ==>found?
      print("found at index: " , midpoint) //this repeats the initializing checks
      return originalIndex;
    }
    else if(array[midpoint]> target){     //Less than case array shorter
      var halfArray = array.slice(0, midpoint);
      originalIndex -= halfArray.length;
      print("Less than case, new array: ", halfArray, " With current index: ", originalIndex);
      binarySearch(halfArray, target);

    }else{  //array[midpoint] >target                //should be the greater than case
      var halfArray = array.slice(midpoint, array.length);
      originalIndex += halfArray.length;
      print("Greater than case, new array: ", halfArray, " With current index: ", originalIndex);
      binarySearch(halfArray, target);

    }

  }


  if(length === 1){   //I only want to run this function the very first time it goes...
      print("found in first check: ", array[0]);
      return array[0];
    }else{
      var originalIndex = midpoint;
      midpointCheck(array, midpoint, originalIndex);
    }



};

var testArr1 = [1,2,3,4,5, 6, 7,8]
binarySearch(testArr1, 4);

