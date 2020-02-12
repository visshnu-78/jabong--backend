'use strict';
module.exports = (sequelize, DataTypes) => {
  const watchType = sequelize.define('watchType', {
    typename: DataTypes.STRING
  }, {});
  watchType.associate = function(models) {
    // associations can be defined here
  };
  return watchType;
};