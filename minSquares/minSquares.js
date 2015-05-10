// Given random interger, what is minimum number of squares which sum up to it?

var minSq = function(val){
  var results = [];
  if( Math.sqrt(val) % 1 ===0){ // if remainder
    results.push(Math.sqrt(val));

  }else{
    var tempResults = [];
    var start = Math.floor( Math.sqrt(val));
    var valRemainder = val;
    var recurse = function(val, start){
      while( !valRemainder && start >=0){
        if(valRemainder>= start*start){
          valRemainder = valRemainder - start*start;
          tempResults.push(start);
        }
        else{
          start--;
        }

      }
      recurse(val, start-1);
    }
    if(tempResults.length < results.length){
      results = tempResults;
    }
  }

  return results;
}
