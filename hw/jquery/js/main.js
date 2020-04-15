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

  $("art1").mouseover(function() {
    $("art-1").css("width", "150%");
  });





  // // trying to make the img bigger when mouseover
  // $("title1").mouseover(function() {
  //     $("title1").css(");
  //     });



  // $("title1").mouseover(function() {
  //   $("title1").css("transform", "scale(1.1, 1.1)");
  // }, function() {
  //   $(this).css("transform", "none");
  // });


  // EVERYTHING BELOW IS FROM CLASS
  // let titleClciked = false;
  // $("title").click(function() {
  //   if (titleClicked = false) {
  //
  //     $("title").html("<em>Art</em> In My House");
  //
  //     titleClicked = true;
  //   } else if (titleClicked = true) {
  //
  //     $("title").html("<em>Art</em> In My House");
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