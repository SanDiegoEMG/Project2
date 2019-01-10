 // at end of sign-up modal - grabs info entered there, makes it available to the server API and redirects the user to the questions.handlebars page 
 $("#user-sign-up").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/signup",
      data: {
        fullName: $("#full-name-sign-up")
          .val()
          .trim(),
        email: $("#email-sign-up")
          .val()
          .trim(),
        password: $("#password-sign-up")
          .val()
          .trim(),
        userName: $("#user-name-sign-up")
          .val()
          .trim()
      }
    })
      .then(function(data) {
        console.log(data);
        window.location.replace("/questions");
      })
      .catch(function(err) {
        console.log(err);
        alert(err.responseText);
      });
  });
  