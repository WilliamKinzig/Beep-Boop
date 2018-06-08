$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();

    var numberToCheck = parseInt($("input#userNumberInput").val());
    var arrayFromNum = makeArray(numberToCheck);// send number to makeArray function
    var resultArray = checkResult(arrayFromNum);// send array to check specs

    $("#result").text(resultArray);// OUTPUT TO USER
  });
});

function makeArray(x)//make an array out of the user input number
{
  arrayOut = x.toString().split('');
  return arrayOut;
}

function checkResult(x)//compare specs
{
  var a = x; // new array to play with and modify
  for(var i=0; i<x.length; i++) // loop through input array
  {
    if(x[i] == 3){//check for a 3
      a = ["I'm sorry, Dave. I'm afraid I can't do that."];
      return a;
    }

    if(x[i] == 1){//check for a 1
      a = ["Boop!"];
      return a;
    }

    if(x[i] == 0){//check for a 0
      a = ["Beep!"];
      return a;
    }
  }

  a = x.join("");// join elements into a single number
  var rangeArray = [];//create empty array to store a range of nums (0-userNumber)
  for (var i=0; i<=a; i++){//loop the amount of time given by user input
    rangeArray.push(i);//add current count/index number in the end of the array
  }
  return rangeArray;
}
