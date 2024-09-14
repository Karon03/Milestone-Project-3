'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        static associate({ Account }) {
            Transaction.belongsTo(Account, { as: 'account', foreignKey: 'account_id' })
        }
    }

    Transaction.init({
        transaction_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'accounts',
                key: 'account_id'
            }
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
        }
    }, {
        sequelize,
        modelName: 'Transaction',
        tableName: 'transactions',
        timestamps: false
    });
    return Transaction;
};
