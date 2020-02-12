'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('genders', [{
        type: "Male",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {
      type: "Female",
        createdAt: new Date(),
        updatedAt: new Date() 
    },
  {
    type:"Unisex",
    createdAt: new Date(),
    updatedAt: new Date() 
  }], {});
  },

  down: (queryInterface, Sequelize) => {
  //     return queryInterface.bulkDelete('genders',  [{
  //       type: "Male",
  //       createdAt: new Date(),
  //       updatedAt: new Date()
  //     },
  //   {
  //     type: "Female",
  //       createdAt: new Date(),
  //       updatedAt: new Date() 
  //   },
  // {
  //   type:"Unisex",
  //   createdAt: new Date(),
  //   updatedAt: new Date() 
  // }],{});
    
  }
};
