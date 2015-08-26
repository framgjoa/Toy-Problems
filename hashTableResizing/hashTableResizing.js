/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

var makeHashTable = function(){
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;

  function resize(newSize){
     print("Inside resize storage ", storage, "for ", newSize);
     var copy = storage;
     storageLimit = newSize;
     storage = [];
     size = 0;
     copy.forEach(function(pairs) {
       pairs.forEach(function(pair){
         result.insert(pair[0], pair[1]);
      });
    });
     print("Result after resizing", result);
  }


//*************************//

  result.insert = function(key, value){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    print("Inserting ", pairs);

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
      print("No need to resize after insert")
    }
    if(size >= storageLimit * 0.75){
      // increase the size of the hash table
      print("Resizing bigger");
      resize(storageLimit * 2);
    }
  };

  result.resize = function(newSize, storageLimit){
    var copy = this.storage;
    storageLimit = newSize;
    storage = [];
    size = 0;

    copy.forEach(function(pairs){
      pairs.forEach(function(pair){
        this.insert(pair[0], pair[1]);
      })

    })
  };

  result.remove = function(key){
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;
    print("Removing ", key);
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        print("No need to resize after remove");
        if(size <= storageLimit * 0.25){
          // decrease the size of the hash table
          print("Resizing smaller")
          resize(storageLimit / 2);
        }
        return value;
      }
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


//basic testing
var test = makeHashTable();
test.insert("foo", "bar");
test.insert("more", "stuff");
test.insert("ug", "blah");
test.insert("Saturday", "morning");
test.insert("You", "know nothing, Jon Snow");
test.remove("foo");
test.remove("more");
test.remove("ug");
test.remove("You");

