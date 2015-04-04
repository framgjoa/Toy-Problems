/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  // Your code here
  //How many significant figures after decimal point. slice after "."

  var numAr = number.toString().split('');
  var decimalPlace = numAr.indexOf('.');
  var sigFigs = numAr.slice(decimalPlace +1).join('');//may need test edge cases with that +1
                                                      //this assumes there ARE values after the .
  var figsReduced = sigFigs.slice(); //copy to reduce with the base
  var top = numAr.slice(0, decimalPlace);
  //print("top",top);
  //print("sigFigs",sigFigs);
  //cut those off, put them over 10^n of those sig figs //already done by joining them
  var length =sigFigs.length; //need this to know base of decimals. this is 10^length
  //print(length);
  var base = Math.pow(10,length);  //start reducing by modulos when ===0

  for (var i =0; i <sigFigs; i++){ //boo, this will miss multiple factors (ie 2, 2, 2, 2, 2)
    if(figsReduced%i===0){
      figsReduced= figsReduced/i;
      base = base/i;
    }
  }

//helper function GCF?
//if HAS GCF>1, reduce both base and figs by that
//if not, DONE, return (figs + top*base) over base //type cooerce attention


};

//lifted from Stackoverflow
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);
};


var test1 = 0.5;
var test2 = 0.001;
toFraction(test1);
