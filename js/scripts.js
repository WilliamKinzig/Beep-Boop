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

// function checkResult(arrayIn)
// {
//   for(var index = 0; index < arrayIn.length; index += 1){
//
//
//     var cond_0 = "Beep!"
//     if (arrayIn[index] === 0){
//       arrayIn = [];
//       arrayIn.push(cond_0)
//       return arrayIn;
//     }
//   }
// }


function checkResult(x)
{
  var stringOutput = "";
  for(var i=0; i<x.length; i++)
  {
    if(x[i] == 0){
      stringOutput = "jfsalk;";
      return stringOutput;
    }
  }
  return false;
}
