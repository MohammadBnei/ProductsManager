'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
    Restaurants.hasMany(models.Infos, {
      foreignKey: 'restaurant_id',
      as: 'infos'
    })
    Restaurants.hasMany(models.Products, {
      foreignKey: 'restaurant_id',
      as: 'products'
    })
  };
  return Restaurants;
};