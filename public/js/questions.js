


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

$(`#add-build`).on("click", function () {
    var currentQuestion = document.getElementById("questionnaire-item-build");
    var nextQuestion = document.getElementById("questionnaire-item-time");
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
    console.log("you clicked next on " + currentQuestion.id);
});

  // on submit of the form

  // everything with the class selected 

  // get the text from that item

// The following function doesn't work and I can't figure out why - returns error saying the variables are null
// also jquery selectors are not working to select the element so using vanilla js - don't know issue

// function showNextQuestion(qItem, nextQItem) {
//     var currentQuestion = document.getElementById("#questionnaire-item-" + qItem);
//     var nextQuestion = document.getElementById("#questionnaire-item-" + nextQItem);
//     console.log(currentQuestion.id + " " + nextQuestion.id);
//     currentQuestion.style.display = "none";
//     nextQuestion.style.display = "block";
// };

// $(`#add-time`).on("click", function() {
//     showNextQuestion("time", "current-skills")
//     console.log("you clicked next on " + currentQuestion.id);
// });

$(`#add-time`).on("click", function() {
    var currentQuestion = document.getElementById("questionnaire-item-time");
    var nextQuestion = document.getElementById("questionnaire-item-current-skills");
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
    console.log("you clicked next on " + currentQuestion.id);
});

$(`#add-current-skills`).on("click", function() {
    var currentQuestion = document.getElementById("questionnaire-item-current-skills");
    var nextQuestion = document.getElementById("questionnaire-item-learn-skills");
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
    console.log("you clicked next on " + currentQuestion.id);
});

$(`#add-learn-skills`).on("click", function() {
    var currentQuestion = document.getElementById("questionnaire-item-learn-skills");
    var nextQuestion = document.getElementById("questionnaire-item-idea");
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
    console.log("you clicked next on " + currentQuestion.id);
});

$(`#add-idea`).on("click", function() {
    var currentQuestion = document.getElementById("questionnaire-item-idea");
    var nextQuestion = document.getElementById("questionnaire-item-online-profiles");
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
    console.log("you clicked next on " + currentQuestion.id);
});

$(`#add-online-profiles`).on("click", function() {
    var currentQuestion = document.getElementById("questionnaire-item-online-profiles");
    var nextQuestion = document.getElementById("questionnaire-item-about");
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
    console.log("you clicked next on " + currentQuestion.id);
});

$(`#create-profile`).on("click", function() {
    // post all of the user data collected through this form to an api route
    // and update the database with this info
});




