var rockPaperScissors = function (/* START SOLUTION */rounds/* END SOLUTION */) {
  // TODO: your solution here
  /* START SOLUTION */
    rounds = rounds || 3;
    var outcomes = [];

    var plays = ['rock', 'paper', 'scissors'];

    var combos = function(roundsToGo, playedSoFar) {
      if( roundsToGo === 0 ){
        outcomes.push( playedSoFar );
        return;
      }

      for( var i = 0; i < plays.length; i++ ){
        var currentPlay = plays[i];
        combos( roundsToGo-1, playedSoFar.concat(currentPlay) );
      }
    };
    combos( rounds, [] );

    return outcomes;
  /* END SOLUTION */
};