$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();

    var numberToCheck = parseInt($("input#userNumberInput").val());

    //var result = numCheck(year);//GARBAGE

    var arrayFromNum = makeArray(numberToCheck);// send number to makeArray function

    var result = checkResult(arrayFromNum);

    $("#result").text(result);// OUTPUT TO USER
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

function checkResult(x)
{
  return x;
}
