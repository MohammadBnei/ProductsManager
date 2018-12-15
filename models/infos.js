'use strict';
module.exports = (sequelize, DataTypes) => {
  const Infos = sequelize.define('Infos', {
    language: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Infos.associate = function(models) {
    // associations can be defined here
    Infos.belongsTo(models.Restaurants, {
      foreignKey: 'restaurant_id',
      onDelete: 'CASCADE'
    })

    Infos.belongsTo(models.Products, {
      foreignKey: 'product_id',
      onDelete: 'CASCADE'
    })
  };
  return Infos;
};