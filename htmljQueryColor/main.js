$(function(){
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!
  var taggedText = [];

  //search document for <p> tags
  //Split every word into an array
  debugger;
  var pWords = $('p').text().split(" ") //array of words. //this array is empty spaces
  //Not super-elegant, splitting at " " so punctuation will be wrapped too
  //attach span tags to every item of array, push into new text
  for (var i = 0; i<pWords.length; i++){
    var tempWord = "<span>" + pWords[i] +"</span>";  //makes ugly text-only, need span as html. chain jQuery!
    console.log(tempWord);
    //debugger;
    taggedText.push(tempWord);  //this stepnot working?
    taggedText.join(" ");

  }


  $('p').text(taggedText); //inject the span-tagged words back into the paragraph

  //console.log(taggedText);




  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
var colors = ["red", "orange","yellow","green","blue","purple"];
var colorIndex = Math.floor(Math.random() * colors.length);

setInterval( function(){
  $("<span>").css("color", colors[colorIndex])
}, 1000);


});
