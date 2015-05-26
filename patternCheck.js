var patternCheck = function(string, pattern){
  // Each pattern and string are strings
  // Pattern can be in form of ABA, so then if the string is REDblackRED, this would pass
  // Since RED = A, black = B, and RED = A
  var storage = {};
  var subPattern = pattern.split("");


  for(var i = 0; i < string.length; i++){
    for(var j = 0; j< pattern.length; j++)
    var tempStr = string.splice(0,i);
    storage[tempStr] = pattern[i];

  }



};


/*
blackREDblack
a b a


blackREDblackblack

a b a a

{
  'b': a,
  'bl': a,
  ..
  'black':a,



}
//load one character of a pattern


//check if needs to repeat anywhere  //RegEx?
  //if does, continue
    //see if *possible* for pattern to match
    //if not, false
  //if doesn't, load next pattern



*/
