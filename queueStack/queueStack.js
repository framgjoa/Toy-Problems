/**
 * Write a stack using your preferred instantiation pattern. Once you're done,
 * implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  this.storage = {};    //because using an array would be too easy
  this.counter = 0;
  // add an item to the top of the stack
  this.push = function(value){
    this.storage[this.counter] = value;
    this.counter++;
  };

  // remove an item from the top of the stack
  this.pop = function(){
    if(this.counter){     //Need to verify something is in the stack before popping it
      this.counter--;     //decriment since already incremented after each push
      var tempItem = this.storage[this.counter];
      delete this.storage[this.counter];
      return tempItem;
    }
    else{
      return "Do not pop the un-pop'able!"   //Yeah, that's my error throw
    }
  };

  // return the number of items in the stack
  this.size = function(){
    return this.counter;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(task){
    return inbox.push(task);
  };

  // called to remove an item from the `queue`
  this.dequeue = function(){
    return outbox.push(inbox.pop());
  };

  // should return the number of items in the queue
  this.size = function(){
    return inbox.size;
  };
};


// Basic Stack testing  //Tested, works
// var test = new Stack();
// test.push("Stuff");
// test.push("Kitties");
// print( test.size() );
// print( test.pop() );
// print( test.pop() );
// print( test.pop() );

// Basic Queue testing  //Not working, need to extend Stack class?
var test = new Queue();
print(test.enqueue("Sparkles"));
print(test.enqueue("Fuzzies"));
print( test.size());
// print( test.dequeue());
// print(test.size);
// print(test.dequeue());
// print(test.dequeue());


