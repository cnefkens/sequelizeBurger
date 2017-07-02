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
  }});

burgers.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    burgers.belongsTo(models.customers, {
      foreignKey: {
        allowNull: true
      }
    });
  }
// Syncs with DB
 return burgers;
};
