'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    tableName: 'Restaurants',
  });
  Restaurants.associate = function(models) {
    // associations can be defined here
    models.Restaurants.hasMany(models.Infos, {
      foreignKey: 'restaurantId',
      as: 'infos'
    })
    models.Restaurants.hasMany(models.Products, {
      foreignKey: 'restaurantId',
      as: 'products'
    })
  };
  return Restaurants;
};