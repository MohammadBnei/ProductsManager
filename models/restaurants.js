'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
    tableName: 'Restaurant',
  });
  Restaurant.associate = (models) => {
    // associations can be defined here
    Restaurant.Info = Restaurant.hasMany(models.Info, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })
    Restaurant.Product = Restaurant.hasMany(models.Product, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE'
    })
  };

Restaurant.getInfosByLanguage = (lang) => {
  return this.getInfos({
    where: {
      language: lang.util,
    }
  })
}

  return Restaurant;
}