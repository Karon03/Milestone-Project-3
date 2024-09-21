'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        static associate({ Account }) {
            // Define association between Transaction and Account models
            Transaction.belongsTo(Account, { as: 'account', foreignKey: 'account_id' });
        }
    }

    Transaction.init({
        transaction_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.ENUM('income', 'expense'),
            allowNull: false
        },
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
        account_id: {  // Foreign key column CHANGED HERE
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'accounts',  // Name of the table being referenced
                key: 'account_id'           // Primary key column in the referenced table TO HERE
            },
        }
    }, {
        sequelize,
        modelName: 'Transaction',
        tableName: 'transactions',
        timestamps: false
    });

    return Transaction;
};
