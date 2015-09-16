/* Given the time, calculate the angle between the clock's face hands. */


var clockHands = function(time){
//Will assume time in string "##:##"" format
var hoursMin = time.toString().split(":");
// In form of array with ["HOUR", "MIN"];

//Clock face in 360 degrees. Will calculate each hand to its location and take difference
//Determine minuite hand location
var minLocation = hoursMin[1]/60 * 360;
//Determine hour hand location
var hourLocation = ( hoursMin[0]/12 *360 + hoursMin[1]/60/12 ) % 360 ;

print("Time", time, hoursMin, "Locations", minLocation, hourLocation);
var difference = Math.abs(minLocation-hourLocation); //Should already be in degrees of circle
var angle = difference;

print(time, " angle difference: ", angle);
};

// clockHands("12:15");
// clockHands("12:00");
// clockHands("3:15");
// clockHands("10:10");
