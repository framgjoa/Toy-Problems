/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */
// events = {'click': [function1, function2]};


var mixEvents = function(obj) {
  // TODO: Your code here
  var storage = {};

  obj.trigger = function(event){
    // If exists in storage, nothing. Otherwise, call it
    // Check number of arguments, since can have multiple arguments


    //callback.apply(objs,args)
  };

  obj.on = function(event, callback){
    //
    // storage[event] = storage[event] || [];
    // storage[event].push(callback)

  };

  return obj;
};
