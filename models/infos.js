'use strict';
module.exports = (sequelize, DataTypes) => {
  const Info = sequelize.define('Info', {
    language: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'en',
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    tableName: 'Info',
  });
  Info.associate = function(models) {
    Info.belongsTo(models.Restaurant, {
      foreignKey: 'restaurantId'
    });

    Info.belongsTo(models.Product, {
      foreignKey: 'productId'
    });
  };
  
  return Info;
};