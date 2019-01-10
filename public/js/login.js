$("#user-login").on("click", function(e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/api/signup",
      data: {
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
        window.location.replace("/profile");
      })
      .catch(function(err) {
        console.log(err);
        alert(err.responseText);
      });
  });
  