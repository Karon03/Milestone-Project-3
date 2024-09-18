'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('transactions', [
      {
        type: 'income',
        category: 'Salary',
        amount: 5000,
        date: new Date('2024-09-13'),
        account_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'expense',
        category: 'Groceries',
        amount: 150,
        date: new Date('2024-09-14'),
        account_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('transactions', null, {});
  }
};

