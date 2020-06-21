'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    date_start: DataTypes.DATE,
    date_finish: DataTypes.DATE,
    status_id: DataTypes.UUID,
    product_id: DataTypes.UUID
  }, {
    timestamps: false,
    tableName: 'bookings'
  });
  Booking.associate = function(models) {
    Booking.belongsTo(models.Product, { foreignKey: 'product_id', as: 'products'})
    Booking.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status'})
  };
  return Booking;
};