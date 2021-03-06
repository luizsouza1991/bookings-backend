'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_id: DataTypes.UUID
  }, {
    timestamps: false,
    tableName: 'users'
  });
  User.associate = function(models) {
    User.belongsTo(models.Profile, { foreignKey: 'profile_id', as: 'profiles'})
  };
  return User;
};