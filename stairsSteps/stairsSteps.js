/* Given a stairwell of n stairs and that a person can either take one or two stairs
per step, how many different ways are there to climb the stairwell?

For example, 4 stairs can be taken in the following patterns:
[1,1,1,1], [1,1,2], [1,2,1], [2,1,1], [2,2]

*/

var stairSteps = function(n){
  var stairsRemaining = n;
  var stepType = [1,2];
  var routeCount = 0;
  var currentRoute = [];

  var routePicker = function(stairsRemaining){
    //Check how many stairs are left
    if(stairsRemaining ===0){
      // Done!
      print("Final Route: ", currentRoute);
      currentRoute = [];
      routeCount++;
    }else if(stairsRemaining ===1){
      //If there's 1 stair, there's only one option
      currentRoute.push(1);
      stairsRemaining--;
      routePicker(0);
    }else{
      //Otherwise, can do either step option.
      for(var i = 0; i<stepType.length; i++){
        currentRoute.push(stepType[i]);
        print("CurrentRoute buildling: ", currentRoute);
        routePicker(stairsRemaining - stepType[i]);
      }
    }
  };

  routePicker(n);
  print("Total routes for ", n ,": ", routeCount);
  return routeCount;
}

stairSteps(1);
stairSteps(2);
stairSteps(3);
stairSteps(4);
//stairSteps(5);

/*
Induction Solution

Starting with base cases. If you add a step to an existing case, depending on if
the initial case was even or odd, you will add either 1 new route or two ([1,1],[2])

s(n) = s(n-1) + d(n-1)
d(n) = s(s-1)
s(1) = 1
d(1) = 0
s(2) = 1
d(2) = 1
s(3) = 2
d(3) = 1
... etc ...


*/
