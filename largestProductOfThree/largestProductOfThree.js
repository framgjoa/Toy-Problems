/* Write a function that finds the largest possible product of any three numbers
 * from an array.
<<<<<<< HEAD
 *
=======
 * 
>>>>>>> 1774b637dfa8393c541fe117d96d24721de3bf77
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


<<<<<<< HEAD
var largestProductOfThree = function(array) {  //assuming array.length>=3
  // TODO: everything
  var sortedArray = array.sort();
  var length = array.length;
  //Trivial solution assuming all natural (positive, nonzero) numbers,
  //sorted array with .length-1 * .length-2 * .length-3
  var trivialSolution = sortedArray[length-1]*sortedArray[length-2]*sortedArray[length-3];

  var testThree = [];


  var productOfThree = function(array){//product of array with precisely three elements
    var product;

      product = array[0]*array[1]*array[2];
      //could use a counter to keep track that three products, if done recusively

  };

  var currentHighestProduct = productOfThree(array); //store with temporary value to test against

//cases where using the bubble sort and picking the three largest values won't work:
//zero in the "top three" position and there's two negative values that will negate
//similarly, two large absolutevalue negative numbers and any positive value

//okay, spent too much time thinking of how to find this case instead of just implementing
//recursive ==> though very time complex so think finding Abs values useful




//find three largest ABs values  //(four? because if we find 0 or ONE negative, need another check)

  // for (var i = 0; i < array.length; i++){
  //   if(array[i])

  // }
print(trivialSolution);
return trivialSolution;
};



//testing

var testArr1 = [1,2,3,4];
var testArr2= [0,0,1,2];
var testArr3 = [-2, -5, 0, 1, 2];

largestProductOfThree(testArr1);


=======
var largestProductOfThree = function(array) {
  // TODO: everything
};
>>>>>>> 1774b637dfa8393c541fe117d96d24721de3bf77
