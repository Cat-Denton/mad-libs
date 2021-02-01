$(document).ready(function() {
  $("#formOne").submit(function(event) {

    const inputs = [$("input#person1").val(), $("input#person2").val(), $("input#animal").val(), $("input#exclamation").val(), $("input#verb").val(), $("input#noun").val()]

    const classes = [".person1", ".person2", ".animal", ".exclamation", ".verb", ".noun"]

    let iterator = 0;

    inputs.forEach(function(element) {
      $(classes[iterator]).text(element);
      iterator += 1;
    });
    
    $("#story").show();

    event.preventDefault();
  });
});