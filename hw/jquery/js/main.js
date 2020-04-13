$(document).ready(function() {
      console.log("page laoded");

      let titleClciked = false;
      $("title").click(function() {
        if (titleClicked = false) {

          $("title").html("Dope <em>Art</em> In My House");

          titleClicked = true;
        } else if (titleClicked = true) {

          $("title").html("Dope <em>Art</em> In My House");

          titleClicked = false;
        }

        // $("#title").click(function() {
        //   $("#title").html("<em>Art</em> In My House");
        // });
        $("body").css("background-color", "#____");
        $("html").css("font-family", "Lacquer, cursive");


      });