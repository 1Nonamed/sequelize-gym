'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    static associate(models) {
      this.belongsTo(models.Clients, {
        foreignKey: 'clientId'
      })
      this.belongsTo(models.Memberships, {
        foreignKey: 'membershipId'
      })
    }
  };
  Payments.init({
    amount: DataTypes.INTEGER,
    date: DataTypes.DATE,
    clientId: DataTypes.INTEGER,
    membershipId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};