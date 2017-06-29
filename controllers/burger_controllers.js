var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.findAll().then(function(results) {
    console.log(results);
    res.render("index",{burgers: results});
  });
});

router.post("/", function(req, res) {
  burger.create({
    burger_name: req.body.name,
    devoured: false
   }).then(function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  burger.update({
    devoured: true,
  },  { where: {
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
module.exports = router;