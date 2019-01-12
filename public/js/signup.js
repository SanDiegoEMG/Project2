 // at end of sign-up modal - grabs info entered there, makes it available to the server API and redirects the user to the questions.handlebars page 
 $("#user-sign-up").on("click", function(e) {
  
  e.preventDefault();

  // var username = $("#user-name-sign-up").val().trim()
  // var pwd1 = $("#password-sign-up").val().trim()
  

  // function checkform(form){
  //     if(username == "") {
  //       alert("Error: Username cannot be blank!");
  //       username.focus();
  //       return false;
  //     }
    
  
  //     if(pwd1 != "" ) {
  //       if(pwd1.length < 6) {
  //         alert("Error: Password must contain at least six characters!");
  //         form.pwd1.focus();
  //         return false;
  //       }
  //       if(pwd1 == username) {
  //         alert("Error: Password must be different from Username!");
  //         form.pwd1.focus();
  //         return false;
  //       }
  //       re = /[0-9]/;
  //       if(!re.test(pwd1)) {
  //         alert("Error: password must contain at least one number (0-9)!");
  //         form.pwd1.focus();
  //         return false;
  //       }
  //       re = /[a-z]/;
  //       if(!re.test(pwd1)) {
  //         alert("Error: password must contain at least one lowercase letter (a-z)!");
  //         form.pwd1.focus();
  //         return false;
  //       }
  //       re = /[A-Z]/;
  //       if(!re.test(pwd1)) {
  //         alert("Error: password must contain at least one uppercase letter (A-Z)!");
  //         form.pwd1.focus();
  //         return false;
  //       }
  //     } else {
  //       alert("Error: Please check that you've entered your password!");
  //       form.pwd1.focus();
  //       return false;
  //     }
  // }

  // checkform()

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


 
    
