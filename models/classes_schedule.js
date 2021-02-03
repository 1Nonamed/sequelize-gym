'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes_Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Classes_Schedule.init({
    classId: DataTypes.INTEGER,
    scheduleId: DataTypes.INTEGER,
    day: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Classes_Schedule',
  });
  return Classes_Schedule;
};