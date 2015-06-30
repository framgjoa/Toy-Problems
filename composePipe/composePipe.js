/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

var compose = function(){
  var args = Array.prototype.slice.call(arguments);

 //return function that passes the value through each function
  //moves right to left
  return function(val){
    for(var i = args.length - 1; i >= 0; i--){
      val = args[i](val);
    }
    return val;
  };

};

 //var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) {
//print(statement.toUpperCase() + '!');
//  return statement.toUpperCase() + '!';}
// var welcome = compose(greet, exclaim);
 //print( welcome('phillip') ); // 'hi: PHILLIP!'



var pipe = function(){  //Need to pass in the value called for all the functions
 var args = Array.prototype.slice.call(arguments);
  print("Arguments are: ", args);
 //return function that passes the value through each function
  //moves left to right
  return function(value){
    for(var i = 0; i <args.length; i++){
      print("Piping ", args[i], " on ", value);
      value = args[i](value);
      print("Current value: ", value)
    }
    return value;
  };
};

//Pipe Example:
   // var add2 = function(number){ return number + 2; };
   // var multiplyBy3 = function(number){ return number * 3; };
   // pipe(add2, multiplyBy3)(5); // 21
   // pipe(add2, multiplyBy3, multiplyBy3)(5); // 63

