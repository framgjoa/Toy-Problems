
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` on invalid input.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral){
// TODO: Implement me!
  var romanOrder = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];   //Need to know the order to catch the IV cases
  var counter = 0;
  var previousDigit = false;

  for(var i = 0; i < romanNumeral.length; i++){
    if(!previousDigit){
      if(romanNumeral[i] ){   //look up key:value from DIGIT_VALUES and add to counter
        counter = counter + DIGIT_VALUES[romanNumeral[i]];
        previousDigit = romanNumeral[i];
        print("Counter in first case: ", counter)
        print("previous digit: ", previousDigit);
      }
    }
    else{                          //look up previous digit from romanOrder and see if it's LESS
      if(romanOrder.indexOf(previousDigit) < romanOrder.indexOf(romanNumeral[i])){
        //something about subtraction here, multiplied by order of magnitude of key:value
        counter = counter + (DIGIT_VALUES[romanNumeral[i]] - 2*DIGIT_VALUES[previousDigit] ); //2 times since added it in the first step
      }

      previousDigit = romanNumeral[i];      //set new previous digit now done with all checks and math
      print("previous digit: ", previousDigit);
    }
  }
  print('All Done counter: ', counter);
  return counter;
}; //singletons work, basic additions work


//translateRomanNumeral('V');
//translateRomanNumeral('VIII');  //yay!
//translateRomanNumeral('IV');      //might be cheating with that 2* in else
