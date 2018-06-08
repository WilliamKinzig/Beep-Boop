$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();

    var numberToCheck = parseInt($("input#userNumberInput").val());

    var arrayFromNum = makeArray(numberToCheck);// send number to makeArray function

    var resultArray = checkResult(arrayFromNum);

    //var resultToString = resultArray;

    $("#result").text(resultArray);// OUTPUT TO USER
  });
});


function makeArray(x)
{
  arrayOut = x.toString().split('');
  return arrayOut;
}


function checkResult(x)
{
  var stringOutput = "";
  var a = x;
  for(var i=0; i<x.length; i++)
  {
    if(x[i] == 3){
      a = ["I'm sorry, Dave. I'm afraid I can't do that."];
      return a;
    }

    if(x[i] == 1){
      a = ["Boop!"];
      return a;
    }

    if(x[i] == 0){
      a = ["Beep!"];
      return a;
    }
  }

  a = x.join("");

  var rangeArray = [];
  for (var i=0; i<=a; i++){
    rangeArray.push(i);
  }

  return rangeArray;
}
