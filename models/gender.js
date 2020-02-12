'use strict';
module.exports = (sequelize, DataTypes) => {
  const gender = sequelize.define('gender', {
    type: DataTypes.STRING
  }, {});
  gender.associate = function(models) {
    // associations can be defined here
  };
  return gender;
};