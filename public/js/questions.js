// empty object that will be added to upon click events from sign-up and here then pushed to user table in db
var newUser = {};

// process for collecting info from 'questions.handlebars' user prompts 
// uses radio type to allow only 1 selection from 'userLevel' class
$('input:radio[name="userLevel"]').on("change", function (e) {
    $('input:radio[name="userLevel"]').each(function () {
        if (this.checked) {
            $(this).parent().addClass("app-selected");
        } else {
            $(this).parent().removeClass("app-selected");
        }
    });
});


// grabs user selection for 'userLevel' and adds it to newUser object
$("#add-level").on("click", function () {
    newUser.userLevel = $('input:radio[name="userLevel"]:checked').val();
    modalAndNextScreen("userLevel", "questionnaire-item-level", "questionnaire-item-time");
});

//back button to previous question section
$("#back-level").on("click", function (e) {
    e.preventDefault();
    console.log("back button clicked at back-level")
    window.location.replace("/");
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
// if no selection, show modal, if selection, progress forward
$("#add-time").on("click", function () {
    newUser.codingTime = $('input:radio[name="timeType"]:checked').val();
    // showNextQuestion("questionnaire-item-time", "questionnaire-item-current-skills")
    modalAndNextScreen("codingTime", "questionnaire-item-time", "questionnaire-item-current-skills");
});

// takes users back to how much time they can spend
$("#back-from-time").on("click", function () {
   showPreviousQuestion("questionnaire-item-time","questionnaire-item-level");
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


// empty object ready to record input from a user's skills responses
var newUserSkillsTrue = {};

// empty array for user's chosen skills
var userSkills = [];

// collects the skills with class 'skill-selected' and pushes them to newUserSkillsTrue array
$("#add-current-skills").on("click", function () {
    userSkills = [];
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
    }).catch(function (err) {
        console.log(err);
        alert(err.responseText);
    })
    // showNextQuestion("questionnaire-item-current-skills", "questionnaire-item-idea")
    if (userSkills.length === 0) {
        var modal = UIkit.modal("#modal-no-response");
        modal.show();
    } else {
        showNextQuestion("questionnaire-item-current-skills", "questionnaire-item-idea");
    }
});

//back button to previous question section
$("#back-from-skills").on("click", function () {
    showPreviousQuestion("questionnaire-item-current-skills", "questionnaire-item-time");
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
    // showNextQuestion("questionnaire-item-idea", "questionnaire-item-online-profiles")
    modalAndNextScreen("projectIdea", "questionnaire-item-idea", "questionnaire-item-online-profiles");
});

//back button to previous question section
$("#back-from-idea").on("click", function () {
    showPreviousQuestion("questionnaire-item-idea", "questionnaire-item-current-skills");
       // ajax call to prevent duplicate entries into Skills table
       $.ajax({
        method: "DELETE",
        url: "/api/skill",
    }) .then (function (data){
        console.log(data)
    })
 });

// collects inputs from user response to github and linkedin profile addresses and stores in newUser object
$("#add-online-profiles").on("click", function (e) {
    e.preventDefault();
    newUser.github = $("#form-horizontal-text").val().trim();
    newUser.linkedin = $("#form-horizontal-text2").val().trim();
    showNextQuestion("questionnaire-item-online-profiles", "questionnaire-item-about")
});

//back button to previous question section
$("#back-from-online-profiles").on("click", function () {
    showPreviousQuestion("questionnaire-item-online-profiles", "questionnaire-item-idea");
 });

// final input from questions.handlebars - grabs what the user enters about themselves and stores it in the User table
// PUT request making the newUser object available to the server API (apiRoutes.js)
$("#create-profile").on("click", function (e) {
    e.preventDefault();
    newUser.profileStatement = $("#about-you").val().trim()
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

$("#delete").on("click", function(e){
    e.preventDefault();
    if(confirm("Are you sure you want to delete your profile?")){
            $.ajax({
                method: "DELETE",
                url: "/api/user/:id",
                success:   window.location.replace("/")
            })
        }else{
            alert("good choice!")
        }
    
    
})
// the following function controls the ui view of question.handlebars data ... it makes an effective 'carousel' when the submit button of each section is clicked
// jquery selectors are not working here to select the element so using vanilla js - don't know issue

//back button to previous question section
$("#back-from-about-me").on("click", function () {
    showPreviousQuestion("questionnaire-item-about", "questionnaire-item-online-profiles");
 });

// click event for 'back' navigation on questions screen

// controls ui view of question.handlebars data & makes an effective 'carousel' when the submit button of each section is clicked
// jquery selectors are not working here to select the element so using vanilla js - don't know issue
function showNextQuestion(qItem, nextQItem) {
    var currentQuestion = document.getElementById(qItem);
    var nextQuestion = document.getElementById(nextQItem);
    console.log(currentQuestion.id + " " + nextQuestion.id);
    currentQuestion.style.display = "none";
    nextQuestion.style.display = "block";
};

function showPreviousQuestion(qItem, prevQItem) {
    var currentQuestion = document.getElementById(qItem);
    var prevQuestion = document.getElementById(prevQItem);
    currentQuestion.style.display = "none";
    prevQuestion.style.display = "block";
};

// included at each 'next' section of questions that has a radio
// shows modal if the user hasn't made a selection
function modalAndNextScreen(att, currentWindow, nextWindow) {
    if (newUser[att] === undefined) {
        var modal = UIkit.modal("#modal-no-response");
        modal.show();
    } else {
        showNextQuestion(currentWindow, nextWindow);
    }
};
