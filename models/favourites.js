'use strict';
module.exports = (sequelize, DataTypes) => {
  const favourites = sequelize.define('favourites', {
    fid: DataTypes.INTEGER,
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    userId: DataTypes.INTEGER
  }, {});
  favourites.associate = function(models) {
    // associations can be defined here
    favourites.belongsTo(models.user)
  };
  return favourites;
};