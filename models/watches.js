'use strict';
module.exports = (sequelize, DataTypes) => {
  const watches = sequelize.define('watches', {
    watchTypeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    genderId: DataTypes.INTEGER
  }, {});
  watches.associate = function(models) {
    watches.belongsTo(models.gender)
    watches.belongsTo(models.watchType)
  };
  return watches;
};