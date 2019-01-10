// empty object that will be added to upon click event from sign-up then pushed to user table in db
var newUser = {};

// process for collecting info from 'questions.handlebars' user prompts 
// uses radio type to allow only 1 selection from 'appType' class
$('input:radio[name="appType"]').on("change", function (e) {
    $('input:radio[name="appType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("app-selected");
        } else {
            $(this).parent().removeClass("app-selected");
        }
    });
});

// grabs user selection for 'appType' and adds it to newUser object
$("#add-build").on("click", function () {
    newUser.appType = $('input:radio[name="appType"]:checked').val();
    showNextQuestion("questionnaire-item-build", "questionnaire-item-time")
});

// uses radio type to allow only 1 selection from 'timeType' class
$('input:radio[name="timeType"]').on("change", function (e) {
    $('input:radio[name="timeType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("time-selected");
        } else {
            $(this).parent().removeClass("time-selected");
        }
    });
});

// grabs user selection for 'timeType' and adds it to newUser object
$("#add-time").on("click", function () {
    newUser.codingTime = $('input:radio[name="timeType"]:checked').val();
    showNextQuestion("questionnaire-item-time", "questionnaire-item-current-skills")
});

// adds/removes class on skills choices ... no radio bc many can be selected
$(".skill").on("click", function () {
    if ($(this).hasClass("skill-selected")) {
        $(this).removeClass("skill-selected");
    }
    else {
        $(this).addClass("skill-selected");
    }
});

<<<<<<< HEAD

=======
>>>>>>> 3b377882d22fbd9494b6446dc4d1ffbe9a18e734
// empty object ready to record input from a user's skills responses
var newUserSkillsTrue = {};

// collects the skills with class 'skill-selected' and pushes them to newUserSkillsTrue array
$("#add-current-skills").on("click", function () {
    var userSkills = [];
    
    $.each($(".skill-selected"), function (i) {
        var skillName = $(this).attr("id");
        userSkills.push(skillName);
    });
    console.log(userSkills);
    for (var i = 0; i < userSkills.length; i++) {
        switch (userSkills[i]) {
            case "html":
                newUserSkillsTrue.html = true;
                break;
            case "css":
                newUserSkillsTrue.css = true;
                break;
            case "javascript":
                newUserSkillsTrue.javascript = true;
                break;
            case "jquery":
                newUserSkillsTrue.jquery = true;
                break;
            case "node":
                newUserSkillsTrue.node = true;
                break;
            case "express":
                newUserSkillsTrue.express = true;
                break;
            case "react":
                newUserSkillsTrue.react = true;
                break;
            case "handlebars":
                newUserSkillsTrue.handlebars = true;
                break;
            case "mysql":
                newUserSkillsTrue.mysql = true;
                break;
            case "mongodb":
                newUserSkillsTrue.mongodb = true;
        }
    }
    // POST request making newUserSkillsTrue object available to server API (apiRoutes.js)
    $.ajax({
        method: "POST",
        url: "/api/skill",
        data: newUserSkillsTrue,
    }).then(function (data) {
        console.log(data);
        // window.location.replace("/questions");
    })
        .catch(function (err) {
            console.log(err);
            alert(err.responseText);
        })
    showNextQuestion("questionnaire-item-current-skills", "questionnaire-item-idea")
});

// grabs user selection for 'ideaType' 
$('input:radio[name="ideaType"]').on("change", function (e) {
    $('input:radio[name="ideaType"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("idea-selected");
        } else {
            $(this).parent().removeClass("idea-selected");
        }
    });
});

// stores input from 'ideaType' to newUser object
$("#add-idea").on("click", function () {
    newUser.projectIdea = $('input:radio[name="ideaType"]:checked').val();
    showNextQuestion("questionnaire-item-idea", "questionnaire-item-online-profiles")
});

// collects inputs from user response to github and linkedin profile addresses and stores in newUser object
$("#add-online-profiles").on("click", function (e) {
    e.preventDefault();
    newUser.github = $("#form-horizontal-text").val().trim();
    newUser.linkedin = $("#form-horizontal-text2").val().trim();
    showNextQuestion("questionnaire-item-online-profiles", "questionnaire-item-about")
});

// final input from questions.handlebars - grabs what the user enters about themselves and stores it in the User table
// PUT request making the newUser object available to the server API (apiRoutes.js)
$("#create-profile").on("click", function (e) {
    e.preventDefault();
    newUser.profile = $("#about-you").val().trim()
    console.log(newUser);
    console.log(newUserSkillsTrue);
    $.ajax({
        method: "PUT",
        url: "/api/user",
        data: newUser
    })
        .then(function (data) {
            console.log(data);
            window.location.replace("/profile");
        })
        .catch(function (err) {
            console.log(err);
            alert(err.responseText);
        });
});
// the following function controls the ui view of question.handlebars data ... it makes an effective 'carousel' when the submit button of each section is clicked
// jquery selectors are not working here to select the element so using vanilla js - don't know issue

function showNextQuestion(qItem, nextQItem) {
    var currentQuestion = document.getElementById(qItem);
    var nextQuestion = document.getElementById(nextQItem);
    console.log(currentQuestion.id + " " + nextQuestion.id);
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
};