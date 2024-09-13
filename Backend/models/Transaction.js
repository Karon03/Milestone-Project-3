'use strict'
const { DataTypes, Model } = require('sequelize') 
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
    }
    
    Transaction.init({
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users',  // This assumes you have a User model and table called 'users'
              key: 'id'
            }
          },
          type: {
            type: DataTypes.ENUM('income', 'expense'),  // Only allow 'income' or 'expense'
            allowNull: false
          },
        // Category of the transaction (e.g., "Groceries", "Rent")
          category: {
          type: DataTypes.STRING,
          allowNull: false
            },

          amount: {
          type: DataTypes.FLOAT,
         allowNull: false
            },

            date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW 
              },
            

            sequelize,  
            modelName: 'Transaction',  // Name of the model
            tableName: 'transactions',  // Table name
            timestamps: true, 
          })};
          
          // Export the model
          module.exports = Transaction;