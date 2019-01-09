


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

$('input:radio[name="timeType"]').on("change", function (e) {
    $('input:radio[name="timeType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("selected");
        } else {
            $(this).parent().removeClass("selected");
        }
    });

    var choices = {
        timeType: $('input:radio[name="timeType"]:checked').val()
    }
    console.log(choices);
});

$('input:checkbox[name="skillType"]').on("change", function (e) {
    $('input:checkbox[name="skillType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("selected");
        } else {
            $(this).parent().removeClass("selected");
        }
    });

    var choices = {
        timeType: $('input:checkbox[name="skillType"]:checked').val()
    }
    console.log(choices);
});

$('input:radio[name="ideaType"]').on("change", function (e) {
    $('input:radio[name="ideaType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("selected");
        } else {
            $(this).parent().removeClass("selected");
        }
    });

    var choices = {
        ideaType: $('input:radio[name="ideaType"]:checked').val()
    }
    console.log(choices);
});

$("#social-link").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      method: "GET",
      url: "/api/questio",
      data: {
        gitHub: $("#form-horizontal-text")
          .val()
          .trim(),
        linkedIn: $("#form-horizontal-text2")
          .val()
          .trim(),
      }
    })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(err) {
        console.log(err);
        alert(err.responseText);
      });
  });

  // on submit of the form

  // everything with the class selected 

  // get the text from that item
