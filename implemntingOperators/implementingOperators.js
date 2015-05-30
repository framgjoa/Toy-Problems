// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  // Return the product of x * y
  // Edge cases:
  // x or y zero
  // if x or y but not both negative: mulitply abs val return opposites
  //


  return x * y;
};

var divide = function(x, y) {
  // Return the dividend of x / y
  var result= (x / y).toString().split('');
  print(result);

  if(result.indexOf('.') >0){
    var decimalPointIndex = result.indexOf('.');
    print("Found decimal point at ", decimalPointIndex)
    //Rounding up logic
    if(result[decimalPointIndex+5] && result[decimalPointIndex +5] >= 5){
      result[decimalPointIndex+3]++;
    }

    result.splice(decimalPointIndex + 4, result.length);
    var allDone =result.join('');
  }

  return allDone;
};

var modulo = function(x, y) {
  // Return the remainder of x / y
  return x % y;
};


//Tests
print("Multiplies: ", multiply(2.1,4) );
print("Divides: ", divide(4,3));
print("Modulo: ", modulo(3,2));

//To-do: terror mode: bitwise operators
