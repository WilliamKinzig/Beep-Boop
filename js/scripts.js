$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();

    var year = parseInt($("input#userNumberInput").val());

    //var result = numCheck(year);//GARBAGE

    var output = makeArray(year);// send number to makeArray function

    $("#result").text(output);// OUTPUT TO USER
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
