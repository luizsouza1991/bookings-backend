'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('status', 
      [
        {
          name: 'em_aberto',
          description: 'Em aberto'
        },
        {
          name: 'autorizado',
          description: 'Autorizado'
        },
        {
          name: 'expirado',
          description: 'Expirado'
        },
        {
          name: 'realizado',
          description: 'Realizado'
        }
      ]
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('status', null, {});
  }
};
