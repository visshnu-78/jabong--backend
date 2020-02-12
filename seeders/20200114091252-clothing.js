'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('clothings', [{
        clothingTypeId: 1,
      name: "demo",
    price: "15000",
    description: "demo-desc",
    image: "https://google.com",
    genderId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
