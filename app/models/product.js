'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    type_id: DataTypes.UUID
  }, {
    timestamps: false,
    tableName: 'products'
  });
  Product.associate = function(models) {
    Product.belongsTo(models.Type, { foreignKey: 'id', as: 'types' })
    Product.hasOne(models.Booking, { foreignKey: 'product_id', as: 'bookings'})
  };
  return Product;
};