/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {

  var occuranceCount = {};
  //We'll first load the occurance count object with the count of each item in array
  for (var i =0; i< arr.length; i++){
    if(occuranceCount[arr[i]]){
      occuranceCount[arr[i]]++;
      //  print("Incrimented ", arr[i], " to ", occuranceCount[arr[i]]);

      //While the occurace object is being populated, to be efficient,
      //We may also check for the first occurance of an even count
      //This can only happen if the key:value already set up in object
      if(occuranceCount[arr[i]] %2 ===0){
        //print("Found even occurance! ", arr[i]);
        return arr[i];
      }
    }
    else{
      // Key did not previously exist, now initializing as 1
      occuranceCount[arr[i]] = 1;
    }

  }
 //print("No even cases found in arr: ", arr);
 //No even occurances were found. This is fine outside of the for-loop since
 //it has a postive return statement that will break and not touch this return null
 return null;

};

//Test cases
//var test1 = [1, 2, 3, 4, 2];
//evenOccurrence(test1);
