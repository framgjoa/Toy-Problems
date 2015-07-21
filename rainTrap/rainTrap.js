/* Given an array that represents the height of square-unit blocks,
provide a function that can calculate the volume of water that the irregular
areas between the blocks can hold. */

var rainTrap = function(array){
  var cumulativeWaterVolume = 0;

 // Need min of 3 block to contain any volume
  if(array.length<3){
    //print("Need minimum of three blocks to trap water");
    return cumulativeWaterVolume;
  }

  //iterate over the array
  for (var i = 1; i < array.length -1; i++){
    // start at i = 1, since will need min of 3 block to contain any volume
    var highestLeft = 0;
    var highestRight = 0;

    // Find the highest block to the left of current block
    for(var j = i - 1; j >= 0; j--){
      if(array[j]> highestLeft){
        highestLeft = array[j];
      }
    }

    // Find the highest block to the left
    for(var k = i +1; k < array.length; k++){
      //print("array[k] ", array[k])
      if(array[k]> highestRight){
        highestRight = array[k];
      }
       //print( "Highest Left, Current, Highest Right: ", highestLeft, array[i], highestRight);
    }
    //print( "Index, Highest Left, Current, Highest Right: ",i, highestLeft, array[i], highestRight);

    // if both left & right highest are greater than current block
    if ((highestLeft > array[i])&&(highestRight>array[i])){
      // calc volume
      var tempVolume = Math.min(highestLeft, highestRight) - array[i];
      //print("tempVol: ", tempVolume);
      // Add current block index's volume to cumulative total
      cumulativeWaterVolume = cumulativeWaterVolume + tempVolume;
      //print("CumVol: ", cumulativeWaterVolume);
    }

  }
  //print("Final Volume: ", cumulativeWaterVolume);
  return cumulativeWaterVolume;
};

rainTrap([6,1,3,0,5]);
