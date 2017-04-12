$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var input = $("input#input").val();
    var re = /a{1,3}/i;

    var result = input.match(re);
    console.log(result);

    $("#result").text(result);
    event.preventDefault();
  });
});
