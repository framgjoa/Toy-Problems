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

  result.insert = function(key, value){

    // Check the index (hashed) value of the key
    var tempIndex = getIndexBelowMaxForKey(key, storageLimit);
    print("tempIndex if ", tempIndex);
    if (!storage[tempIndex]){
         // If no collisions, insert
         var tempArray = [];
         tempArray.push(key);
         tempArray.push(value);
         print("here");
         storage[tempIndex].push(tempArray);
         size++;
         this.resize(size, storageLimit);
         print("Inserted, current size ", this.size, " storage limit : ", this.storageLimit);
    }
    else{
      // If collision, make a bucket
      // Put existing values into bucket
      print("tempIndex else ", tempIndex);
      var tempBucket = storage[tempIndex];
      // Add new value to bucket
      var tempArray = new Array(key, value);
      tempBucket.push(tempArray);
      // Put bucket in same spot
      storage[tempIndex] = tempBucket;
      size++;
      this.resize(size, storageLimit);
      print("Inserted, current size ", this.size, " storage limit : ", this.storageLimit);
    }
  };

  result.retrieve = function(key){
   // No resizing checks necessary
   // Find index of the key
   print("Retrieving! ", key)
    var tempIndex = getIndexBelowMaxForKey(key);
    return (storage[tempIndex]) ? (storage[tempIndex][key]) : undefined;

  };

  result.resize = function(size, storageLimit){
    print("Resizing!");
    if(size/storageLimit >= 0.75){
        this.storageLimit = storageLimit*2;
        print("Now bigger! Now: ", this.storageLimit);
    }else if(size/storageLimit <= 0.25){
      this.storageLimit = storageLimit/2;
      print("Now smaller! Now: ", this.storageLimit);
    }
  };

  result.remove = function(key){
    var tempIndex = getIndexBelowMaxForKey(key);
    if (storage[tempIndex][key]){
      delete storage[tempIndex][key];
      size--;
      this.resize(size, storageLimit);
      print("Removed, current size ", this.size, " storage limit : ", this.storageLimit);
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

