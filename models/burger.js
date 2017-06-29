module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
// Creates a "Chirp" model that matches up with DB
  burger_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }},
{
  timestamps: false
});

// Syncs with DB
 return burgers;
};
