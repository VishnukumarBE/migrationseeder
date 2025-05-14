'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Products',[
       {name:'Biscuits',price:20,stock:25,createdAt: new Date(),updatedAt: new Date()},
       {name:'pumpkin',price:30,stock:30,createdAt: new Date(),updatedAt: new Date()},
       {name:'chips',price:20,stock:20,createdAt: new Date(),updatedAt: new Date()}
   ],{})
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Products', null, {});
  }
};
