/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 * ==> n^2, since as many for loops as the indecies any element is form its "sorted" location
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Introduce i into the global scope so we can test function efficiency
var i;

// Feel free to add helper functions if needed.
var bubbleSort = function(array) {
  var length = array.length;

  while(true){
    var anySwaps= false;
    for(var i =0; i< length -1; i++){
      if(array[i] > array[i+1]){
        anySwaps= true;
        swapPositions(array, i, i+1)
      }
    }
    if(!anySwaps){
      break;
    }
  }
//print("Finished: ", array);
return array;

};

var swapPositions = function(array, position1, position2){
	var tempValue = array[position1];
	array[position1] = array[position2];
	array[position2] =  tempValue;
	return array;
}




var testArr1 = [2, 1, 3];
var testArr2 = [1, 2, 3, 0, -1, 2];
var testArr3= ["a", "b", "c", "a", 0, 1, 1, 0];

//print(testArr3);
//print(swapPositions(testArr1, 0, 1));

bubbleSort(testArr2);









