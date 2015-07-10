'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a separate callback and invokes that callback when complete.
 *
 * The callback passed to asyncMap is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 */

var asyncMap = function(tasks, callback){
  //cb will be updated by each task
//tasks is an array of functions. Do them in order. Wait until each done before next
  var resultsArray = [];
  var resultsCount = 0;

  for(var i = 0; i < tasks.length; i++){
    //using IIE since do not need to re-use
    (function (i) {
      tasks[i](function (val) {
        resultsArray[i] = val;
        resultsCount++;
        if(resultsCount === tasks.length){
          callback(resultsArray);
        }
      });
    })(i);
  }
};

  //sample functions
  asyncMap([
   function(cb){
     setTimeout(function(){
       cb('one');
     }, 200);
   },
   function(cb){
     setTimeout(function(){
       cb('two');
     }, 100);
   }
  ],
   function(results){
     // the results array will equal ['one','two'] even though
     // the second function had a shorter timeout.
     print(results); // ['one', 'two']
  });

