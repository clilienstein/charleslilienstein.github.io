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

  $("title1").mouseover(function() {
    $("title1").css("width", "100px");
  });



  // let titleClciked = false;
  // $("title").click(function() {
  //   if (titleClicked = false) {
  //
  //     $("title").html("Dope <em>Art</em> In My House");
  //
  //     titleClicked = true;
  //   } else if (titleClicked = true) {
  //
  //     $("title").html("Dope <em>Art</em> In My House");
  //
  //     titleClicked = false;
  //   }
  //
  //   // $("#title").click(function() {
  //   //   $("#title").html("<em>Art</em> In My House");
  //   // });
  //   $("body").css("background-color", "#____");
  //   $("html").css("font-family", "Lacquer, cursive");
  //

});