/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

Array.prototype.isSubsetOf = function(array){
  var storage = {};
  var subsetTestArray = this;
  var foundSubset = false;
  print(subsetTestArray);
  print(array);

  for (var i = 0; i<array.length; i++){   //Using an object could be handy, but not necessary
  	storage[i] = array[i];
  };

  //print(storage);


  for (var i = 0; i< subsetTestArray.length; i++){
  	var tempString = subsetTestArray[i];
  	print(tempString);
  	if ( array.indexOf(tempString) >= 0 ){		
  		//print("key found");
  		foundSubset = true;
  	}
  	else{
  		//print("This key is not found.")
  		return false;
  	}
  	
  }
//print(foundSubset);
return foundSubset;

};


//test cases
//var a = ['a', 'b', 'c', 'd', 'e'];
//var b = ['a', 'e'];
//var c = ['a', 'z'];

//b.isSubsetOf(a);
