/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n < 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // Return true if n is prime, false otherwise
  // A number is prime if its only factors are 1 and itself
  // Check every value decrimenting down from its square
  // (This should save some time on the search, since
  // the largest possible factor of a number is its square. Still ~linear)
  var startCheck = Math.floor(Math.sqrt(n));
  //print("Prime check for ", n, " starts at ", startCheck);
  for (var i = startCheck; i>1; i--){
    if(n%i===0){
      //print("Factor check of ", i, " into ", n, ": FALSE");
      return false
    }

  }
  //Only reach this case if not already broken out by finding a factor
  //print(n, " is prime! TRUE!")
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
  var storage = [];
  for(var i = start; i<= end; i++){
    if( primeTester(i)){
      storage.push(i);
    }
  }
  for(var j = 0; j<storage.length; j++){
    print(storage[j]);
  }

}; //Works, tested for edge cases and inclusivity of end


//Basic Testing for primeTester
// primeTester(2);
// primeTester(4);
// primeTester(5);
// primeTester(17);
// primeTester(18);

//Basic Testing for primeSieve

//primeSieve(15,20);



