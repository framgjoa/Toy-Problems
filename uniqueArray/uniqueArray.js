var uniqueArray = function(array){

  var results = [];

  for(var i = 0; i< array.length; i++){
    if(results.indexOf(array[i])  < 0){
      results.push(array[i]);
    }
  }
  print(results);
  return results;
};

uniqueArray([1,1,1,3,4,5,1]);
