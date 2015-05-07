/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  //Sort array largest to smallest
  array.sort(function(a,b){
    return b-a;
  });

 // print("Sorted array: ", array);
  var tempGreatest = array[0];   // Base case. Problem assumes array.length >=1

  //Keep track of the tempGreatest. If if goes down with the addition of a new value, STOP
  for(var i = 1; i < array.length; i++){
    if(tempGreatest + array[i] > tempGreatest){
      //print("Incrementing tempGreatests", tempGreatest, " with ", array[i])
      tempGreatest = tempGreatest + array[i];
      //print("New greatest: ", tempGreatest);
    }
  }
  //print("Final greatest sum: ", tempGreatest);
  return tempGreatest;
};

//sumArray([1,2,5,-1, 0]);
