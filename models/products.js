'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
    Products.hasMany(models.Infos, {
      foreignKey: 'product_id',
      as: 'infos'
    })

    Products.belongsTo(models.Restaurants, {
      foreignKey: 'restaurant_id',
      onDelete: 'CASCADE'
    })
  };
  return Products;
};