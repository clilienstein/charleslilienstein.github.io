  $(document).ready(function() {
    //all js goes in here
    console.log("we loaded")

    $("#button1").click(function() {
      // code that runs when you click on the part of the page that has id=#button1
      $("#title").css("color", "#f9432a");
      $("#title").css("font-size", "500px");
      $("#title").addClass("big-text");
      console.log("this ran");
    });

    $("title1").mouseover(function() {
      $("title1").css("font-size", "21px")
    });

    // $("p").mouseleave(function() {
    //   $("p").css("background-color", "yellow");
    //   $("p").css("font-size", "16px");
    // });
    // $("#title").css("font-size", "200px")
    // $("#title").html("More information #1")


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

    ?
  });