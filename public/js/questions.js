$("#app").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "notSelected") {
      $(this).attr("data-state", "selected");
      console.log("this changed to selected ")
    } else {
      $(this).attr("data-state", "notSelected");
      console.log("this changed to notSelected")
    }
  });

  $("#web").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "notSelected") {
      $(this).attr("data-state", "selected");
      console.log("this changed to selected ")
    } else {
      $(this).attr("data-state", "notSelected");
      console.log("this changed to notSelected")
    }
  });