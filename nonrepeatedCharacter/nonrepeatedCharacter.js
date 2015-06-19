/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
 var storage = {};
  var results;

  for(var i = 0; i < string.length; i++){
    var character= string[i];

    //first time the character appears, count it
    if(!storage[character]){
        storage[character] = 1;
      }else{
    //second or more time, incriment it
        storage[character] = storage[character]+ 1;
    }
  }

  for(var i = 0; i < string.length; i++){
    var character= string[i];
    if(storage[character] === 1){
      results= character;

    }

  }

  return results ? results: "sorry";
};

firstNonRepeatedCharacter('AAA'); //bug: this passes A
//firstNonRepeatedCharacter('ABCABCDABC');
