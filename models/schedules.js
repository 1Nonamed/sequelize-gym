'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    static associate(models) {
      this.belongsToMany(models.Classes, {
        through: 'Classes_Schedule',
        foreignKey: 'classId'
      })
    }
  };
  Schedules.init({
    startSchedule: DataTypes.DATE,
    endSchedule: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedules;
};