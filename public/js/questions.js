


// $("#app").on("click", function() {
//     var state = $(this).attr("data-state");
//     if (state === "notSelected") {
//       $(this).attr("data-state", "selected");
//       console.log("this changed to selected ")
//     } else {
//       $(this).attr("data-state", "notSelected");
//       console.log("this changed to notSelected")
//     }
//   });

//   $('#web').on("click", (function() {
//     var click = $(this);
//     $(this.toggleClass('selected'));
//     if($this.hasClass('selected')){
//         $this.text('See More');         
//     } else {
//         $this.text('See Less');
//     }
// });

$('input:radio[name="appType"]').on("change", function (e) {
    $('input:radio[name="appType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("selected");
        } else {
            $(this).parent().removeClass("selected");
        }
    });

    var choices = {
        appType: $('input:radio[name="appType"]:checked').val()
    }
    console.log(choices);
});



  // on submit of the form

  // everything with the class selected 

  // get the text from that item
