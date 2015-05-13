/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in
general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
1 euro (100p)
2 euro (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var changeUK = {
  "1p": 1,
  "2p": 2,
  "5p": 5,
  "10p": 10,
  "20p": 20,
  "50p": 50,
  "euro": 100
};

var makeChange = function(total){ //total is a value in whole pence
  var results = [];
  var tempChange = [];
  var runningRemainder = total;
  var orderedCoins = ["euro", "50p", "20p", "10p", "5p", "2p", "1p"];

// Finds first, naive solution. Doesn't repeat coins (ie 4 = 2+2)


    while (runningRemainder>0){
      for(var i =0; i<orderedCoins.length; i++){
        //print("Tring to fit ", orderedCoins[i], " into change for ", runningRemainder);
        if(runningRemainder - changeUK[orderedCoins[i]] >=0){
          //print("Change can be made: ", runningRemainder, " - ", changeUK[orderedCoins[i]])
          tempChange.push(orderedCoins[i]);
          runningRemainder = runningRemainder- changeUK[orderedCoins[i]];
          //print("Added changed ", orderedCoins[i], " remaing change to give out: ", runningRemainder);
        }


    }
    //print("Change: " , tempChange)
    results.push(tempChange);
  }

  // Start next tempChange solution by skipping past first element in last array solution
  // (ie if largest coin denomination that fit into last example was 5, skip that)

};

makeChange(4);


