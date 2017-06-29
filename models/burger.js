var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var connection = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var burger = connection.define("burgers", {
  burger_name: {
    type: Sequelize.STRING
  },
    devoured: {
    type: Sequelize.BOOLEAN
  }},
{
  timestamps: false
});

// Syncs with DB
burger.sync();


// Export the database functions for the controller (catsController.js).
module.exports = burger;