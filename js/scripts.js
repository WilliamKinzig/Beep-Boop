$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#userNumberInput").val());
    var result = numCheck(year);
    $("#result").text(result);
  });
});

function numCheck(numberFromUser)
{
    return "bodfsjao";
}
