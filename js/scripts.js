$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#userNumberInput").val());
    var result = year;
    $("#result").text(result);
  });
});
