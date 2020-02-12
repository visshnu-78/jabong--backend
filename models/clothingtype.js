'use strict';
module.exports = (sequelize, DataTypes) => {
  const clothingType = sequelize.define('clothingType', {
    typename: DataTypes.STRING
  }, {});
  clothingType.associate = function(models) {
    // associations can be defined here
  };
  return clothingType;
};