 $("#user-sign-up").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/signup",
      data: {
        fullName: $("#full-name")
          .val()
          .trim(),
        email: $("#email")
          .val()
          .trim(),
        password: $("#password")
          .val()
          .trim()
      }
    })
      .then(function(data) {
        console.log(data);
        window.location.replace("/api/questions");
      })
      .catch(function(err) {
        console.log(err);
        alert(err.responseText);
      });
  });
  