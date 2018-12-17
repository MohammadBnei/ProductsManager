'use strict';
module.exports = (sequelize, DataTypes) => {
  const Infos = sequelize.define('Infos', {
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
    tableName: 'Infos',
  });
  Infos.associate = function(models) {
    // associations can be defined here
    models.Infos.belongsTo(models.Restaurants, {
      foreignKey: 'restaurantId',
      onDelete: 'CASCADE'
    })

    models.Infos.belongsTo(models.Products, {
      foreignKey: 'productId',
      onDelete: 'CASCADE'
    })
  };
  return Infos;
};