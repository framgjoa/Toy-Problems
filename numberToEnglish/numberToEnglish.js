/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  // Identify how many significant figures the number has
  print("number ", this);
  var number = this.valueOf(); //Ensure integer

// To support decimals
  if (number%1 !==0){
    //Type cooerce the number to be able to use IndexOf
    //Some of this code recycled from fractionConverter
    var tempNumAr = number.toString().split('');
    var decimalPlace = tempNumAr.indexOf('.');
    var decimalSigFigs = tempNumAr.slice(decimalPlace +1).join('');
    var figsReduced = decimalSigFigs.slice();
    print("Found decimal point at ", decimalPlace, "decimal sig figs: ", decimalSigFigs);

  }
  //Need to include the character space occupied by the decimal point
  decimalSigFigs ? decimalSigFigs++ : 0;

  //Find wholeSigFigs of the number
  print("this ", this );
  var wholeSigFigs = number.toString().length - decimalSigFigs;
  print("Sig figs: ", wholeSigFigs);

  //Three main cases
  //Less than 20
  if(numToWords[n]){

  }else if(n<100){

  }else{
    if (n<1000)
  };

  // Mutlple of 20-100
  // < 100 but not special


  //Break wholeSigFigs into groups of three, from the 0 or decimal point
  // 1,993,221

  //Compose number from right to left, knowing how many values are in each group of three



};

(5).toEnglish();
(11.1).toEnglish();



