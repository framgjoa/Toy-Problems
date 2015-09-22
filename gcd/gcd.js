function gcd(x, y){

  var min = Math.min(x, y)
  for(var i = min; i>0; i--){
    if((x % i ===0)&&(y % i ===0)){
        print("GCD: ", i, " for ", x, y);
        return i}
  }
  print("GCD: 1 for ", x, y);
  return 1;

}

gcd(180,24);
