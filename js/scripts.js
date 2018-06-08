$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();

    var numberToCheck = parseInt($("input#userNumberInput").val());

    //var result = numCheck(year);//GARBAGE

    var arrayFromNum = makeArray(numberToCheck);// send number to makeArray function

    var resultArray = checkResult(arrayFromNum);

    var resultToString = resultArray.toString();

    $("#result").text(resultToString);// OUTPUT TO USER
  });
});


//GARBAGE
// function numCheck(numberFromUser)
// {
//     return numberFromUser;
// }


function makeArray(x)
{
  arrayOut = x.toString().split('');
  return arrayOut;
}

function checkResult(arrayIn)
{
  for(var index = 0; index < arrayIn.length; index += 1){

    var cond_0 = "Beep!"
    if (arrayIn[index] === 0){
      arrayIn = [];
      arrayIn.push(cond_0)
      return arrayIn;
    }
  }
}



// function checkResult(x)
// {
//   var count = 0;
//   for(var i=0; i<x.length; i++)
//   {
//     if
//     count += 1;
//   }
//   return count;
// }
