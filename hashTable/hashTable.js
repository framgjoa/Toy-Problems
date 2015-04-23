/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(key, value){
    // Check the index (hashed) value of the key
    var tempIndex = getIndexBelowMaxForKey(key);
    if (!storage[tempIndex]){
         // If no collisions, insert
         var tempArray = new Array(key, value);
         storage[tempIndex].push(tempArray);
    }
    else{
    // If collision, make a bucket
    // Put existing values into bucket
      var tempBucket = storage[tempIndex];
      // Add new value to bucket
      var tempArray = new Array(key, value);
      tempBucket.push(tempArray);
      // Put bucket in previous location
      storage[tempIndex] = tempBucket;
    }
  };

  result.retrieve = function(key){
    // Find index of the key
    var tempIndex = getIndexBelowMaxForKey(key);
    // Return hashed index of that key
    return (storage[tempIndex]) ? (storage[tempIndex][key]) : undefined;

  };

  result.remove = function(key){
    // Find index of the key
    var tempIndex = getIndexBelowMaxForKey(key);
    // If the key value exists in the hash table, remove it and its value
    if (storage[tempIndex][key]){
      delete storage[tempIndex][key];
    }
  };
  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};



