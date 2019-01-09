
 
  
     

   
     app.get("/profile", isAuthenticated, function(req, res) {
       db.User.findOne({
         where: {
           id: req.user.id
         },
       }).then(function(dbUser) {
         res.render("profile", { user: dbUser });
       });
     });
     
     app.get("/users/:id", isAuthenticated, function(req, res) {
       db.Example.findOne({ where: { id: req.params.id } }).then(function(
         dbExample
       ) {
         res.render("example", {
           example: dbExample
         });
       });
     });

     app.get("/questions", function(req, res) {
        return res.render("questions");
      });
    
   
  
  // Load login page
  // app.get("/", function(req, res) {
  //   res.render("index");
  // });

  // Load profile page


  // Load example page and pass in an example by id

  // Render 404 page for any unmatched routes

