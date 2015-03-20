/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange){   //We'd like to assume the obj have no null/undefined k:v

  for (var key in apple){
    if (orange.hasOwnProperty(key)){//if the keys of apple match the keys in orange, continue in
       if( typeof(apple[key]) === "object" ){ //but if there's the case the value is also an object, recurse in there
                                   //also check their values match
                                    //but if there's the case the value is also an object, recurse in there
                                    //Will also have object and array cases

         if(Array.prototype.isArray( apple[key])){ //Array case   this code isn't working
           print("Array found");
           for(var i = 0; i<apple[key].length; i++){
              if(typeof(apple[key][i] ==="object")){//may need to add check here if the array contains objects...
                print("object found");
                deepEquals(apple[key][i], orange[key][i]);
              }else{
                return apple[key][i]=== orange[key][i] ? true: false;
              }
          }
        }else{                        //Object case (or odd nulls/undefined)
          print("Internal Object found");
          deepEquals(apple[key], orange[key]);
        }

       }else{                     //simple object values, can directly check if equal
        print("simple object case passing");
        return apple[key]===orange[key] ? true: false;
       }


    }else{                      //keys don't match, these objects cannot match
    print("Keys don't match");
    return false;
    }

  }


};  //syntax clean, tested, passing if keys match ONLY, not checking if values match
    //Array cases stuck on array check


var obj1 = {a:1, b: {c:3} } ;
var obj2 = {a:1, b: {c:3}} ;
var obj3= {a:1, b: {c:5}} ;
var obj4 = {a:1, b: {c:6}}; // false
var obj5 = {z: 6};
var obj6= {a: [1]};
var obj7 = {a:[1]};

//deepEquals(obj6, obj7);
