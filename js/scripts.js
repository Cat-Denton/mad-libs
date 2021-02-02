$(document).ready(function() {
  $("#formOne").submit(function(event) {

    const classes = ["person1", "person2", "animal", "exclamation", "verb", "noun"]
    
    classes.forEach(function(element) {
      let input = $("input#" + element).val()
      $("." + element).text(input);
    });
    
    $("#story").show();

    event.preventDefault();
  });
});