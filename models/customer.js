module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define("customers", {
// Creates a "customers" model that matches up with DB
  customer_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    devoured_cnt: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
    max:  3
    }
  }});
 customer.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    customer.hasMany(models.burgers);
  }

// Syncs with DB
 return customer;
};
