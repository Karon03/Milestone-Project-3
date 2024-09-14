'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',  // Refers to the 'accounts' table
          key: 'account_id'  // Refers to the 'account_id' column in 'accounts' table
        },
        onDelete: 'CASCADE', // Optional: delete transactions if the associated account is deleted
      },
      type: {
        type: Sequelize.ENUM('income', 'expense'),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions');
  }
};
