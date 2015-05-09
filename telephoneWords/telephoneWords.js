/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  // Return every combination that can be spelled on a phone with these digits
  var results = [];
  var buildingString = '';
  var possibleLetters = [];
  var digitArray = digitString.toString().split('');
  //print(digitString.toString().length)
  var resultsCounter=0;

  //Need to know when to stop building results array.
  //This depends on the possibilites per digit in the digit string
  for (var i = 0; i<digitArray.length; i++){
    //print("Possiblites of letters per key ", digitArray[i], " is ", phoneDigitsToLetters[digitArray[i]].length);
    resultsCounter = resultsCounter + phoneDigitsToLetters[digitArray[i]].length;
    //print("results counter: ", resultsCounter);
  }


  for (var i =0; i< digitArray.length; i++){
    //First need to load a possible array of letters per position

    //print("On numeral ", digitArray[i], " letter ", phoneDigitsToLetters[digitArray[i]]);
    possibleLetters.push( phoneDigitsToLetters[digitArray[i]] );
    print("Possibles arrays: ", possibleLetters);


    var recurse = function(possibleLetters){
      if(buildingString.length === digitArray.length){
        //Base break case
        results.push(buildingString);
        print("Full string completed: ", buildingString);
        print("Results so far: ", results);
        buildingString = '';
        // How to know when results is full? (Now: ResultsCounter calculated above)
        // The number of permutations will vary depending on if 0 or 1 are in the string....
        // For now... Get recursion working then think on this
        if(results === resultsCounter ){
          //All possible permuations found
          print("All results found: ", results);
          return results;
        }
      }else{
        //Keep building the possibilites
        //Recurse something in here. Like PRS, except non-uniform arrays of letters to pick from...
        //Don't want to use n for-loops either...

        buildingString = buildingString+possibleLetters[i][i];
        //Pop a letter out once added to string?

        }

    }
    recurse(possibleLetters);
  }
};

//telephoneWords(1115);
telephoneWords(666); //"Mom" for Mothers' Day :)
