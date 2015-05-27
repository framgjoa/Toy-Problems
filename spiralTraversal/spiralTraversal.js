/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
  var colLength = matrix.length;
  var rowLength = matrix[0].length;
  // Can know how far spiraled in based on length of results
  // Final results will be done when results.length = colLength * rowLength
  var results = [];
  // We can know "where" we are in the spiral based on length of results, too
  // [1, 2, 3, 6, 9, 8, 7, 4, 5]
  // firstRow (rowLength) -> last col (colLength -1) -> last row (rowLength-1) ->
  // inside col (col -1) -> inside row(rowlength-2)
  // Elements per direction: 3, 2, 2, 2, 1
  // Directions:             R, D, L, U, R

  // A 2x2 would be: 2, 1, 1
  // A 4x4 would be: 4, 3, 3, 2, 2, 2, 2
  // A 5x5 would be: 5, 4, 4, 3, 3, 2, 2, 2


  var matrixSpiral = function(matrix, startCol, startRow, direction){

  };

  var goRight = function(matrix, startCol, startRow){};
  var goLeft = function(matrix, startCol, startRow){};
  var goDown = function(matrix, startCol, startRow){};
  var goUp = function(matrix, startCol, startRow){};



};
