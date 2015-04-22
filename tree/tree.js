/* Implement a tree using prototypal instantiation.
Your tree should have methods named "addChild" and "contains".
*/

// EXAMPLE USAGE:
// var tree = treeMaker();
// tree.addChild(1);
// tree.addChild(2);
// tree.contains(2);   // yields 'true'

var treeMaker = function(value){
  //tree code goes here!
  var tree = Object.create(treeMethods);
  this.children = [];
  //Children will keys and their children will be values
  return tree;
};

treeMaker.methods = {
  addChild: function(leaf, child){
    if(this.children[leaf]){
      //temporarily store it, then add all children back
      var tempChildren = this.child[leaf];
      tempChildren.push(child);
      this.children[leaf] = tempChildren;
    }else{ //no previous children case
    this.children[leaf] = child;
  }
  },

  contains: function(value){
    for(var i = 0; i< this.children.length; i++){
      var recurse = function(array){

        if (this.children[i]=== value){
          return true;
        }else if (this.children[i].typeof === Object){
          //Case looking at children arrays
          recurse(this.children[i].children);
        }else{
          return false;
        }
      }
    }
    recurse(this.children);
    }
  }

}; //not tested, unsure if working




