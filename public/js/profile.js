$("#connect").on("click", function(e) {
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
    })
    .catch(function(err) {
      console.log(err);
      alert(err.responseText);
    });
});
