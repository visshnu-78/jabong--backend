'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('clothingTypes', [{
        typename: 'shirt',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        typename: 'pant',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        typename: 't-shirt',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        typename: 'trousers',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        typename: 'saree',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        typename: 'chudidhar',
        createdAt: new Date(),
        updatedAt: new Date()  
      },
      {
        typename: 'leggins',
        createdAt: new Date(),
        updatedAt: new Date()  
      }],
       {});
   
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
