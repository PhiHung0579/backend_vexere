'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      'stations', [{
        name: 'Bến xe miền đông',
        address:"315 phuong phu my hung",
        province:"hcm",
        createdAt:"2024-03-20 04:17:35",
        updatedAt:"2024-03-20 04:17:35"
      }], {});

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     * 
     * 
     */
    await queryInterface.bulkDelete('stations', null, {});
  }
};
