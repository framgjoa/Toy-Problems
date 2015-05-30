/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value){
  return { value: value, next: null };
}

var hasCycle = function(linkedList){
  // TODO: implement me!
  var vistedNodes = {};

  var stepThru = function(linkedList){
    //print("Stepping thru...")
    while(linkedList.value && linkedList.next){
      print("Stepping at ", linkedList.value);
      //Need a break case to identify cycle
      if(!vistedNodes[linkedList.value] && linkedList.next ===null){
        print("End of linked list, no cycles found");
        return false;
      }
      else if (vistedNodes[linkedList.value]){
        print("Linked list has a cycle of ", vistedNodes);
        return true;
      } else if(linkedList.next){
        vistedNodes[linkedList.value] = true;
        stepThru(linkedList.next);
      }
      // else{
      //   vistedNodes[linkedList.value] = true;
      //   print("End of linked list, no cycles found");
      //   return false;
      // }
    }
     vistedNodes[linkedList.value] = true;
        print("End of linked list, no cycles found");
        return false;
  }

  stepThru(linkedList);
  print("No cycles found on linkedList");
  return false;
};



//Example code:
  var nodeA = Node('A');
  var nodeB = nodeA.next = Node('B');
  var nodeC = nodeB.next = Node('C');
  var nodeD = nodeC.next = Node('D');
  var nodeE = nodeD.next = Node('E');
  hasCycle(nodeA); // => false
  // nodeE.next = nodeB;
  // hasCycle(nodeA); // => true


  //Solution code notes
  /*
  Have two pointers pointing to difference places in the linked list
  If the pointers point to same node, indication of a cycle
  next = null may never occur when have a cycle
  pointer move at twice the speed
  var fast = linkedList;
  var slow = linkedList;
  var pause = true;

  while(fast = fast.next){ //While is assigning new values, using the new value for truth test
    if (fast ===slow) {return true;} //base case, indicates there is a cycle, should exit
    if (!pause) {slow = slow.next;}
    pause = !pause;
  }
  return false;

  */


