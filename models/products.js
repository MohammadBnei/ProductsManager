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
    },
  }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    tableName: 'Products',
  });
  Products.associate = function(models) {
    // Many Infos to One Products
    models.Products.hasMany(models.Infos, {
      foreignKey: 'productId',
      as: 'infos'
    })

    // Many Products to One Restaurants
    models.Products.belongsTo(models.Restaurants, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE'
    })
  };
  return Products;
};