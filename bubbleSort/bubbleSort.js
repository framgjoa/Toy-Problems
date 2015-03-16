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
  var finalArray = [];
  var anySwaps= true;

  
  var doSwaps = function(array){
    for (var j =0; j<array.length -1; j++){
  	  	  if(array[j] > array[j+1]){			// >= creates infinite loops for equal elements of array
	  	    	swapPositions(array, j, j+1);
			    var anySwaps = true;
			    print(array);
		    }
		  else{								//Case where the array has been checked and no swaps were required
		    	var anySwaps= false;		// ==> this array is sorted!
		    }
    }
   

    };
  
 while(anySwaps===true){
	  doSwaps(array);
	  return array;
     };

//anySwaps ? doSwaps(array) : finalArray = array;
return finalArray;

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

//bubbleSort(testArr3);









