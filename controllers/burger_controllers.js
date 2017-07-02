

// Import the model (burger.js) to use its database functions.
var db  = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports=function(app) {
  app.get("/", function(req, res) {
    var query = {};
    //console.log(req.query);
    if (req.query.customer_Id) {
      query.customerId = req.query.customer_id;
    //console.log(query);
    db.burgers.findAll({
      where: {query,
      include: [db.customers]
   }}).then(function(results) {
    //console.log(results);
    res.render("index",{burgers: results});
     });
  }
else {
  db.burgers.findAll({
      include: [db.customers]
   }).then(function(results) {
    //console.log(results);
    res.render("index",{burgers: results});
     });
}
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
   db.customers.findOrCreate({where: {customer_name: req.body.customer_name}})
  .spread((customer, created) => {
    //console.log(customer.devoured_cnt);
      if (parseInt(customer.devoured_cnt)==3) {
         console.log("You have already eaten 3 hamburgers. You cannot devour anymore!");
        res.redirect("/");
        }
        else {
          db.burgers.update({
              devoured: true,
              customerId: customer.id},
             {where: {
              id: req.params.id
          }}).then(function(results) {
            //console.log(results);
              db.customers.update({
                devoured_cnt: customer.devoured_cnt+1
              },{where: {id: customer.id}}).then(function(results) {
              res.redirect("/");
          });
      });
    }
});
 });
}
   