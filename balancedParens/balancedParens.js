/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
  // var hasOpen = false;
  // var leadingOpen = true;
  // var closingClosed = true;
  var stack = []; //keep track of order of opens
  //need a base case where NO parens still returns true
  var pairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };
  //var parenOpens = [ '(', '[', '{'];  //same index per array for their open:close pair
  //var parensClosed = [')', ']', '}'];
  print("Case of: ", input)

  for(var i = 0; i <input.length; i++){
    var chr = input[i];
    if(pairs[chr]){
      stack.push(chr);
      print("Stack pushed: ", stack);
    }
    else if( chr ===')'|| chr===']' || chr==='}'){
      if (pairs[stack.pop()] !== chr){
        print("Not balanced at : ", chr, "false")
        return false;
      }

    // print("Stack length: ", stack.length)
    // return stack.length ===0; //this also covers the trival case (no brances)
    }


  }
//need the ANY condition [ ([{ ]
  print("Stack length: ", stack.length, !stack.length);
  return stack.length ===0;

 //Find all OPENs. Store these in array or object(type:index maybe?) --> don't need index, just order
 //if leadingOpen array has any elements, continue, else return true
   //Go to the innermost Open (last one) //index of string needs tracking here
   //Start closing RegEx [ )]} } at the index of the innermost open +1
   //If encounter one of the closing RegExs, make sure they match the OPEN's type
      //how? check same index in sample arrays parensOpens/parensClosed?
   //if true and pop off opening paren
   //else false


//Recusion? even that needs to know all the leadingOpens for where to start

//print(leadingOpen&&closingClosed);
//return (leadingOpen&&closingClosed);
};

// Examples:
    balancedParens(''); //true
    balancedParens('(');  // false
    balancedParens('()'); // true
    balancedParens(')(');  // false
    balancedParens('(())');  // true
