
/**
  * Implement the `countLeaves` function in this Tree class.
  *
  * A leaf node is any node in the tree that has no children. `countLeaves` should
  * traverse the tree, and return the number of leaf nodes the tree contains.
  *
  * Illustration of a tree with three leaves:
  *
  *       * <- root
  *      / \
  *     *    * <- leaf
  *    / \
  *   *   * <- leaf
  *  /
  * * <- leaf
  *
  * Example usage:
  *   var root = new Tree();
  *   root.countLeaves(); // 1
  *   root.addChild(new Tree());
  *   root.countLeaves(); // still 1
  *   root.addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].addChild(new Tree());
  *   root.children[0].children[0].addChild(new Tree());
  *   root.countLeaves(); // 3
  *
  */

/*
 * Basic tree that stores a value.
 */

var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.countLeaves = function () {
  var leafCount = 0;
  var findLeaves = function(tree){

    if(tree.children.length ===0 ){
      leafCount++;
      //print("Value ", tree.value, "has no children. Leaf counter increased to: ", leafCount);
      //Need to step back up the tree? nope
    }else{
      //At least one child
      //print("Tree's children: ", tree.children, " and length ", tree.children.length);
      for(var i = 0; i < tree.children.length; i++){
       //print("At value ", tree.value ,", Moving to child ", tree.children[i]);
       // All children are created as new Trees themselves, so can call function on them as trees
       findLeaves( tree.children[i] );
      }

    }

  }
  findLeaves(this);
  //print("Final leaf count ", leafCount);
  return leafCount;
} //working, tested for basic tree, multiple leaves, multiple children

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};


//Basic testing
/*
var testTree = new Tree(1);
testTree.addChild(2);
testTree.addChild(3);
testTree.children[0].addChild(4);
testTree.children[0].addChild(5);
testTree.children[0].addChild(6);
testTree.countLeaves();
*/
