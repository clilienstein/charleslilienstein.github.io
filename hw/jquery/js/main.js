$(document).ready(function() {

  $("#button1").click(function() {
    $("#title").css("color", "red");
    $("#title").css("text-decoration", "line-through");
    $("p").css("font-size", "20px")
  });

  $("#button2").click(function() {
    $("#title").css("color", "black");
    $("#title").css("text-decoration", "underline");
    $("p").css("font-size", "20px")
  });

  $("#button3").click(function() {
    $("#artlist").hide();
  });

  $("#button4").click(function() {
    $("#artlist").show();
  });

  $("#title").click(function() {
    $("#title").html("Everything is Art");
  });

  $("#art1").mouseover(function() {
    $("#art1").css("width", "150%");
  });

  $("#art2").mouseover(function() {
    $("#art2").css("width", "150%");
  });

  $("#art3").mouseover(function() {
    $("#art3").css("width", "150%");
  });

  $("#art4").mouseover(function() {
    $("#art4").css("width", "150%");
  });

  $("#art5").mouseover(function() {
    $("#art5").css("width", "150%");
  });

});