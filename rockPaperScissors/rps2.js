var rockPaperScissors = function(rounds){
	var rps = ['rock', 'paper','scissors'];
	var results = [];
	//var currentPlay = [];
	var currentHand = [];
	rounds = rounds||3;

	var combos = function(hand){
	  if (currentHand.length === rounds){
			results.push(hand);
			return;
		}


	  for(var i = 0;  currentHand< rounds; i++){
		var currentPlay = rps[i];
		combos(currentHand.concat(currentPlay));
       }


	};

    combos([]);
    return results;


}

rockPaperScissors(2);