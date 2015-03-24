/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var tempString = string;
  var characterBase = [];
  var result = [];
  var foundOnce = false;
  var foundBase = [];

var checkString = function(string){

  if (foundOnce){
	return result;
	}

  for (var i = string.length -1; i >= 0; i--){      
   	if (characterBase.indexOf(string[i]) === -1){

  		characterBase.push( string[i] ); //loads array of found characters
  		tempString.slice(0,-1);			  //removes letter just checked
  		print (characterBase);
  		checkString(tempString);			//checks the rest of string
  		
  	}
  else{
  		foundBase[i] = true;
  		result = string[i];
  		return;
  	}
    }


    };

checkString(tempString);
print(result);
return result;
};

firstNonRepeatedCharacter("AAAABAAA");
