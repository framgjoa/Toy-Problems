/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  }
  return board;
};

var robotPaths = function(n, board, i, j) {
  var directions = ["U", "D", "L", "R"]; //for up, down, left, right
  // Sucessful directions will be saved into the uniquePaths array.
  var uniquePaths = [];
  var visitedPositions ={}; //key:values as i:j  //don't like the board functions above
  // Once all routes calcualted, returning the length of uniquePaths is the solution
  var tempPath; //Path in progress
  var previousPosition = {0:0}; //initialize in upper left hand corner

  var paths = function(n, board, i, j){
    if(i ===n && j ===n){ //End case; the robot is in the lower right hand corner!
      uniquePaths.push(tempPath);
      return;
    }

    for(var i = 0; i < n; i++){
        for(var j = 0; j < n; j++){
          if(!visitedPositions[i]===j){ // that is, this location has not been visited
            var yDiff = previousPosition[i] - visitedPositions[i];
            var xDiff = Object.previousPosition.key - Object.visitedPositions.key; //syntax?

            //logic to push U, D, L, R based on change in position

            // Push U, D, L, R to tempPath

            //Recuse paths on next position?


          }




        }
    }



    }

  }

  return uniquePaths.length;
}



