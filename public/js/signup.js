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
          .trim()
      }
    })
      .then(function(data) {
        console.log(data);
<<<<<<< HEAD
        window.location.replace("questions");
=======
        window.location.replace("/questions");
>>>>>>> 27ab43d5ac6912de352429cb3256138515fa8ee7
      })
      .catch(function(err) {
        console.log(err);
        alert(err.responseText);
      });
  });
  