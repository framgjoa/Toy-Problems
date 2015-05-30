var balancedParens = function(input){

  var stack = [];

  var pairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };


  for(var i = 0; i <input.length; i++){
    var chr = input[i];
    if(pairs[chr]){
      stack.push(chr);
    }
    else if( chr ===')'|| chr===']' || chr==='}'){
      if (pairs[stack.pop()] !== chr){
        return false;
      }
    }
  }
  //Using a boolean check here will return the trivial case (" ") as true
  // and catch if anything left in the stack (unpaired)
  return stack.length ===0;

};

