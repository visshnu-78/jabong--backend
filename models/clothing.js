'use strict';
module.exports = (sequelize, DataTypes) => {
  const clothing = sequelize.define('clothing', {
    clothingTypeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    genderId: DataTypes.INTEGER
  }, {});
  clothing.associate = function(models) {
    // associations can be defined here
    clothing.belongsTo(models.gender);
    clothing.belongsTo(models.clothingType)
  };
  return clothing;
};