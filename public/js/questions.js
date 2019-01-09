var newUser = [];
$('input:radio[name="appType"]').on("change", function (e) {
    $('input:radio[name="appType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("app-selected");
        } else {
            $(this).parent().removeClass("app-selected");
        }
    });
});
$("#add-build").on("click", function () {
    var appChoice = {
        appType: $('input:radio[name="appType"]:checked').val()
    }
    console.log(appChoice);
    newUser.push(appChoice);
});

$('input:radio[name="timeType"]').on("change", function (e) {
    $('input:radio[name="timeType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("time-selected");
        } else {
            $(this).parent().removeClass("time-selected");
        }
    });
});
$("#add-time").on("click", function () {
    var timeChoice = {
        codingTime: $('input:radio[name="timeType"]:checked').val()
    }
    console.log(timeChoice);
    newUser.push(timeChoice);
});

// $('input:checkbox[name="skillType"]').on("change", function (e) {
//     $('input:checkbox[name="skillType"]').each(function () {
//         if (this.checked) {
//             $(this).parent().addClass("skill-selected");
//         } else {
//             $(this).parent().removeClass("skill-selected");
//         }
//     });

//     var choices = {
//         skillName: $('input:checkbox[name="skillType"]:checked').val()
//     }
//     console.log(choices);
// });

$(".skill").on("click", function () {
    if ($(this).hasClass("skill-selected")) {
        $(this).removeClass("skill-selected");
    }
    else { 
        $(this).addClass("skill-selected");
    }
});

$("#add-current-skills").on ("click", function () {
    var userSkills = [];
    $.each($(".skill-selected"), function (i) {
        var skillName = $(this).attr("id");
        userSkills.push(skillName);
    });
    console.log(userSkills);
    var skillsTrue = "";
    for (var i=0; i < userSkills.length; i++) {
        switch (userSkills[i]) {
            case "html":
            skillsTrue += "{html: true}, ";
            break;
            case "css":
            skillsTrue += "{css: true}, ";
            break;
            case "javascript":
            skillsTrue += "{javascript: true}, ";
            break;
            case "jquery":
            skillsTrue += "{jquery: true}, ";
            break;
            case "node":
            skillsTrue += "{node: true}, ";
            break;
            case "express":
            skillsTrue += "{express: true}, ";
            break;
            case "react":
            skillsTrue += "{react: true}, ";
            break;
            case "handlebars":
            skillsTrue += "{handlebars: true}, ";
            break;
            case "mysql":
            skillsTrue += "{mysql: true}, ";
            break;
            case "mongodb":
            skillsTrue += "{mongodb: true}, ";
        }
    }
    console.log(skillsTrue);
    newUser.push(skillsTrue);
});


$('input:radio[name="ideaType"]').on("change", function (e) {
    $('input:radio[name="ideaType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("idea-selected");
        } else {
            $(this).parent().removeClass("idea-selected");
        }
    });
});
    $("#add-idea").on("click", function () {
    var ideaChoice = {
        concept: $('input:radio[name="ideaType"]:checked').val()
    }
    console.log(ideaChoice);
    newUser.push(ideaChoice);
});

$("#add-online-profiles").on("click", function(e) {
    e.preventDefault();
    var gitHub = $("#form-horizontal-text").val().trim()
    var linkedIn = $("#form-horizontal-text2").val().trim()
    var onlineProfiles = {
        github: gitHub,
        linkedin: linkedIn
    }
    console.log(gitHub);
    console.log(linkedIn)
    newUser.push(onlineProfiles);
  });

  $("#create-profile").on("click", function(e) {
    e.preventDefault();
    var userProfile = $("#about-you").val().trim()
    var aboutYou = {
        profile: aboutYou
    }
    console.log(userProfile);
    // shows up as undefined in console?
    // newUser.push(aboutYou);
    newUser.push(userProfile)
    console.log(newUser);
  });

  

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

$(`#add-build`).on("click", function () {
    var currentQuestion = document.getElementById("questionnaire-item-build");
    // var currentQuestion = $("#questionnaire-item-build");
    var nextQuestion = document.getElementById("questionnaire-item-time");
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
    console.log("you clicked next on " + currentQuestion.id);
});

$(`#add-time`).on("click", function() {
    var currentQuestion = document.getElementById("questionnaire-item-time");
    var nextQuestion = document.getElementById("questionnaire-item-current-skills");
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
    console.log("you clicked next on " + currentQuestion.id);
});

$(`#add-current-skills`).on("click", function() {
    var currentQuestion = document.getElementById("questionnaire-item-current-skills");
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