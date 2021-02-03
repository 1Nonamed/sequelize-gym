"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Instructors extends Model {
    static associate(models) {
      this.hasOne(models.Classes, {
        foreignKey: "instructorId",
      });
    }
  }
  Instructors.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Instructors",
    }
  );
  return Instructors;
};
