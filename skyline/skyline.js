//
//
// Skyline takes an array of buildings outputs the final skyline
// Each building is described by an array with three elements: start point, height, width
// Input array will appear like [ [1,1,1], [3,2,2] ]
// Output is the final skyline [0, 1, 0, 2, 2]
// Brute force method
var skyline = function(array){
  var finalSkyline = [];

  for(var i =0; i<array.length; i++){
    //array[i][0] is the x-coodinate start
    var start = array[i][0];
    //array[i][1] is the height
    var currentHeight = array[i][1];
    //array[i][2] is the width
    var end = start+array[i][2];

    print("Current building: ", start, currentHeight, end);

    // Need to make sure the finalSkyline array has defined elements("0")
    // through the relevant building location
    // Otherwise, the if-statement checking the maximum height will return undefined
    for(var m = 0; m< end; m++){
      if(!finalSkyline[m]){
        finalSkyline[m] = 0;
        print("Adding blanks to skyline at ", m);
      }
    }


    for(var j = start; j<end; j++ ){
       print("Adding buildings to skyline at ", j);
     if(finalSkyline[j]<currentHeight){
        finalSkyline[j] = currentHeight;
      }



    }
  }

  print("Final skyline", finalSkyline);
  return finalSkyline;
};

skyline([ [1,1,1], [3,2,2] ,  [3,1,1]]);
