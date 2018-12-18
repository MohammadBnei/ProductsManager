'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Restaurant', [{
        address: '12 test Paris',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurant', null, {});
  }
};
