/* Write a function that finds the largest possible
 product of any three numbers
 * from an array.

 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

var largestProductOfThree = function(array) {
  //assuming array.length>=3
  var result;
  var sortedArray = array.sort();
  var length = array.length;
  //print("Sorted ", sortedArray);

  //If there are two negative numbers (ie sortedArray[1] < 0)
  if(sortedArray[1]<0){
    //print("At least two negative numbers")
    //Check two "largest" negative numbers against two "largest" postive numbers
    if(sortedArray[0] * sortedArray[1] > sortedArray[length-1] * sortedArray[length-2]){
      //print("Negative values in use")
      result = sortedArray[0] * sortedArray[1] * sortedArray[length-1];
    }
  }else{
    result = sortedArray[length-1] * sortedArray[length-2] * sortedArray[length -3];
  }
  //print("Final result ", result);
  return result;
};



//testing

// var testArr1 = [1,2,3,4];
// var testArr2= [0,0,1,2];
// var testArr3 = [-2, -5, 0, 1, 2];

// largestProductOfThree(testArr2);

