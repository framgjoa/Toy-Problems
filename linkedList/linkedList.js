/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail.value;   //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.tail = null;
  this.head = null;
  this.nodeStorage = {};
};


// Nodes will be key:values
// storage = val5: { value: 5, next: 3, previous: 2}, nodeValue2: {next:1, previous:4}
// okay I changed this format a few times, (realized needed node.value)
// so some refactoring may have gotten lost

// Realized halfway through I'm solving doubly-linked list. overkill.

LinkedList.prototype.addToTail = function(nodeValue){
  // Trivial case: if there is nothing in LinkedList yet
  if(!this.tail){
    this.tail = nodeValue;
    this.head = nodeValue;
    this.nodeStorage[nodeValue] = {value: nodeValue, next: null, previous: null};
  }else{
    // Linked List already exists and has a tail, add to it
    var tempTail = this.tail;
    // Update the previous tail with the new tail info
    this.nodeStorage[tempTail].next = nodeValue;
    // Add the new tail into its rightful place
    this.tail = nodeValue;
    // Create it in the storage object
    this.nodeStorage[nodeValue] = {value: nodeValue, previous: tempTail, next: null};
  }

};

LinkedList.prototype.removeHead = function(){
  //check if there's enough nodes in LinkedList to remove head
  if(!this.head){
    return;
  } else{
    // May need to check if tail === head?
      if(this.head[next]){
        //temporarily store next in line
        var tempHead = this.head[next];
        // Update head links, which puts new head in rightful Aragorn place
        this.head = tempHead;
        tempHead[previous] = null;
        // Delete old usurper head from nodeStorage
        delete this.nodeStorage[this.head];
        }else{ // Non-trival, but single node case, which is both head and tail
          // Just delete it
          this.head = null;
          this.tail = null;
          delete this.nodeStorage[this.head]; //should be equivalent if this.tail
          // Should now be an empty linked list
        }

  }
};

LinkedList.prototype.contains = function(testNode){
  for(var nodes in this.nodeStorage){ //nodes is the value of the node itself
    return nodes[value] === testNode)? true: false;
  }

};

LinkedList.prototype.makeNode = function(nodeValue, next, previous){
  // Think this is making a node in the middle of the linked list
  // Find Previous (if exists), update its links
  if(this.nodeStorage[previous]){
    this.nodeStorage[previous].next = nodeValue;
  }else{
    // ?? Make it? throw err?
  }
  // Find Next (if exists), update its links
  if(this.nodeStorage[next]){
    this.nodeStorage[next].previous = nodeValue;
  }else{
    // ?? Make it? throw err? easier than missing a previous, many tailed linked list?
  }
  // Insert new Node into storage
  this.nodeStorage[nodeValue] = {value: nodeValue, previous: previous, next: next};
};

var list = new LinkedList(); //nothing tested
