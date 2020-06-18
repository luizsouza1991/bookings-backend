'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'types'
  });
  Type.associate = function(models) {
    Type.hasMany(models.Product, { foreignKey: 'type_id', as: 'products' })
  };
  return Type;
};