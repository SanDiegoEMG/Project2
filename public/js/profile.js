$("#connect").on("click", function(e) {
    e.preventDefault();
var uName = $(this).data("user");
console.log(uName);
$.ajax({
    method: "POST",
    url: "/api/user/connect",
    data: {
      userName: uName
    }
  })
    .then(function(data) {
      console.log(data);
    //   window.location.replace("/questions");
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});