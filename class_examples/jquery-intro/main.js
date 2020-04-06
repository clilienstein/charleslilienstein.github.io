  $(document).ready(function() {
    //all js goes in here
    console.log("we loaded")

    $("#button1").click(function() {
      // code that runs when you click on the part of the page that has id=#button1
      // $("#title").css("color", "#f9432a");
      // $("#title").css("font-size", "500px")
      $("#title").addClass("big-text");
    });

    $("#button2").click(function() {
      // stuff we put here will happen when you click button2.
      $("#title").removeClass("big-text");
    })

    $("p").mouseover(function() {
      $("p").css("font-size", "21px")
    });

    $("p").mouseleave(function() {
      $("p").css("background-color", "yellow");
      $("p").css("font-size", "16px");
    });
    // $("#title").css("font-size", "200px")
    // $("#title").html("More information #1")
  });