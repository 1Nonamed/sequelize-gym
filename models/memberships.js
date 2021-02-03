"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Memberships extends Model {
    static associate(models) {
      this.hasMany(models.Payments, {
        foreignKey: "membershipId",
      });
    }
  }
  Memberships.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Memberships",
    }
  );
  return Memberships;
};
