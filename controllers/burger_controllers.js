

// Import the model (burger.js) to use its database functions.
var db  = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports=function(app) {
  app.get("/", function(req, res) {
    db.burgers.findAll({}).then(function(results) {
    console.log(results);
    res.render("index",{burgers: results});
     });
  });

 app.post("/", function(req, res) {
    db.burgers.create({
        burger_name: req.body.name,
        devoured: false
      }).then(function() {
        res.redirect("/");
    });
    });

 app.put("/:id", function(req, res) {
      db.burgers.update({
        devoured: true,
          },  
          { where: {
            id: req.params.id
        }}).then(function() {
      res.redirect("/");
      });
    });

  // router.delete("/:id", function(req, res) {
  //   var condition = "id = " + req.params.id;

  //   cat.delete(condition, function() {
  //     res.redirect("/");
  //   });
  // });

// Export routes for server.js to use.
};
