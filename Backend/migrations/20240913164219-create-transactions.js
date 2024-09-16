'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      transaction_id:  {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'accounts',  // References the 'accounts' table
          key: 'account_id'  // Corrected to reference 'account_id' in the 'accounts' table
        },
        onDelete: 'CASCADE',  // Optional: delete transactions if the associated account is deleted
        onUpdate: 'CASCADE',  // Optional: update foreign key if account id is updated
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
        allowNull: falsenpm
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
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
