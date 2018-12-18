'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
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
    tableName: 'Product',
  });
  Product.associate = function(models) {
    // Many Info to One Product
    Product.Info = Product.hasMany(models.Info, {
      foreignKey: 'productId',
      as: 'infos'
    })

    // Many Product to One Restaurant
    Product.Restaurant = Product.belongsTo(models.Restaurant, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE'
    })
  };
  return Product;
};