'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'status'
  });
  Status.associate = function(models) {
    Status.hasMany(models.Booking, { foreignKey: 'status_id', as: 'bookings' })
  };
  return Status;
};