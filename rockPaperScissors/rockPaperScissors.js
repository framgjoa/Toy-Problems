
/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (rounds) {
  // TODO: your solution here
  var sampleThrows = ["rock", "paper", "scissors"];  
  var randomIndices=[];   //keepig this a variable in case future functionality (more than 3 rounds) required
  var finalHand = [];
  var rounds;

  typeof(rounds) === "number" ? rounds: rounds =3; //default to 3 rounds is user does not provide a value
  if (rounds <= 0){                                //flag if an unrealistic value of rounds requested
  	finalHand.push("Please input how many rounds you'd like to play. Default is three.");
  }

  for (var i = 0; i<rounds; i++){
  	var sampleIndex = Math.floor(Math.random()*sampleThrows.length); //random index of integers 0-2
  	randomIndices.push(sampleIndex);								 
  }
  //print(randomIndices);


  for (var i =0; i<randomIndices.length; i++){
  	//print(sampleThrows[randomIndices[i]]);
    finalHand.push(sampleThrows[randomIndices[i]]);    //loads finalHand array based on required number of rounds
  }
  print(finalHand);
  return finalHand;

};

//Test cases:
//rockPaperScissors();
//rockPaperScissors(-1);
//rockPaperScissors(0);
//rockPaperScissors(1);